import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const statusSekolah = ["Negeri", "Swasta"]
const  renderStatusSekolah = ({ label, placeholder, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {statusSekolah.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
        { touched && error ? <span>{error}</span> : false }
    </div>
  </div>
)

const year = (new Date()).getFullYear();
const years = Array.from(new Array(10),( val, index) => year - index);
const renderTahunLulus = ({ label, placeholder, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {years.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <h4>Data Sekolah Asal</h4>
      <Field name="namaSekolah" type="text" component={renderField} label="Nama Sekolah" />
      <Field name="statusSekolah" type="text" label="Status Sekolah" placeholder="Pilih Status Sekolah.." component={renderStatusSekolah} label="Pendidikan Terakhir" />
      <Field name="alamatSekolah" type="text" component={renderField} label="Alamat Sekolah" />
      <Field name="tahunLulus" type="number" type="text" component={renderTahunLulus} label="Tahun Lulus" />
            
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
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
