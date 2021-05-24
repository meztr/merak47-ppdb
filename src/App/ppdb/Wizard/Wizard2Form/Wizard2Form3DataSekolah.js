import React from "react";
import { Form, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const whiteStyle = {
  backgroundColor: "white",
};

// const statusSekolah = ["Negeri", "Swasta"];
const year = new Date().getFullYear();
const years = Array.from(new Array(10), (val, index) => year - index);
const lama = ["2 tahun", "3 tahun", "4 tahun", "5 tahun", "6 tahun"];

const renderSelectorWithArray = ({
  array,
  label,
  placeholder,
  input,
  meta: { touched, error },
}) => (
  <Form.Group style={{ color: "black" }}>
    <Form.Label><strong>{label}</strong></Form.Label>
    <Form.Control
      size="sm"
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

const WizardFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="mb-4">
        <legend
          className="bg-secondary text-white pl-4 pr-4 mb-4"
          style={{ borderRadius: "20px", fontSize: "20px" }}
        >
          <i className="fa fa-user mr-3"></i>Data Sekolah Asal
        </legend>
        <div className="mx-3">
          <Field
            name="sekolahasal"
            type="text"
            component={renderField}
            label="Nama Sekolah"
          />
          <Field
            name="nopesertaujiansmp"
            type="number"
            component={renderField}
            label="Nomor Peserta Ujian SMP"
          />
          <Field
            name="tanggalnomorstk"
            type="text"
            component={renderField}
            label="Tanggal / No.STK"
          />
          <Field
            name="alamatSekolah"
            type="text"
            component={renderField}
            label="Alamat Sekolah"
          />
          <Field
            name="tahunlulus"
            array={years}
            type="number"
            placeholder="Tahun Lulus.."
            component={renderSelectorWithArray}
            label="Tahun Lulus"
          />
          <Field
            name="lamabelajarsmp"
            array={lama}
            type="number"
            placeholder="Lama Belajar.."
            component={renderSelectorWithArray}
            label="Lama Belajar di SMP (tahun)"
          />
        </div>
      </fieldset>

      <div className="d-flex justify-content-between">
        <Button type="button" className="previous" onClick={previousPage}>
          Sebelum
        </Button>
        <Button type="submit" disabled={pristine || submitting}>
          Lanjut
        </Button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  // validate,
})(WizardFormThirdPage);
