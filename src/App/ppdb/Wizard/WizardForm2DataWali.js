import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const pendidikan = ["Tidak Sekolah","SD/MI", "SMP/MTs", "SMA/SMK/MA", "DIPLOMA", "S1", "S2", "S3" ]
const  renderPendidikan = ({ label, placeholder, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
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

const pekerjaan = ["Buruh", "Tani",  "Wiraswasta", "PNS", "TNI/Polri", "Perangkat Desa", "Nelayan", "Lain-lain" ]
const  renderPekerjaan = ({ label, placeholder, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
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

const pekerjaanIbu = ["Ibu Rumah Tangga", "Buruh", "Tani",  "Wiraswasta", "PNS", "TNI/Polri", "Perangkat Desa", "Nelayan", "Lain-lain" ]
const  renderPekerjaanIbu = ({ label, placeholder, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {pekerjaanIbu.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
        { touched && error ? <span>{error}</span> : false }
    </div>
  </div>
)

const agama = ["Islam", "Kristen", "Katolik", "Kristen Protestan", "Hindu", "Budha", "Konghucu"]
const  renderAgama = ({ label, placeholder, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
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

const penghasilan = ["<500rb", "500rb-1jt", "1jt-3jt", "3jt-5jt", "5jt-10jt", ">10jt"]
const  renderPenghasilan = ({ label, placeholder, input, meta: { touched, error } }) => ( 
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
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

const number = value =>  value && isNaN(Number(value)) ? ' Harus angka' : undefined

const phoneNumber = value =>
  value && !/^08[0-9]{8,}$/i.test(value)
    ? ' Nomor hp tidak valid'
    : undefined

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <h4>Data Ayah Kandung</h4>
      <Field name="namaAyah" type="text" component={renderField} label="Nama Lengkap Ayah" />
      <Field name="pendidikanAyah" type="text" label="Pendidikan" placeholder="Pilih Pendidikan Ayah.." component={renderPendidikan} label="Pendidikan Terakhir" />
      <Field name="pekerjaanAyah" type="text" placeholder="Pilih Pekerjaan.." component={renderPekerjaan} label="Pekerjaan" />
      <Field name="agamaAyah" type="text" placeholder="Pilih Agama.." component={renderAgama} label="Agama" />
      <Field name="penghasilanAyah" type="text" placeholder="Pilih Penghasilan.." component={renderPenghasilan} label="Penghasilan per bulan" />
      <Field name="nohapeAyah" type="number" component={renderField} validate={phoneNumber} label="No. HP" />
      
      <h4>Data Ibu Kandung</h4>
      <Field name="namaIbu" type="text" component={renderField} label="Nama Lengkap Ibu" />
      <Field name="pendidikanIbu" type="text" placeholder="Pilih Pendidikan.. " component={renderPendidikan} label="Pendidikan Terakhir" />
      <Field name="pekerjaanIbu" type="text" placeholder="Pilih Pekerjaan.." component={renderPekerjaan} label="Pekerjaan" />
      <Field name="agamaIbu" type="text" placeholder="Pilih Agama.." component={renderAgama} label="Agama" />
      <Field name="penghasilanIbu" type="text" placeholder="Pilih Penghasilan.." component={renderPenghasilan} label="Penghasilan per bulan" />
      <Field name="nohapeIbu" type="number" component={renderField} validate={phoneNumber} label="No. HP" />

      <h4>Data Wali Calon Siswa</h4>
      <Field name="namaWali" type="text" component={renderField} label="Nama Lengkap Wali" />
      <Field name="pendidikanWali" type="text" placeholder="Pilih Pendidikan.. " component={renderPendidikan} label="Pendidikan Terakhir" />
      <Field name="pekerjaanWali" type="text" placeholder="Pilih Pekerjaan.." component={renderPekerjaan} label="Pekerjaan" />
      <Field name="penghasilanWali" type="text" placeholder="Pilih Penghasilan.." component={renderPenghasilan} label="Penghasilan per bulan" />
      <Field name="nohapeWali" type="number" component={renderField} validate={phoneNumber} label="No. HP" />
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
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardFormSecondPage)
