import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Moment from 'react-moment';
import Aux from '../../../../hoc/_Aux';
import Card from '../../../../../App/components/MainCard';
import CardSiswa from '../../../../../App/components/MainCard';
import styled from 'styled-components';

function News(props) {

  const BoxTitle = styled.div`
    font-size: 0.7em;
    text-align: left;
    color: #202020;
    background-color: #FFFFFF;
    height: 30px;
    font-weight: bold;
    padding-left: 12px;
    line-height: 35px;
    border-bottom: 1px solid #BDBDBD;
    text-transform: uppercase;
  `;

  const BoxContent = styled.div`
    font-size: ${props => props.small ? '0.9em' : '1em'};
    text-align: left;
    font-style: ${props => props.italic ? 'italic' : ''};
    font-weight: ${props => props.bold ? 'bold' : ''};
    color: #202020;
    background-color: #F2F2F2;
    height: 30px;
    padding-left: 12px;
    line-height: 32px;
    border-bottom: 1px solid #BDBDBD;
  `;

  const BoxTitle2 = styled.h1`
    font-weight: bold;
    font-size: 1.0em;
    text-align: left;
    color: #202020;
    padding-left: 25px;
    padding-top: ${props => props.isPaddingTop ? '0' : '40px'};
    text-transform: uppercase;
  `;

  let contentNews = (
    <p>Belum ada pengumuman</p>
  );

  return (
    <Aux>
      <CardSiswa title="STATUS REGISTRASI" isOption>
        <BoxTitle2 isPaddingTop>{`${props.dataC.namasiswa}`.toUpperCase()}</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Kode Pendaftaran</BoxTitle></Col>
            <Col sm={6}><BoxContent>{props.dataC.kodePendaftaran}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Login No.Pendaftaran</BoxTitle></Col>
            <Col sm={6}><BoxContent bold>{props.dataC.kodePendaftaran}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Login NISN/Password</BoxTitle></Col>
            <Col sm={6}><BoxContent bold>{props.dataC.nisn}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Tanggal Registrasi</BoxTitle></Col>
            <Col sm={6}><BoxContent>
              <Moment format='dddd, D MMMM YYYY, HH:mm:ss' utc local>
                {props.dataC.createAt}
              </Moment>
            </BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pilihan 1</BoxTitle></Col>
            <Col sm={6}><BoxContent>{props.dataC.data.pilihan1}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pilihan 2</BoxTitle></Col>
            <Col sm={6}><BoxContent>{props.dataC.data.pilihan2}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Status Verifikasi Pendaftaran</BoxTitle></Col>
            <Col sm={6}>
              <BoxContent bold italic small>
                {
                  props.dataC.verifikasi ? 'Berhasil (Berkas Pendaftaran Online diterima)' : 'menunggu proses verifikasi...'
                }              
              </BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Status Pendaftaran</BoxTitle></Col>
            <Col sm={6}>
              <BoxContent bold italic small>                
                {
                  props.dataC.diterima ? 'Selamat! Kamu diterima' : 'Masih Proses'
                }
              </BoxContent>
            </Col>
          </Row>
        </Container>
      </CardSiswa>
    
      <Row>
        <Col>
          <Card title='Update info' isOption>
            {contentNews}
          </Card>
        </Col>
      </Row>
      
    </Aux>
  );
    
        

}

export default News;