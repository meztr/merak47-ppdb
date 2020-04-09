import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import validate from './validate'
import renderField from './renderField'

import '../../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Loader from "../../layout/Loader"

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false
const renderCheckbox = ({ input, label, meta: { touched, error } }) => (
    <div style={{ border: touched && error ? "1px solid red" : "none" }}>
      <input type="checkbox" {...input} />
      <label style={{paddingLeft:"5px"}}>{label}</label>
      {touched && error ? <span>{error}</span> : false}
    </div>
)
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardForm0Ketentuan = props => {
  const { handleSubmit } = props
  return (
    <Aux>
        <Container>
            <Row>
                <Col>
                    <hr/>
                    <h5>Ketentuan</h5>
                    <Col md="auto">
                    <ListGroup variant="flush">
                        <ListGroupItem action variant="info">1. Setiap calon siswa wajib mengisi form pendaftaran dengan lengkap.</ListGroupItem>
                        <ListGroupItem action variant="info">2. Data-data yang diisikan pada form PPDB Online harus sesuai dengan data asli dan benar adanya.</ListGroupItem>
                        <ListGroupItem action variant="info">3. Calon siswa yang sudah mendaftarkan secara online akan mendapatkan Nomor Tes yang harus dicetak 
                                dan mendapatkan password serta dilampirkan dalam persyaratan yang diminta oleh 
                                Panitia PPDB SMK Muhammadiyah Sampit.
                        </ListGroupItem>
                        <ListGroupItem action variant="info">4. Calon siswa yang sudah mendaftarkan diri melalui PPDB Online SMK Muhammadiyah Sampit 
                            wajib menyerahkan dokumen persyaratan yang sudah ditentukan oleh Panitia PPDB SMK Muhammadiyah Sampit pada saat Daftar Ulang.
                        </ListGroupItem>
                        <ListGroupItem action variant="info">5. Data yang sudah diberikan oleh Panitia PPDB SMK Muhammadiyah Sampit hanya digunakan 
                            untuk keperluan penerimaan siswa baru dan data tidak akan dipublikasikan serta dijaga kerahasiaannya oleh Panita PPDB.
                        </ListGroupItem>
                    </ListGroup>
                    </Col>
                        <h5 className="mt-5">Apakah anda setuju dengan ketentuan di atas</h5>
                        <hr/>                    
                    <Col>
                        <form onSubmit={handleSubmit}>
                            <Field name="setuju" id="setuju" label= "Ya, Saya setuju" component={renderCheckbox} type="checkbox" />
                            <div>
                            <Button type="submit" className="next">
                                Lanjut
                            </Button>
                            </div>
                        </form>
                    </Col>
                </Col>
            </Row>
        </Container>
    </Aux>    
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardForm0Ketentuan)
