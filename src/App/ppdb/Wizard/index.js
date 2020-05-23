import React, { useState } from 'react';
import {connect} from 'react-redux';
import WizardForm from './WizardForm';
import WizardTest from './WizardTest';
import '../../../assets/scss/style.scss';
import firebase from '../../../services/firebase';
// import { signinAnonim, registerWithValue } from '../../../store/actions/auth';
import { registerSuccessWithValue, registerErrorWithValue } from '../../../store/actions/auth';

const Wizard = ({
  // registerCalonSiswa,
  // authMsg,
  // registerWithValue, 
  registerSuccessWithValue,
  registerErrorWithValue,
  history,
  loading
}) => {

  const proceedRegisterCalonSiswa = (values) =>
    new Promise(resolve=> {
      firebase
        .auth()
        .signInAnonymously()
        .then(data => {

          const randomkode = Math.floor(100000 + Math.random() * 900000);

          values = {
            'data': values,
            'kodePendaftaran' : randomkode,
            'namasiswa' : values.namasiswa,
            'nisn' : values.nisn,
            'verifikasi' : 'belum',   // 3 state: #belum, #gagal, #berhasil
            'diterima' : false,
            'lunasPembayaran' : false,
            'calonid' : data.user.uid,
            'createAt' : firebase.database.ServerValue.TIMESTAMP,
            'dibuatSaat' : new Date()
          };
          // retVal = values
                    
          firebase.database()
            .ref(`ppdb2020/calonsiswa/${randomkode}`)
            .set( values );                    

          history.push({
            pathname: '/user/beranda'
          });
          console.log(`You've submitted values =>\n\n ${JSON.stringify(values, null, 2)}` );
          localStorage.setItem('ppdbcalondata', JSON.stringify(values, null, 2));
          registerSuccessWithValue(values);
                    
        })
        .catch( err => {
          console.log('Register Calon Siswa failed =>\n\n ', err.code , ' -> ', err.message );
          localStorage.removeItem('ppdbcalondata');
          registerErrorWithValue(err);
        });        
    });

  // proceedRegisterCalonSiswa.then( result => {
  //     this.props.registerSuccessWithValue(result)
  // }, function(error) {
  //     this.props.registerErrorWithValue(error)
  // })
    
  return (    
    // <WizardTest onSubmit={proceedRegisterCalonSiswa} />
    <WizardForm onSubmit={proceedRegisterCalonSiswa} />
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth,        
    authMsg: state.authReducer.authMsg,
    calonSiswaValues: state.authReducer.calonSiswaValues
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // signinAnonim: (values) => dispatch(signinAnonim(values))
    registerSuccessWithValue: (values) => dispatch(registerSuccessWithValue(values)),
    registerErrorWithValue: (err) => dispatch(registerErrorWithValue(err))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);