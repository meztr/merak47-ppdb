import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import WizardForm from "./WizardForm"
import '../../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import firebase from '../../../services/firebase'

// const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})

const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer)

const showResults = values =>
    new Promise(resolve => {
        setTimeout(() => {
        // simulate server latency
        console.log(`values=>\n\n ${JSON.stringify(values, null, 2)}` )
        // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        resolve()
        }, 500)
})

const registerCalonSiswa = values =>
    new Promise(resolve=> {
        firebase
            .auth()
            .signInAnonymously()
            .then(() => {
                // const { name, avatar } = getState().user;
                const kodePendaftaran = Math.floor(100000 + Math.random() * 900000);
                const namasiswa = values.namasiswa;
                const verifikasi = false;
                const diterima = false;
                const lunasPembayaran = false;

                firebase.database()
                        .ref(`ppdb2020/calonsiswa/${kodePendaftaran}`)
                        .set({
                            namasiswa,
                            verifikasi,
                            diterima,
                            lunasPembayaran,
                            "data": values
                        })

                // startChatting(dispatch);
                // console.log(`values sukses =>\n\n ${JSON.stringify(values, null, 2)}` )
            });
        console.log(`values luar =>\n\n ${JSON.stringify(values, null, 2)}` )
    })

const Wizard = ({}) => {   
    return (     
        <Provider store={store}>            
            <WizardForm onSubmit={registerCalonSiswa} />
        </Provider>          
    )
}

export default Wizard;