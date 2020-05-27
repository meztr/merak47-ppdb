/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../../assets/scss/style.scss';
import Aux from '../hoc/_Aux';

import useForm from '../../utils/useForm';
import { signin, signinCalon } from '../../store/actions/auth';
import validate from '../../utils/validateLoginForm';
import Spinner from './Spinner';
import packageJson from '../../../package.json';
import LogoMerak from '../../assets/images/merak2020.jpg';
// import '../../css/index.css';

const Logina = ({
  signin,
  signinCalon,
  authMsg,
  history,
  loading
}) => {
  const [panitia, setPanitia] = useState(false);
  const [credentials, handleChange, handleSubmit, errors] = useForm(
    login,
    validate,
    panitia
  );

  function login() {
    if (!panitia) {
      signinCalon(credentials.email, credentials.password, () =>
        // alert('qwe');
        setTimeout(() => {
          return (<Redirect from="/" to="/user/beranda"/>)
        }, 5000) 
      );
    } else {
      signin(credentials.email, credentials.password, () =>
      // history.push("/user/beranda")
        // history.push("/")
        setTimeout(() => {
          return (<Redirect from="/" to="/user/panitia/dashboard"/>)
        }, 5000)        
      );
    }
  }

  return (
    <Aux>
      {/* <Breadcrumb/> */}
      <div className="auth-wrapper">
        <div className="auth-content">                        
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                {/* <i className="feather icon-unlock auth-icon"/> */}
                <img alt="merak" src={LogoMerak} style={{width:'75px', height:'75px', border:'2px solid lightgrey', borderRadius: '25%'}}/>                
              </div>
              <h3 className="mb-4">Login PPDB</h3>
              <h5>
                {panitia ? 'Panitia' : 'Calon Siswa'}
              </h5>
              {authMsg && <p className="auth-message">{authMsg}</p>}              
              <form onSubmit={handleSubmit} noValidate>
                <div className="input-group mb-3">
                  <input 
                    type="email"
                    id="email"
                    name="email"            
                    value={credentials.email}
                    placeholder={panitia ? 'Email Address' : 'No.Pendaftaran' }
                    onChange={handleChange}
                    className={                                            
                      (errors.emailIsEmpty || errors.emailFormatInvalid) &&
                                            'input-error form-control'
                    }
                    className="form-control" 
                  />
                  <div className="input-group mb-3">
                    {errors.emailIsEmpty && <small>{errors.emailIsEmpty}</small>}
                    {errors.emailFormatInvalid && (
                      <small>{errors.emailFormatInvalid}</small>
                    )}
                  </div>
                                    
                </div>

                <div className="input-group mb-4">
                  <input 
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    placeholder={panitia ? 'Password' : 'NISN (Nomor Induk Siswa Nasional)'}
                    onChange={handleChange}
                    className={
                      (errors.passIsStrong || errors.passIsEmpty) && 'input-error form-control'
                    }                                        
                    className="form-control" 
                  />
                  <div className="input-group mb-3">
                    {errors.passIsInvalid && <small>{errors.passIsInvalid}</small>}
                    {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary shadow-2 mb-4">
                  {loading ? <Spinner />: 'Sign In'}
                </button>
              </form>

              <div>
                {
                  panitia && (
                    <button onClick={() => setPanitia(false)} className="btn" style={{color: 'gray'}}>
                        Sebagai Calon Siswa
                    </button>
                  )
                }
                {
                  !panitia && (
                    <button onClick={() => setPanitia(true)} className="btn" style={{color: 'gray'}}>
                        Sebagai Panitia
                    </button>
                  )
                }
              </div>
            </div>
            <div style={{textAlign: 'center', marginBottom:'15px'}}><small>versi {packageJson.version}</small></div>
            {/* <div style={{textAlign: 'center', marginBottom: '10px'}}><small>ICT SMK Muhammadiyah Sampit ©2020</small></div> */}
          </div>          
        </div>
      </div>
    </Aux>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth,
    authMsg: state.authReducer.authMsg,
    calonSiswaValues: state.authReducer.calonSiswaValues,
    loading: state.apiStatusReducer.apiCallsInProgress > 0
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    signin: (email, password, callback) => dispatch(signin(email, password, callback)),
    signinCalon: (kodePendaftaran, nisn, callback) => dispatch(signinCalon(kodePendaftaran, nisn, callback))
  };
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logina);