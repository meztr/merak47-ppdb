import React from 'react';
// import React, { useState } from 'react';
import { connect } from "react-redux";
// import {NavLink} from 'react-router-dom';

import '../../assets/scss/style.scss';
import Aux from "../hoc/_Aux";

import useForm from "../../utils/useForm";
import { signin } from "../../store/actions/auth";
import validate from "../../utils/validateLoginForm";
import Spinner from "./Spinner";

const Logina = ({
    signin,   
    authMsg,
    history,
    loading
}) => {
    const [credentials, handleChange, handleSubmit, errors] = useForm(
        login,
        validate
    );

    function login() {
        signin(credentials.email, credentials.password, () =>
            history.push("/user/beranda")
        );     
    }

    return (
        <Aux>
            {/* <Breadcrumb/> */}
            <div className="auth-wrapper">
                <div className="auth-content">                        
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon"/>
                            </div>
                            <h3 className="mb-4">Login PPDB</h3>
                            {authMsg && <p className="auth-message">{authMsg}</p>}
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="input-group mb-3">
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"            
                                        value={credentials.email}
                                        placeholder="No.Pendaftaran"
                                        onChange={handleChange}
                                        className={                                            
                                            (errors.emailIsEmpty || errors.emailFormatInvalid) &&
                                            "input-error form-control"
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
                                        placeholder="NISN (Nomor Induk Siswa Nasional)"
                                        onChange={handleChange}
                                        className={
                                            (errors.passIsStrong || errors.passIsEmpty) && "input-error form-control"
                                        }                                        
                                        className="form-control" 
                                    />
                                    {errors.passIsStrong && <small>{errors.passIsStrong}</small>}
                                    {errors.passIsEmpty && <small>{errors.passIsEmpty}</small>}
                                </div>
                                <button type="submit" className="btn btn-primary shadow-2 mb-4">
                                    {loading ? <Spinner />: "Sign In"}
                                </button>
                            </form>
                        </div>
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
      signin: (email, password, callback) =>
        dispatch(signin(email, password, callback))
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logina);