import React, { useState } from 'react'
// import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux'
// import { reducer as reduxFormReducer } from 'redux-form'
import WizardForm from "./WizardForm"
// import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
// import WizardTest from './WizardTest'
import '../../../assets/scss/style.scss';
// import Aux from "../../hoc/_Aux";
import firebase from '../../../services/firebase'

// import Loader from '../Loader'
// import Beranda from '../Protected/Calon/Beranda/Beranda'

// const dest = document.getElementById('content')
// const reducer = combineReducers({
//   form: reduxFormReducer // mounted under "form"
// })

// const store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducer)

// const showResults = values =>
//     new Promise(resolve => {
//         setTimeout(() => {
//         // simulate server latency
//         console.log(`values=>\n\n ${JSON.stringify(values, null, 2)}` )
//         // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//         resolve()
//         }, 500)
// })



const Wizard = ({ 
        auth, 
        history
}) => {
    const [dataCalonSiswa, setDataCalonSiswa] = useState(false);
        
    const registerCalonSiswa = values =>
        new Promise(resolve=> {
            firebase
                .auth()
                .signInAnonymously()
                .then(data => {

                    // const kodePendaftaran = Math.floor(100000 + Math.random() * 900000);
                    // const namasiswa = values.namasiswa;
                    // const nisn = values.nisn;
                    // const verifikasi = false;
                    // const diterima = false;
                    // const lunasPembayaran = false;
                    // const calonid = data.user.uid;
                    
                    // firebase.database()
                    //         .ref(`ppdb2020/calonsiswa/${kodePendaftaran}`) //.ref(`ppdb2020/calonsiswa/${nisn}`)
                    //         .set({
                    //             calonid,
                    //             nisn,
                    //             namasiswa,
                    //             verifikasi,
                    //             diterima,
                    //             lunasPembayaran,
                    //             "data": values
                    //         })

                    history.push({
                        pathname: "/user/beranda",
                        state: { values }
                    });
                    console.log(`You've submitted values =>\n\n ${JSON.stringify(values, null, 2)}` )

                    // firebase.database()
                    //         .ref(`ppdb2020/calonsiswa/${nisn}`)
                    //         .once('value', (snapshot) => {
                    //             const val = snapshot.val();
                                
                    //             if (val === null) {

                    //                 val.calonid = calonid;
                    //                 val.nisn = nisn;
                    //                 val.namasiswa = namasiswa;
                    //                 val.verifikasi = verifikasi;
                    //                 val.diterima = diterima;
                    //                 val.lunasPembayaran = lunasPembayaran;
                    //                 val.data = values;

                    //                 history.push({
                    //                     pathname: "/user/beranda",
                    //                     state: { values }
                    //                 });
                                    
                    //             } else {
                                    
                    //                 // return history to NISN sudah terdaftar
                    //                 history.push({
                    //                     pathname: "/pengumuman",
                    //                     state: { values }
                    //                 });
                    //             }                           
                    //         })
                    
                    // <Beranda />; 72344552
                });
    })

    return (  
        <WizardForm onSubmit={registerCalonSiswa} />
    )
}

function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth,
        fire: state.firebaseReducer
        // calonsiswadata : state.values
    };
}

export default connect(mapStateToProps)(Wizard);