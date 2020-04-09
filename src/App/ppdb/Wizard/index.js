import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import WizardForm from "./WizardForm"
import '../../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";

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

const Wizard = ({}) => {   
    return (     
        <Provider store={store}>            
            <WizardForm onSubmit={showResults} />
        </Provider>          
    )
}

export default Wizard;