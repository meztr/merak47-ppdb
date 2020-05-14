import React, { useState } from 'react';
import {connect} from 'react-redux';
import WizardForm from './WizardForm';
import WizardTest from './WizardTest';
import '../../../assets/scss/style.scss';
import firebase from '../../../services/firebase'
import { signinAnonim } from '../../../store/actions/auth';

const Wizard = ({
    registerCalonSiswa,
    authMsg,
    registerWithValue, 
    history,
    loading
}) => {
    const proceedRegisterCalonSiswa = values =>
        new Promise(resolve=> {
            firebase
                .auth()
                .signInAnonymously()
                .then(data => {

                    const randomkode = Math.floor(100000 + Math.random() * 900000);

                    values = {
                        "data": values,
                        "kodePendaftaran" : randomkode ,
                        "namasiswa" : values.namasiswa,
                        "nisn" : values.nisn,
                        "verifikasi" : false,
                        "diterima" : false,
                        "lunasPembayaran" : false,
                        "calonid" : data.user.uid
                    }
                    
                    firebase.database()
                            .ref(`ppdb2020/calonsiswa/${randomkode}`)
                            .set( values )                    

                    history.push({
                        pathname: "/user/beranda"
                    });
                    console.log(`You've submitted values =>\n\n ${JSON.stringify(values, null, 2)}` )
                    localStorage.setItem('ppdbcalondata', JSON.stringify(values, null, 2));
                })
                .catch( err => {
                    console.log(`Register Calon Siswa failed =>\n\n `, err.code , " -> ", err.message )
                    localStorage.removeItem('ppdbcalondata')          
                });

        
    })    
    
    return (    
        <WizardTest onSubmit={proceedRegisterCalonSiswa} />
        // <WizardForm onSubmit={proceedRegisterCalonSiswa} />
    )
}

function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth,        
        authMsg: state.authReducer.authMsg,
        calonSiswaValues: state.authReducer.calonSiswaValues
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signinAnonim: (values) => dispatch(signinAnonim(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);