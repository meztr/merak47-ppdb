import React, { useState } from 'react'
// import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux'
// import { reducer as reduxFormReducer } from 'redux-form'
// import WizardForm from "./WizardForm"
// import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import WizardTest from './WizardTest'
import '../../../assets/scss/style.scss';
// import Aux from "../../hoc/_Aux";
import firebase from '../../../services/firebase'

// import { signinAnonim } from "../../../store/actions/auth"
// import { registerCalonSiswa } from "../../../store/actions/auth";

// import Loader from '../Loader'
// import Beranda from '../Protected/Calon/Beranda/Beranda'

const Wizard = ({
    registerCalonSiswa,
    authMsg,
    calonSiswaValues, 
    history,
    loading
}) => {

    

    const proceedRegisterCalonSiswa = values =>
        new Promise(resolve=> {
            firebase
                .auth()
                .signInAnonymously()
                .then(data => {

                    const kodePendaftaran = Math.floor(100000 + Math.random() * 900000);
                    const namasiswa = values.namasiswa;
                    const nisn = values.nisn;
                    const verifikasi = false;
                    const diterima = false;
                    const lunasPembayaran = false;
                    const calonid = data.user.uid;
                    
                    firebase.database()
                            .ref(`ppdb2020/calonsiswa/${kodePendaftaran}`) //.ref(`ppdb2020/calonsiswa/${nisn}`)
                            .set({
                                calonid,
                                nisn,
                                namasiswa,
                                verifikasi,
                                diterima,
                                lunasPembayaran,
                                "data": values
                            })
                    
                    // this.props.registerCalonSiswa(values); // props undefined

                    // dispatch({
                    //     type:"FETCH_CALON_DATA",
                    //     payload: snapshot.val() || {}
                    // });

                    history.push({
                        pathname: "/user/beranda",
                        state: { values }
                    });
                    console.log(`You've submitted values =>\n\n ${JSON.stringify(values, null, 2)}` )                    
                });
    })
    
    return (  
        // <WizardForm onSubmit={registerCalonSiswa} />
        <WizardTest onSubmit={proceedRegisterCalonSiswa} />

    )
}

function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth,        
        authMsg: state.authReducer.authMsg,
        calonSiswaValues: state.authReducer.calonSiswaValues
        // registerCalonSiswa: state.authReducer.registerCalonSiswa
    };
}

// function mapDispatchToProps(dispatch) {
//     // return { actions: bindActionCreators()
//     return {
//         registerCalonSiswa: values => dispatch(registerCalonSiswa(values))
//     }
//   }

export default connect(mapStateToProps)(Wizard);


    // const staticTest = {
    //     "setuju": true,
    //     "namasiswa": "Wahyuli Dwiki Nanda",
    //     "nisn": "20181234",
    //     "nik": "12342018",
    //     "jeniskelamin": "laki-laki",
    //     "tempatlahirsiswa": "Sampit",
    //     "tgllahirsiswa": "0",
    //     "blnlahirsiswa": "Januari",
    //     "tahunlahirsiswa": "2020",
    //     "agamaSiswa": "Islam",
    //     "kewarganegaraan": "Indonesia",
    //     "alamatsiswa": "Wengga Raya",
    //     "tinggalbersama": "Bersama orang tua",
    //     "anakkebrp": "0",
    //     "jmlsaudara": "1",
    //     "statusdlmkeluarga": "Anak Kandung",
    //     "nohapesiswa": "08123456789",
    //     "pilihan1": "TKJ",
    //     "pilihan2": "OTKP",
    //     "namaAyah": "Jaunari Dwiki",
    //     "pendidikanAyah": "S1",
    //     "pekerjaanAyah": "Wiraswasta",
    //     "agamaAyah": "Islam",
    //     "penghasilanAyah": "5jt-10jt",
    //     "nohapeAyah": "0812345678",
    //     "namaIbu": "Dwikinawati",
    //     "pendidikanIbu": "S1",
    //     "pekerjaanIbu": "Ibu Rumah Tangga",
    //     "agamaIbu": "Islam",
    //     "penghasilanIbu": "1jt-3jt",
    //     "nohapeIbu": "0898213332",
    //     "namaWali": "Nanda Dwinda",
    //     "pendidikanWali": "S1",
    //     "pekerjaanWali": "PNS",
    //     "penghasilanWali": "3jt-5jt",
    //     "nohapeWali": "0819238811",
    //     "sekolahasal": "SMPN 14 Sampit",
    //     "statussekolah": "Negeri",
    //     "alamatSekolah": "Metro Belakang Banar",
    //     "tahunlulus": "2020"
    // }
