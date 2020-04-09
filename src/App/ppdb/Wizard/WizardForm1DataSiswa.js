import React from 'react'
import { Form } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const year = (new Date()).getFullYear();
const years = Array.from(new Array(30),( val, index) => year - index);
const renderTahunSelector = ({ label, placeholder, input, meta: { touched, error } }) => (
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

const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"]
const renderBulanSelector = ({ label, placeholder, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {bulan.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderTanggalSelector = ({ label, placeholder, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {[...Array(31).keys()].map(val => (
          <option value={++val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const agama = ["Islam", "Kristen", "Katolik", "Kristen Protestan", "Hindu", "Budha", "Konghucu"]
const renderAgamaSelector = ({ label, placeholder, input, meta: { touched, error } }) => (
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
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderKewarganegaraanSelector = ({ label, placeholder, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {["Indonesia", "Asing"].map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const tinggalBersama = ["Bersama orang tua", "Bersama wali", "Asrama", "Panti asuhan", "Kos"]
const renderTinggalBersamaSelector = ({ label, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">Tinggal bersama..</option>
        {tinggalBersama.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderAnakKeBrp = ({ label, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">Anak ke..</option>
        {[...Array(15).keys()].map(val => (
          <option value={++val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderJmlSaudara = ({ label, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">Jumlah saudara..</option>
        {[...Array(15).keys()].map(val => (
          <option value={++val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderStatusDlmKeluarga = ({ label, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">Status anak..</option>
        <option value="Anak Kandung">Anak Kandung</option>
        <option value="Anak Tiri">Anak Tiri</option>
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const pilihanjur = ["OTKP", "TKJ", "PBKS"]
const renderPilihanJurusan = ({ label, placeholder, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {pilihanjur.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
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
        <div>
          <label>Jenis Kelamin</label>
          <div>
            <Field name="jeniskelamin" component="input" type="radio" value="laki-laki" />{' '} Laki-laki
            <Field name="jeniskelamin" component="input" type="radio" value="perempuan" />{' '} Perempuan
            <Field name="jeniskelamin" component={renderError} />
          </div>
        </div>
        <Field name="tempatlahirsiswa" type="text" component={renderField} label="Tempat Lahir" />
        <Field name="tgllahirsiswa" label="Tanggal Lahir" placeholder="Pilih tanggal.." component={renderTanggalSelector} />
        <Field name="blnlahirsiswa" label="Bulan Lahir" placeholder="Pilih bulan.." component={renderBulanSelector} />
        <Field name="tahunlahirsiswa" abel="Tahun Lahir" placeholder="Pilih tahun.." component={renderTahunSelector} />
        <Field name="agama" label="Agama" placeholder="Agama.." component={renderAgamaSelector} />
        <Field name="kewarganegaraan" label="Kewarganegaraan" placeholder="Warganegara.." component={renderKewarganegaraanSelector} />
        <Field name="alamatsiswa" type="text" component={renderField} label="Alamat Siswa" />
        <Field name="tinggalbersama" component={renderTinggalBersamaSelector} label="Tinggal Bersama" />
        <Field name="anakkebrp" type="number" label="Anak ke" placeholder="Anak ke.." component={renderAnakKeBrp} />
        <Field name="jmlsaudara" type="number" label="Jumlah Saudara" placeholder="Jumlah saudara.." component={renderJmlSaudara} />
        <Field name="statusdlmkeluarga" label="Status dlm Keluarga" component={renderStatusDlmKeluarga} />        
        <Field name="nohapesiswa" type="number" component={renderField} validate={phoneNumber} label="No. HP" />
        <Field name="pilihan1" label="Pilihan Jurusan Pertama" placeholder="Pilihan pertama.." component={renderPilihanJurusan} />
        <Field name="pilihan2" label="Pilihan Jurusan Kedua" placeholder="Pilihan kedua.." component={renderPilihanJurusan} />

        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)
