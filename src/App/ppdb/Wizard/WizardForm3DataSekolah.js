import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const whiteStyle = {
  backgroundColor: "white"
}

const statusSekolah = ["Negeri", "Swasta"]
const year = (new Date()).getFullYear();
const years = Array.from(new Array(10),( val, index) => year - index);

const renderSelectorWithArray = ({ array, label, placeholder, input, meta: { touched, error } }) => (
  <Form.Group style={{color:"black"}} >
    <Form.Label>{label}</Form.Label>
    <Form.Control size="sm" as="select" {...input} isInvalid= {touched && error} style = {whiteStyle}> 
      <option value="">{placeholder}</option>
      {array.map(val => (
            <option value={val} key={val}>
              {val}
            </option>
          ))}     
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>    
  </Form.Group >  
)

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <h4>Data Sekolah Asal</h4>
      <Field name="sekolahasal" type="text" component={renderField} label="Nama Sekolah" />
      <Field name="statussekolah" array={statusSekolah} type="text" label="Status Sekolah" placeholder="Pilih Status Sekolah.." component={renderSelectorWithArray} />
      <Field name="alamatSekolah" type="text" component={renderField} label="Alamat Sekolah" />
      <Field name="tahunlulus" array={years} type="number" placeholder="Tahun lulus.." component={renderSelectorWithArray} label="Tahun Lulus" />

      <div className="d-flex justify-content-between">
          <Button type="button" className="previous" onClick={previousPage}>
            Sebelum
          </Button>            
          <Button type="submit" disabled={pristine || submitting}>
            Lanjut
          </Button>            
        </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormThirdPage)
