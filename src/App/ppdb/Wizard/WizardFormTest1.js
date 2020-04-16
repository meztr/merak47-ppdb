import React from 'react'
import { Form } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const number = value =>  value && isNaN(Number(value)) ? ' Harus angka' : undefined

const WizardFormTest1 = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <div>
      <h4>Data Siswa Test</h4>
      <form onSubmit={handleSubmit}>
        <Field name="namasiswa" type="text" component={renderField} label="Nama Lengkap" />
        <Field name="nisn" type="number" component={renderField} validate={number} label="NISN" />
        <Field name="nik" type="number" component={renderField} validate={number} label="NIK" /> 
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>        </div>
        
      </form>
    </div>
    
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormTest1)
