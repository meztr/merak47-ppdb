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
const renderTahunSelector = ({ label, hints, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
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
const renderBulanSelector = ({ label, hints, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
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

const renderTanggalSelector = ({ label, hints, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
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
const renderAgamaSelector = ({ label, hints, input, meta: { touched, error } }) => (
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
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderKewarganegaraanSelector = ({ label, hints, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
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
const renderPilihanJurusan = ({ label, hints, input, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{hints}</option>
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


const WizardFormFirstPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <div>
      <h4>Data Siswa</h4>
      <form onSubmit={handleSubmit}>
        <Field
          name="namasiswa"
          type="text"
          component={renderField}
          label="Nama Lengkap"
        />
        <Field
          name="nisn"
          type="text"
          component={renderField}
          label="NISN"
        />
        <Field
          name="nik"
          type="text"
          component={renderField}
          label="NIK"
        />
        <div>
          <label>Jenis Kelamin</label>
          <div>
            <Field name="jeniskelamin" component="input" type="radio" value="laki-laki" />{' '} Laki-laki
            <Field name="jeniskelamin" component="input" type="radio" value="perempuan" />{' '} Perempuan
            <Field name="jeniskelamin" component={renderError} />
          </div>          
          
        </div>
        <Field
          name="tempatlahir"
          type="text"
          component={renderField}
          label="Tempat Lahir"
        />
        <Field name="tgllahir" label="Tanggal Lahir" hints="Pilih tanggal.." component={renderTanggalSelector} />
        <Field name="blnlahir" label="Bulan Lahir" hints="Pilih bulan.." component={renderBulanSelector} />
        <Field name="tahunlahir" label="Tahun Lahir" hints="Pilih tahun.." component={renderTahunSelector} />
        <Field name="agama" label="Agama" hints="Agama.." component={renderAgamaSelector} />
        <Field name="kewarganegaraan" label="Kewarganegaraan" hints="Warganegara.." component={renderKewarganegaraanSelector} />
        <Field name="alamatsiswa" type="text" component={renderField} label="Alamat Siswa" />
        <Field name="tinggalbersama" component={renderTinggalBersamaSelector} label="Tinggal Bersama" />
        <Field name="anakkebrp" label="Anak ke" hints="Anak ke.." component={renderAnakKeBrp} />
        <Field name="jmlsaudara" label="Jumlah Saudara" hints="Jumlah saudara.." component={renderJmlSaudara} />
        <Field name="statusdlmkeluarga" label="Status dlm Keluarga" component={renderStatusDlmKeluarga} />        
        <Field name="nohape" type="text" component={renderField} label="No. HP" />
        <Field name="pilihan1" label="Pilihan Jurusan Pertama" hints="Pilihan pertama.." component={renderPilihanJurusan} />
        <Field name="pilihan2" label="Pilihan Jurusan Kedua" hints="Pilihan kedua.." component={renderPilihanJurusan} />

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
