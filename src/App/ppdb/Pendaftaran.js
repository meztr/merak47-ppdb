import React, {Component} from 'react';
import { Button, Form, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { connect } from "react-redux";
// import { signup, signin, resetPassword } from "../../store/actions/auth";

import '../../assets/scss/style.scss';
import Aux from "../hoc/_Aux";
import Loader from "../layout/Loader"

class Pendaftaran extends Component {
    constructor (props) {
        super(props);
        this.state = {
            setuju: false
        }
    }
    render() {
        return (
            <Aux>
                <Container>
                    <Row>
                        <Col>                                
                                    <h3 className="mt-4">Form Online PPDB SMK Muhammadiyah Sampit</h3>
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
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                type="checkbox"
                                                id="checkbox1"
                                                label="Ya, Saya setuju"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}><Button href="#">Lanjut</Button></Col>        
                        </Col>
                    </Row>
                </Container>
            </Aux>
        );
    }
}

export default Pendaftaran;