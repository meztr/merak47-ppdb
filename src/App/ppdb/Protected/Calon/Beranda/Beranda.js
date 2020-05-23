import React from 'react';
import {Row, Col, Alert, Button, ButtonGroup, ListGroup, ListGroupItem, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Aux from '../../../../hoc/_Aux';
import Carda from '../../../../../App/components/MainCard';
import CollapseItem from '../../../Component/CollapseItem';
import BerandaContent from './BerandaContent';
import styled from 'styled-components';

const FloatingWhatsApp = styled.div`
  // position:fixed;
  width:80px;
  height:80px;
  bottom:40px;
  right:40px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:12px;
  box-shadow: 2px 2px 3px #999;
  z-index:100;
`;

class Beranda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datasiswa: this.props.dataC
    }
  }

  render() {
    // console.log('1-Beranda');
    // console.log(this.state.datasiswa)
    // Object.entries(this.state.datasiswa).forEach(([key, value]) => {
    //   console.log(key, value);
    // })
    const namapengirim = this.state.datasiswa.namasiswa;
    const waAyu = 'https://api.whatsapp.com/send?phone=6282255442822&text=*%5Bppdb/' + this.state.datasiswa.kodePendaftaran + '%5D%20%5B'+ this.state.datasiswa.namasiswa + '%5D*%20AssalamualaikumWrWb..%20';
    const waRatih = 'https://api.whatsapp.com/send?phone=6281349292791&text=*%5Bppdb/' + this.state.datasiswa.kodePendaftaran + '%5D%20%5B'+ this.state.datasiswa.namasiswa + '%5D*%20AssalamualaikumWrWb..%20';
    const waMezt = 'https://api.whatsapp.com/send?phone=6282154551792&text=*%5Bppdb/' + this.state.datasiswa.kodePendaftaran + '%5D%20%5B'+ this.state.datasiswa.namasiswa + '%5D*%20AssalamualaikumWrWb..%20';
    return (
      
      <Aux>
        {/* { !this.state.datasiswa ? */}
        <Row className="justify-content-md-center">
          <Col md={6} xl={6}>
            {/* <CollapseItem title='INFORMASI PENTING'>
              <span className="d-block m-t-5">Silakan login kembali untuk <code>Informasi</code> PPDB Terbaru atau
                  <code>Status Penerimaan</code> kamu menggunakan:<hr/>
              </span>
              <code>
                <h4>USERNAME = {this.state.datasiswa.kodePendaftaran}</h4>
                <h4>PASSWORD = {this.state.datasiswa.data.nik}</h4>
              </code>
            </CollapseItem> */}
            <Alert variant="primary">
              <Alert.Heading><strong><small>Halo, {this.state.datasiswa.namasiswa}</small></strong></Alert.Heading>              
              <hr/>
              <p>
                  Assalamualaikum Wr Wb..
                  Senang sekali kamu siap bergabung di SMK Muhammadiyah Sampit.
              </p>

              <p>
                Kamu bisa login kembali menggunakan username dan password ini untuk mendapatkan informasi terbaru :
                <hr/>
                <code>
                  <h5>username: {this.state.datasiswa.kodePendaftaran}</h5>
                  <h5>password: {this.state.datasiswa.nisn}</h5>
                </code>
                <hr/>
                
                <Button variant="danger" onClick={() => window.open('https://www.instagram.com/smkmuhammadiyahsampit/', "_blank")} >
                  <i className="fa fa-instagram my-float"></i> Follow Instagram Kita
                </Button>{' '}
              </p>
            </Alert>
          </Col>
          <Col md={6} xl={6}>
            <Alert variant="success">
              <Alert.Heading>INFORMASI</Alert.Heading>
              <hr/>
              <p>
                Untuk informasi lebih lanjut jika kamu tidak bisa menemukannya di website ini <br/> Silakan langsung chat aja kami via whatsapp pada tombol di bawah ini
              </p>
              <section>
                <Button variant="success" onClick={() => window.open(`${waAyu}`, "_blank")} >
                  <i className="fa fa-whatsapp my-float"></i> Bu Ayu Oktarizza
                </Button>{' '}
                
                <Button variant="primary" onClick={() => window.open(`${waRatih}`, "_blank")} >
                  <i className="fa fa-whatsapp my-float"></i> Bu Ratih Plaraningrum
                </Button>{' '}
              </section>
              <section>
                <Button variant="outline-primary" onClick={() => window.open(`${waMezt}`, "_blank")} >
                  <i className="fa fa-whatsapp my-float"></i> Layanan Teknis (Mezt Rahmat)
                </Button>{' '}
              </section>
            </Alert>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={12} xl={12}>
            <BerandaContent data={this.state.datasiswa} />
          </Col>
        </Row>
        {/* : */}
        {/* <Row>          
            <Col md={12} xl={12}>
              <h4>Error 47A - Silakan Logout secara manual dan Login Kembali</h4>
            </Col>
          </Row>
        } */}
      </Aux>      
    );
  }
};

export default Beranda;