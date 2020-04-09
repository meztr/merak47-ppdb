import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const pendidikan = ["SD", "SMP", "SMA/SMK", "Diploma", "S1", "S2", "S3" ]
const  renderPendidikan = ({ label, hints, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
        {pendidikan.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
        { touched && error ? <span>{error}</span> : false }
      </div>
    </div>
) 

const pekerjaan = [""]
const  renderPekerjaan = ({ label, hints, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
        {pekerjaan.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
        { touched && error ? <span>{error}</span> : false }
    </div>
  </div>
)

const agama = []
const  renderAgama = ({ label, hints, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
        {agama.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
        { touched && error ? <span>{error}</span> : false }
    </div>
  </div>
)

const penghasilan = []
const  renderPenghasilan = ({ label, hints, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
        {penghasilan.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
        { touched && error ? <span>{error}</span> : false }
    </div>
  </div>
)

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <h4>Data Ayah Kandung</h4>
      <Field name="nama" type="text" component={renderField} label="Nama Lengkap Ayah" />
      <Field name="pendidikan" type="text" component={renderPendidikan} label="Pendidikan Terakhir" />
      <Field name="pekerjaan" type="text" component={renderPekerjaan} label="Pekerjaan" />
      <Field name="agama" type="text" component={renderAgama} label="Agama" />
      <Field name="penghasilan" type="text" component={renderPenghasilan} label="Penghasilan per bulan" />
      <Field name="nohape" type="text" component={renderField} label="No. HP" />
      
      <h4>Data Ibu Kandung</h4>
      <Field name="nama" type="text" component={renderField} label="Nama Lengkap Ibu" />
      <Field name="pendidikan" type="text" component={renderPendidikan} label="Pendidikan Terakhir" />
      <Field name="pekerjaan" type="text" component={renderPekerjaan} label="Pekerjaan" />
      <Field name="agama" type="text" component={renderAgama} label="Agama" />
      <Field name="penghasilan" type="text" component={renderPenghasilan} label="Penghasilan per bulan" />
      <Field name="nohape" type="text" component={renderField} label="No. HP" />

      <h4>Data Wali Calon Siswa</h4>
      <Field name="nama" type="text" component={renderField} label="Nama Lengkap Wali" />
      <Field name="pendidikan" type="text" component={renderPendidikan} label="Pendidikan Terakhir" />
      <Field name="pekerjaan" type="text" component={renderPekerjaan} label="Pekerjaan" />
      <Field name="penghasilan" type="text" component={renderPenghasilan} label="Penghasilan per bulan" />
      <Field name="nohape" type="text" component={renderField} label="No. HP" />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage)
