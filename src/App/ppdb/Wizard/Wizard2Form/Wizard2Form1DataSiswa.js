import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import RenderFileInput from "./RenderFileInput";
// import "../../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";

const year = new Date().getFullYear();
const years = Array.from(new Array(30), (val, index) => year - index);
const bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "Nopember",
  "Desember",
];
const agama = [
  "Islam",
  "Kristen",
  "Katolik",
  "Kristen Protestan",
  "Hindu",
  "Budha",
  "Konghucu",
];
const kewarganegaraan = ["Indonesia", "Asing"];
const tinggalbersama = [
  "Bersama orang tua",
  "Bersama wali",
  "Asrama",
  "Panti asuhan",
  "Kos",
];
const statuskeluarga = ["Anak Kandung", "Anak Tiri", "Anak Angkat"];
const pilihanjur = [
  "TKJ (Teknik Komputer Jaringan)",
  "OTKP (Otomatisasi Tata Kelola Perkantoran)",
  "PBKS (Perbankan Syariah)",
];
// const pilihJalurPendaftaran = ['Reguler/Umum', 'Prestasi', 'Sekolah Muhammadiyah'];
const pilihJenisPendaftaran = ["Peserta Didik Baru", "Pindahan"];

const whiteStyle = {
  backgroundColor: "white",
};

// style={{ border: touched && error ? "1px solid red" : "none" }}
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span style={{ border: touched && error ? "1px solid red" : "none" }}>
      {error}
    </span>
  ) : (
    false
  );

const itemKebutuhanKhusus = [
  "Tidak",
  "Tuna Netra",
  "Tuna Rungu",
  "Grahita Ringan",
  "Grahita Sedang",
  "Daksa Ringan",
  "Daksa Sedang",
  "Tuna Laras",
  "Tuna Wicara",
  "Tuna Ganda",
  "Hiperaktif",
  "Cerdas Istimewa",
  "Bakat Istimewa",
  "Kesulitan Belajar",
  "Indigo",
  "Down Sindrome",
  "Autis",
];

const renderCheckboxWithArray = ({
  array,
  label,
  // input,
  meta: { touched, error },
}) => (
  <Form.Group>
    <Form.Label>
      <strong>{label}</strong>
    </Form.Label>
    <Row>
      {array.map((item) => (
        <div key={`default-${item}`} className="col-8 col-md-6 col-lg-4">
          <Form.Check
            // {...input}
            type="checkbox"
            label={item}
            id={item}
            isInvalid={touched && error}
          />
        </div>
      ))}
    </Row>
  </Form.Group>
);

const renderSelectorWithArray = ({
  array,
  label,
  placeholder,
  input,
  meta: { touched, error },
}) => (
  <Form.Group>
    <Form.Label>
      <strong>{label}</strong>
    </Form.Label>
    <Form.Control
      as="select"
      {...input}
      isInvalid={touched && error}
      style={whiteStyle}
    >
      <option value="">{placeholder}</option>
      {array.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
);

const renderSelectorWithInteger = ({
  maxInt,
  label,
  placeholder,
  input,
  meta: { touched, error },
}) => (
  <Form.Group style={{ color: "black" }}>
    <Form.Label>
      <strong>{label}</strong>
    </Form.Label>
    <Form.Control
      as="select"
      {...input}
      isInvalid={touched && error}
      style={whiteStyle}
    >
      <option value="">{placeholder}</option>
      {[...Array(maxInt).keys()].map((val) => (
        <option value={++val} key={val}>
          {val}
        </option>
      ))}
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
);

const renderSelectorWithIntegerBeginNull = ({
  maxInt,
  label,
  placeholder,
  input,
  meta: { touched, error },
}) => (
  <Form.Group style={{ color: "black" }}>
    <Form.Label>
      <strong>{label}</strong>
    </Form.Label>
    <Form.Control
      as="select"
      {...input}
      isInvalid={touched && error}
      style={whiteStyle}
    >
      <option value="">{placeholder}</option>
      {[...Array(maxInt).keys()].map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
);

const number = (value) =>
  value && isNaN(Number(value)) ? " Harus angka" : undefined;

const phoneNumber = (value) =>
  value && !/^08[0-9]{8,}$/i.test(value) ? " Nomor hp tidak valid" : undefined;

const kabupatensekolah = ["Kotim", "Kobar", "Palangkaraya", "Lainnya"];

const WizardFormFirstPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <Aux>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <fieldset className="mb-4">
                <legend
                  className="bg-secondary text-white pl-4 pr-4 mb-4"
                  style={{ borderRadius: "20px", fontSize: "20px" }}
                >
                  <i className="fa fa-user mr-3"></i>Data Pendaftaran
                </legend>
                <div className="mx-3">
                  <Field
                    name="pilihan1"
                    array={pilihanjur}
                    label="Pilihan Jurusan Pertama"
                    placeholder="Pilihan Jurusan Pertama.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="pilihan2"
                    array={pilihanjur}
                    label="Pilihan Jurusan Kedua"
                    placeholder="Pilihan Jurusan Kedua.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="jenisPendaftaran"
                    array={pilihJenisPendaftaran}
                    label="Jenis Pendaftaran"
                    placeholder="Pilih Jenis Pendaftaran.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="sekolahasal"
                    type="text"
                    component={renderField}
                    label="Nama Sekolah Asal"
                  />
                  <Field
                    name="kabupatensekolah"
                    array={kabupatensekolah}
                    type="text"
                    label="Kabupaten/Kota Sekolah"
                    placeholder="Pilih Kab/Kota Sekolah.."
                    component={renderSelectorWithArray}
                  />
                </div>
              </fieldset>
              <fieldset className="mb-4">
                <legend
                  className="bg-secondary text-white pl-4 pr-4 mb-4"
                  style={{ borderRadius: "20px", fontSize: "20px" }}
                >
                  <i className="fa fa-user mr-3"></i>Data Siswa
                </legend>
                <div className="mx-3">
                  <Field
                    name="namasiswa"
                    type="text"
                    component={renderField}
                    label="Nama Lengkap"
                  />
                  <Form.Group style={{ color: "black" }}>
                    <Form.Label>
                      <strong>Jenis Kelamin</strong>
                    </Form.Label>
                    <Form.Check>
                      <Field
                        name="jeniskelamin"
                        component="input"
                        type="radio"
                        value="Laki-laki"
                      />{" "}
                      Laki-laki
                    </Form.Check>
                    <Form.Check>
                      <Field
                        name="jeniskelamin"
                        component="input"
                        type="radio"
                        value="Perempuan"
                      />{" "}
                      Perempuan
                    </Form.Check>
                    <Field name="jeniskelamin" component={renderError} />
                  </Form.Group>
                  <Field
                    name="nisn"
                    type="number"
                    component={renderField}
                    validate={number}
                    label="NISN"
                  />
                  <Field
                    name="nik"
                    type="number"
                    component={renderField}
                    validate={number}
                    label="NIK (Nomor Induk Kependudukan)"
                  />
                  <Field
                    name="nokk"
                    type="number"
                    component={renderField}
                    validate={number}
                    label="No. Kartu Keluarga"
                  />
                  {/* Halt upload file KK ----------------------------------------------- */}
                  {/* <Field
                    name="scankk"
                    type="file"
                    label="Scan Kartu Keluarga"
                    // value={value|| ''}
                    component={RenderFileInput}
                  /> 
                  ----------------------------------------------- */}

                  {/* <Field type="file" name="scankk" label="Scan Kartu Keluarga" component={FileInput} /> */}
                  {/* <RenderFileInput /> */}

                  <Field
                    name="tempatlahirsiswa"
                    type="text"
                    component={renderField}
                    label="Tempat Lahir"
                  />
                  <Field
                    name="tgllahirsiswa"
                    type="number"
                    maxInt={31}
                    label="Tanggal Lahir"
                    placeholder="Pilih tanggal.."
                    component={renderSelectorWithInteger}
                  />
                  <Field
                    name="blnlahirsiswa"
                    array={bulan}
                    label="Bulan Lahir"
                    placeholder="Pilih bulan.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="tahunlahirsiswa"
                    array={years}
                    label="Tahun Lahir"
                    placeholder="Pilih tahun.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="noaktalahir"
                    type="text"
                    component={renderField}
                    label="No.Reg Akta Lahir"
                  />
                  <Field
                    name="agamaSiswa"
                    array={agama}
                    label="Agama"
                    placeholder="Pilih agama.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="kewarganegaraan"
                    array={kewarganegaraan}
                    label="Kewarganegaraan"
                    placeholder="Warganegara.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="tinggibadan"
                    type="number"
                    component={renderField}
                    validate={number}
                    label="Tinggi Badan (cm)"
                  />
                  <Field
                    name="beratbadan"
                    type="number"
                    component={renderField}
                    validate={number}
                    label="Berat Badan (kg)"
                  />
                  <Field
                    name="lingkarkepala"
                    type="number"
                    component={renderField}
                    validate={number}
                    label="Lingkar Kepala (cm)"
                  />
                  <Field
                    name="hobi"
                    type="text"
                    component={renderField}
                    label="Hobi"
                  />
                  <Field
                    name="citacita"
                    type="text"
                    component={renderField}
                    label="Cita-cita"
                  />
                  <Field
                    name="kebutuhankhusus"
                    array={itemKebutuhanKhusus}
                    placeholder="Berkebutuhan khusus.."
                    // component={renderCheckboxWithArray}
                    component={renderSelectorWithArray}
                    label="Berkebutuhan khusus"
                  />
                  <Field
                    name="alamatsiswa"
                    type="text"
                    component={renderField}
                    label="Alamat Siswa"
                  />
                  <Field
                    name="tinggalbersama"
                    array={tinggalbersama}
                    placeholder="Tinggal bersama.."
                    component={renderSelectorWithArray}
                    label="Tinggal Bersama"
                  />
                  <Field
                    name="modatransportasi"
                    array={[
                      "Jalan Kaki",
                      "Kendaraan Pribadi",
                      "Kendaraan Umum",
                      "Jemputan Sekolah",
                      "Kereta Api",
                      "Andong/Delman/Becak, dll",
                      "Perahu Penyebrangan/Rakit",
                      "Lainnya",
                    ]}
                    type="text"
                    placeholder="Pilih moda transportasi.."
                    component={renderSelectorWithArray}
                    label="Moda Transportasi"
                  />
                  <Field
                    name="jaraktempattinggal"
                    array={["< 1 km", "< 3 km", "< 5 km", "< 10 km", "> 10 km"]}
                    type="text"
                    placeholder="Pilih jarak kilometer.."
                    component={renderSelectorWithArray}
                    label="Jarak Tempat Tinggal ke sekolah (km)"
                  />
                  <Field
                    name="jarakdalamkilometer"
                    type="number"
                    component={renderField}
                    validate={number}
                    label="Sebutkan jarak dalam (km)"
                  />
                  <Field
                    name="waktutempuh"
                    type="time"
                    component={renderField}
                    label="Waktu Tempuh (jam:menit)"
                  />
                  <Field
                    name="statusdlmkeluarga"
                    array={statuskeluarga}
                    placeholder="Status anak.."
                    label="Status dlm Keluarga"
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="jmlsaudara"
                    type="number"
                    maxInt={16}
                    label="Jumlah Saudara"
                    placeholder="Jumlah saudara.."
                    component={renderSelectorWithIntegerBeginNull}
                  />
                  <Field
                    name="anakkebrp"
                    type="number"
                    maxInt={15}
                    label="Anak ke"
                    placeholder="Anak ke.."
                    component={renderSelectorWithInteger}
                  />
                  <Field
                    name="alamatemail"
                    type="email"
                    component={renderField}
                    label="Alamat Email"
                  />
                  <Field
                    name="nohapesiswa"
                    type="number"
                    component={renderField}
                    validate={phoneNumber}
                    label="No. Telp/HP Calon Siswa"
                  />
                </div>
              </fieldset>

              <div className="d-flex justify-content-between">
                <Button
                  type="button"
                  className="previous"
                  onClick={previousPage}
                >
                  Sebelum
                </Button>
                <Button type="submit" className="next">
                  Lanjut
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  // validate,
})(WizardFormFirstPage);
