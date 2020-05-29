import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';
import Aux from '../../../../hoc/_Aux';
import CardSiswa from '../../../../../App/components/MainCard';
// import CollapseItem from '../../../Component/CollapseItem';
import styled from 'styled-components';

function BerandaContent(props) {

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
  
  const datasiswa = props.data.data;
  return (    
    <Aux>      
      <CardSiswa title={`${datasiswa.namasiswa}`.toUpperCase()} isOption>
        <BoxTitle2 isPaddingTop>STATUS REGISTRASI</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Kode Pendaftaran</BoxTitle></Col>
            <Col sm={6}><BoxContent>{props.data.kodePendaftaran}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Login No.Pendaftaran</BoxTitle></Col>
            <Col sm={6}><BoxContent bold>{props.data.kodePendaftaran}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Login NISN/Password</BoxTitle></Col>
            <Col sm={6}><BoxContent bold>{props.data.nisn}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Tanggal Registrasi</BoxTitle></Col>
            <Col sm={6}><BoxContent>
              {/* TODO : Moment refused to bring valid minutes:second */}
              <Moment format='dddd, D MMMM YYYY, HH:mm:ss' utc local>
                {props.data.createAt}
              </Moment> 

              {/* {Moment(props.data.createAt).format("dddd, MMMM Do YYYY, h:mm:ss a")} */}
            </BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pilihan 1</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pilihan1}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pilihan 2</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pilihan2}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Status Diterima</BoxTitle></Col>
            <Col sm={6}>
              <BoxContent bold italic small>
                {
                  props.data.verifikasi ? 'Berhasil' : 'menunggu proses verifikasi...'
                }              
              </BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Status Pendaftaran</BoxTitle></Col>
            <Col sm={6}>
              <BoxContent bold italic small>                
                {
                  props.data.diterima ? 'Selamat! Kamu diterima' : 'Masih Proses'
                }
              </BoxContent>
            </Col>
          </Row>          
        </Container>

        <BoxTitle2>Data Siswa</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Nama Lengkap</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.namasiswa}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>NISN</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.nisn}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>NIK</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.nik}</BoxContent></Col>
          </Row>            
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>No.HP</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.nohapesiswa}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Tempat/Tanggal Lahir</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.tempatlahirsiswa} 
              <span>,</span> {datasiswa.tgllahirsiswa} {datasiswa.blnlahirsiswa} {datasiswa.tahunlahirsiswa}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Jenis Kelamin</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.jeniskelamin}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Agama</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.agamaSiswa}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Kewarganegaraan</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.kewarganegaraan}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Alamat</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.alamatsiswa}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Tinggal Bersama</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.tinggalbersama}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3}><BoxTitle>Jumlah Saudara</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.jmlsaudara}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3}><BoxTitle>Anak Ke-</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.anakkebrp}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3}><BoxTitle>Status Keluarga</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.statusdlmkeluarga}</BoxContent></Col>
          </Row>
        </Container>

        <BoxTitle2>Data Sekolah</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Asal Sekolah</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.sekolahasal}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Status Sekolah</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.statussekolah}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Alamat Sekolah</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.alamatSekolah}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Tahun Lulus</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.tahunlulus}</BoxContent></Col>
          </Row>
        </Container>

        <BoxTitle2>Data Ibu Kandung</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Nama Ibu</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.namaIbu}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pendidikan Terakhir</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pendidikanIbu}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pekerjaan</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pekerjaanIbu}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Agama</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.agamaIbu}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Penghasilan/bulan</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.penghasilanIbu}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>No.HP Ibu</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.nohapeIbu}</BoxContent></Col>
          </Row>
        </Container>

        <BoxTitle2>Data Ayah Kandung</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Nama Ayah</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.namaAyah}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pendidikan Terakhir</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pendidikanAyah}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pekerjaan</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pekerjaanAyah}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Agama</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.agamaAyah}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Penghasilan/bulan</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.penghasilanAyah}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>No.HP Ayah</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.nohapeAyah}</BoxContent></Col>
          </Row>
        </Container>

        <BoxTitle2>Data Wali</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Nama Wali</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.namaWali}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pendidikan Terakhir</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pendidikanWali}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Pekerjaan</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.pekerjaanWali}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>Penghasilan/bulan</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.penghasilanWali}</BoxContent></Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}><BoxTitle>No.HP Wali</BoxTitle></Col>
            <Col sm={6}><BoxContent>{datasiswa.nohapeWali}</BoxContent></Col>
          </Row>
        </Container>
      </CardSiswa>
    </Aux>
  );
}

export default BerandaContent;