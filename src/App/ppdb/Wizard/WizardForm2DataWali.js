import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'


const pendidikan = ["Tidak Sekolah","SD/MI", "SMP/MTs", "SMA/SMK/MA", "DIPLOMA", "S1", "S2", "S3" ]
const pekerjaan = ["Buruh", "Tani",  "Wiraswasta", "PNS", "TNI/Polri", "Perangkat Desa", "Nelayan", "Lain-lain" ]
const pekerjaanIbu = ["Ibu Rumah Tangga", "Buruh", "Tani",  "Wiraswasta", "PNS", "TNI/Polri", "Perangkat Desa", "Nelayan", "Lain-lain" ]
const agama = ["Islam", "Kristen", "Katolik", "Kristen Protestan", "Hindu", "Budha", "Konghucu"]
const penghasilan = ["<500rb", "500rb-1jt", "1jt-3jt", "3jt-5jt", "5jt-10jt", ">10jt"]

const whiteStyle = {
  backgroundColor: "white"
}

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false

const renderSelectorWithArray = ({ array, label, placeholder, input, meta: { touched, error } }) => (
  <Form.Group style={{color:"black"}} >
    <Form.Label>{label}</Form.Label>
    <Form.Control as="select" {...input} isInvalid= {touched && error} style = {whiteStyle}> 
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

// const number = value =>  value && isNaN(Number(value)) ? ' Harus angka' : undefined

const phoneNumber = value =>
  value && !/^08[0-9]{8,}$/i.test(value)
    ? ' Nomor hp tidak valid gunakan 081...'
    : undefined

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <h4>Data Ayah Kandung</h4>
      <Field name="namaAyah" type="text" component={renderField} label="Nama Lengkap Ayah" />
      <Field name="pendidikanAyah" type="text" array={pendidikan} label="Pendidikan Terakhir" placeholder="Pilih Pendidikan Ayah.." component={renderSelectorWithArray} />
      <Field name="pekerjaanAyah" array={pekerjaan} type="text" placeholder="Pilih Pekerjaan.." component={renderSelectorWithArray} label="Pekerjaan" />
      <Field name="agamaAyah" array={agama} type="text" placeholder="Pilih Agama.." component={renderSelectorWithArray} label="Agama" />
      <Field name="penghasilanAyah" array={penghasilan} type="text" placeholder="Pilih Penghasilan.." component={renderSelectorWithArray} label="Penghasilan per bulan" />
      <Field name="nohapeAyah" type="number" component={renderField} validate={phoneNumber} label="No. HP" />
      
      <h4>Data Ibu Kandung</h4>
      <Field name="namaIbu" type="text" component={renderField} label="Nama Lengkap Ibu" />
      <Field name="pendidikanIbu" array={pendidikan} type="text" placeholder="Pilih Pendidikan.. " component={renderSelectorWithArray} label="Pendidikan Terakhir" />
      <Field name="pekerjaanIbu" array={pekerjaanIbu} type="text" placeholder="Pilih Pekerjaan.." component={renderSelectorWithArray} label="Pekerjaan" />
      <Field name="agamaIbu" array= {agama}type="text" placeholder="Pilih Agama.." component={renderSelectorWithArray} label="Agama" />
      <Field name="penghasilanIbu" array={penghasilan} type="text" placeholder="Pilih Penghasilan.." component={renderSelectorWithArray} label="Penghasilan per bulan" />
      <Field name="nohapeIbu" type="number" component={renderField} validate={phoneNumber} label="No. HP" />

      <h4>Data Wali Calon Siswa</h4>
      <Field name="namaWali" type="text" component={renderField} label="Nama Lengkap Wali" />
      <Field name="pendidikanWali" array={pendidikan} type="text" placeholder="Pilih Pendidikan.. " component={renderSelectorWithArray} label="Pendidikan Terakhir" />
      <Field name="pekerjaanWali" array={pekerjaan} type="text" placeholder="Pilih Pekerjaan.." component={renderSelectorWithArray} label="Pekerjaan" />
      <Field name="penghasilanWali" array={penghasilan} type="text" placeholder="Pilih Penghasilan.." component={renderSelectorWithArray} label="Penghasilan per bulan" />
      <Field name="nohapeWali" type="number" component={renderField} validate={phoneNumber} label="No. HP" />      
      <div className="d-flex justify-content-between">
        <Button type="button" className="previous" onClick={previousPage}>
          Sebelum
        </Button>            
        <Button type="submit" className="next">
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
})(WizardFormSecondPage)
