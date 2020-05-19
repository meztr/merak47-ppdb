import React from 'react'
import { Form, Button,} from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const year = (new Date()).getFullYear();
const years = Array.from(new Array(30),( val, index) => year - index);
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"]
const agama = ["Islam", "Kristen", "Katolik", "Kristen Protestan", "Hindu", "Budha", "Konghucu"]
const kewarganegaraan = ["Indonesia", "Asing"]
const tinggalbersama = ["Bersama orang tua", "Bersama wali", "Asrama", "Panti asuhan", "Kos"]
const statuskeluarga = ["Anak Kandung", "Anak Tiri", "Anak Angkat"]
const pilihanjur = ["OTKP", "TKJ", "PBKS"]

const whiteStyle = {
  backgroundColor: "white"
}

// style={{ border: touched && error ? "1px solid red" : "none" }}
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span style={{ border: touched && error ? "1px solid red" : "none" }}>{error}</span> : false

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

const renderSelectorWithInteger = ({ maxInt, label, placeholder, input, meta: { touched, error } }) => (
  <Form.Group style={{color:"black"}} >
    <Form.Label>{label}</Form.Label>
    <Form.Control as="select" {...input} isInvalid= {touched && error} style = {whiteStyle}> 
      <option value="">{placeholder}</option>
      {[...Array(maxInt).keys()].map(val => (
        <option value={val++} key={val}>
          {val}
        </option>
      ))}   
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>    
  </Form.Group >
)

const renderSelectorWithIntegerBeginNull = ({ maxInt, label, placeholder, input, meta: { touched, error } }) => (
  <Form.Group style={{color:"black"}} >
    <Form.Label>{label}</Form.Label>
    <Form.Control as="select" {...input} isInvalid= {touched && error} style = {whiteStyle}> 
      <option value="">{placeholder}</option>
      {[...Array(maxInt).keys()].map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}   
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>    
  </Form.Group >
)

const number = value =>  value && isNaN(Number(value)) ? ' Harus angka' : undefined

const phoneNumber = value =>
  value && !/^08[0-9]{8,}$/i.test(value)
    ? ' Nomor hp tidak valid'
    : undefined

const WizardFormFirstPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div>
      <h4>Data Siswa</h4>
      <form onSubmit={handleSubmit}>
        <Field name="namasiswa" type="text" component={renderField} label="Nama Lengkap" />
        <Field name="nisn" type="number" component={renderField} validate={number} label="NISN" />
        <Field name="nik" type="number" component={renderField} validate={number} label="NIK" />
        
        <Form.Group style={{color:"black"}}>
          <Form.Label>Jenis Kelamin</Form.Label>
          <Form.Check>
            <Field name="jeniskelamin" component="input" type="radio" value="Laki-laki" />{' '} Laki-laki
          </Form.Check>
          <Form.Check>
            <Field name="jeniskelamin" component="input" type="radio" value="Perempuan" />{' '} Perempuan
          </Form.Check>
          <Field name="jeniskelamin" component={renderError} />
        </Form.Group>        

        <Field name="tempatlahirsiswa" type="text" component={renderField} label="Tempat Lahir" />
        <Field name="tgllahirsiswa" type="number" maxInt={31} label="Tanggal Lahir" placeholder="Pilih tanggal.." component={renderSelectorWithInteger} />
        <Field name="blnlahirsiswa" array={bulan} label="Bulan Lahir" placeholder="Pilih bulan.." component={renderSelectorWithArray} />
        <Field name="tahunlahirsiswa" array={years} label="Tahun Lahir" placeholder="Pilih tahun.." component={renderSelectorWithArray} />
        <Field name="agamaSiswa" array={agama} label="Agama" placeholder="Pilih agama.." component={renderSelectorWithArray} />
        <Field name="kewarganegaraan" array={kewarganegaraan} label="Kewarganegaraan" placeholder="Warganegara.." component={renderSelectorWithArray} />
        <Field name="alamatsiswa" type="text" component={renderField} label="Alamat Siswa" />
        <Field name="tinggalbersama" array={tinggalbersama} placeholder="Tinggal bersama.." component={renderSelectorWithArray} label="Tinggal Bersama" />
        <Field name="anakkebrp" type="number" maxInt={15} label="Anak ke" placeholder="Anak ke.." component={renderSelectorWithInteger} />
        <Field name="jmlsaudara" type="number" maxInt={16} label="Jumlah Saudara" placeholder="Jumlah saudara.." component={renderSelectorWithIntegerBeginNull} />
        <Field name="statusdlmkeluarga" array={statuskeluarga} placeholder="Status anak.." label="Status dlm Keluarga" component={renderSelectorWithArray} />        
        <Field name="nohapesiswa" type="number" component={renderField} validate={phoneNumber} label="No. HP" />
        <Field name="pilihan1" array={pilihanjur} label="Pilihan Jurusan Pertama" placeholder="Pilihan pertama.." component={renderSelectorWithArray} />
        <Field name="pilihan2" array={pilihanjur} label="Pilihan Jurusan Kedua" placeholder="Pilihan kedua.." component={renderSelectorWithArray} />
        <div className="d-flex justify-content-between">
          <Button type="button" className="previous" onClick={previousPage}>
            Sebelum
          </Button>            
          <Button type="submit" className="next">
            Lanjut
          </Button>            
        </div>
      </form>
    </div>
    
  )
}

export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, 
  validate
})(WizardFormFirstPage)
