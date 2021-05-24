import React, { useState } from "react"; // useState
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
// import "../../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";

const pendidikan = [
  "Tidak Sekolah",
  "SD/MI",
  "SMP/MTs",
  "SMA/SMK/MA",
  "DIPLOMA",
  "S1",
  "S2",
  "S3",
];
const pekerjaan = [
  "Buruh",
  "Tani",
  "Wiraswasta",
  "PNS",
  "TNI/Polri",
  "Perangkat Desa",
  "Nelayan",
  "Lain-lain",
];
const pekerjaanIbu = [
  "Ibu Rumah Tangga",
  "Buruh",
  "Tani",
  "Wiraswasta",
  "PNS",
  "TNI/Polri",
  "Perangkat Desa",
  "Nelayan",
  "Lain-lain",
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
const penghasilan = [
  "<500rb",
  "500rb-1jt",
  "1jt-3jt",
  "3jt-5jt",
  "5jt-10jt",
  ">10jt",
];

const whiteStyle = {
  backgroundColor: "white",
};

// const disabledStyle = {
//   backgroundColor: "gray",
// };

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false

const renderSelectorWithArray = ({
  array,
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
      {array.map((val) => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </Form.Control>
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
);

// const number = value =>  value && isNaN(Number(value)) ? ' Harus angka' : undefined

const phoneNumber = (value) =>
  value && !/^08[0-9]{8,}$/i.test(value)
    ? " Nomor hp tidak valid gunakan 081..."
    : undefined;

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  // const [waliAyah, setWaliAyah] = useState(false);
  const [opsiWali, setOpsiWali] = useState("waliBaru");
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
                  <i className="fa fa-user mr-3"></i>Data Ibu Kandung
                </legend>
                <div className="mx-3">
                  <Field
                    name="namaIbu"
                    type="text"
                    component={renderField}
                    label="Nama Lengkap Ibu"
                  />
                  <Field
                    name="pendidikanIbu"
                    array={pendidikan}
                    type="text"
                    placeholder="Pilih Pendidikan.. "
                    component={renderSelectorWithArray}
                    label="Pendidikan Terakhir"
                  />
                  <Field
                    name="pekerjaanIbu"
                    array={pekerjaanIbu}
                    type="text"
                    placeholder="Pilih Pekerjaan.."
                    component={renderSelectorWithArray}
                    label="Pekerjaan"
                  />
                  <Field
                    name="agamaIbu"
                    array={agama}
                    type="text"
                    placeholder="Pilih Agama.."
                    component={renderSelectorWithArray}
                    label="Agama"
                  />
                  <Field
                    name="penghasilanIbu"
                    array={penghasilan}
                    type="text"
                    placeholder="Pilih Penghasilan.."
                    component={renderSelectorWithArray}
                    label="Penghasilan per bulan"
                  />
                  <Field
                    name="nohapeIbu"
                    type="number"
                    component={renderField}
                    validate={phoneNumber}
                    label="No. HP"
                  />
                </div>
              </fieldset>

              <fieldset className="mb-4">
                <legend
                  className="bg-secondary text-white pl-4 pr-4 mb-4"
                  style={{ borderRadius: "20px", fontSize: "20px" }}
                >
                  <i className="fa fa-user mr-3"></i>Data Ayah Kandung
                </legend>
                <div className="mx-3">
                  <Field
                    name="namaAyah"
                    type="text"
                    component={renderField}
                    label="Nama Lengkap Ayah"
                  />
                  <Field
                    name="pendidikanAyah"
                    type="text"
                    array={pendidikan}
                    label="Pendidikan Terakhir"
                    placeholder="Pilih Pendidikan Ayah.."
                    component={renderSelectorWithArray}
                  />
                  <Field
                    name="pekerjaanAyah"
                    array={pekerjaan}
                    type="text"
                    placeholder="Pilih Pekerjaan.."
                    component={renderSelectorWithArray}
                    label="Pekerjaan"
                  />
                  <Field
                    name="agamaAyah"
                    array={agama}
                    type="text"
                    placeholder="Pilih Agama.."
                    component={renderSelectorWithArray}
                    label="Agama"
                  />
                  <Field
                    name="penghasilanAyah"
                    array={penghasilan}
                    type="text"
                    placeholder="Pilih Penghasilan.."
                    component={renderSelectorWithArray}
                    label="Penghasilan per bulan"
                  />
                  <Field
                    name="nohapeAyah"
                    type="number"
                    component={renderField}
                    validate={phoneNumber}
                    label="No. HP"
                  />
                </div>
              </fieldset>

              <fieldset className="mb-4">
                <legend
                  className="bg-secondary text-white pl-4 pr-4 mb-4"
                  style={{ borderRadius: "20px", fontSize: "20px" }}
                >
                  <i className="fa fa-user mr-3"></i>Data Wali Calon Siswa
                </legend>
                {/* // TODO: onHalt  */}
                {/* <div key={`opsi-radio-wali`} className="mb-3">
                  <Form.Check
                    name="radioWali"
                    type="radio"
                    id="radioWaliBaru"
                    label="Orang Lain sebagai Wali"
                    value="radioWaliBaru"
                    onChange={(e) => setOpsiWali(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    name="radioWali"
                    type="radio"
                    id="radioWaliIbu"
                    label="Ibu sebagai Wali"
                    value="radioWaliIbu"
                    onChange={(e) => setOpsiWali(e.target.value)}
                  />
                  <Form.Check
                    name="radioWali"
                    type="radio"
                    id="radioWaliAyah"
                    label="Ayah sebagai Wali"
                    value="radioWaliAyah"
                    onChange={(e) => setOpsiWali(e.target.value)}
                  />
                </div> */}
                <div className="mx-3">
                  <Field
                    name="namaWali"
                    type="text"
                    component={renderField}
                    label="Nama Lengkap Wali"
                    value={opsiWali}
                  />
                  <Field
                    name="pendidikanWali"
                    array={pendidikan}
                    type="text"
                    placeholder="Pilih Pendidikan.. "
                    component={renderSelectorWithArray}
                    label="Pendidikan Terakhir"
                  />
                  <Field
                    name="pekerjaanWali"
                    array={pekerjaan}
                    type="text"
                    placeholder="Pilih Pekerjaan.."
                    component={renderSelectorWithArray}
                    label="Pekerjaan"
                  />
                  <Field
                    name="penghasilanWali"
                    array={penghasilan}
                    type="text"
                    placeholder="Pilih Penghasilan.."
                    component={renderSelectorWithArray}
                    label="Penghasilan per bulan"
                  />
                  <Field
                    name="nohapeWali"
                    type="number"
                    component={renderField}
                    validate={phoneNumber}
                    label="No. HP"
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
})(WizardFormSecondPage);
