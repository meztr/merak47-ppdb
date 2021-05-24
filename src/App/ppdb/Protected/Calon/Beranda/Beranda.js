import React from "react";
import { Row, Card, Col, Modal, Image, Button, Table } from "react-bootstrap";
// import { Link } from 'react-router-dom';

import Aux from "../../../../hoc/_Aux";
// import Carda from '../../../../../App/components/MainCard';
import CollapseItem from "../../../Component/CollapseItem";
import BerandaContent from "./BerandaContent";
import Card2 from "../../../Component/Card2";
// import styled from 'styled-components';

const CardStatusPendaftaran = ({ status }) => {
  return (
    <Col md={4} xl={4}>
      <Card style={{height:'9rem'}}>
        <Card.Body>
          <h6 className="mb-4">STATUS PENDAFTARAN</h6>
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <h5 className="f-w-300 d-flex align-items-center m-b-0">
                <i className="fa fa-hourglass-half text-c-yellow f-30 m-r-5" />{" "}
              </h5>
            </div>

            <div className="col-9 text-right">
              <p className="m-b-0">{status}</p>
            </div>
          </div>
          {/* <div className="progress m-t-30" style={{ height: "7px" }}>
            <div
              className="progress-bar progress-c-theme"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div> */}
          {/* <Row>
            <ul>
              <li><small>belum upload scan kartu keluarga</small></li>
              <li><small>belum upload pas photo calon siswa</small></li>
            </ul>
          </Row> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardStatusPembayaran = ({ status }) => {
  return (
    <Col md={4} xl={4}>
      <Card style={{height:'9rem'}}>
        <Card.Body>
          <h6 className="mb-4">STATUS PEMBAYARAN</h6>
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <h5 className="f-w-300 d-flex align-items-center m-b-0">
                <i className="fa fa-spinner text-c-red f-30 m-r-5" />{" "}
              </h5>
            </div>

            <div className="col-9 text-right">
              <p className="m-b-0">{status}</p>
            </div>
          </div>
          {/* <div className="progress m-t-30" style={{ height: "7px" }}>
            <div
              className="progress-bar progress-c-theme"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

const PanelBerkas = (props) => {
  return (
    <Card className="Recent-Users">
      <Card.Header>
        <Card.Title as="h5">Upload & Lengkapi Berkas Pendaftaran-mu</Card.Title>
      </Card.Header>
      <Card.Body className="px-0 py-2">
        <div className="ml-4 mb-4">
          <h6 className="mt-2 f-w-300">
            <strong className="text-danger">Perhatian: </strong> Lengkapi segera
            dokumen yang belum di bawah ini
          </h6>
        </div>
        <Table responsive hover size="sm">
          <tbody>
            <tr className="unread">
              <td>
                <h6 className="ml-3">
                  <i className="fa fa-circle text-c-blue f-10 m-r-15 m-2" />
                  Data Pendaftaran
                  <i className="fa fa-check text-c-green f-20 m-r-15 m-2" />
                </h6>
              </td>
              <td>
                <a
                  href={"#dataregistrasi"}
                  className="label theme-bg text-white f-12"
                >
                  Lihat
                </a>
              </td>
            </tr>
            <tr className="unread">
              <td>
                <h6 className="ml-3">
                  <i className="fa fa-circle text-c-blue f-10 m-r-15 m-2" />
                  Data Siswa
                  <i className="fa fa-check text-c-green f-20 m-r-15 m-2" />
                </h6>
              </td>
              <td>
                <a
                  href={"#dataregistrasi"}
                  className="label theme-bg text-white f-12"
                >
                  Lihat
                </a>
              </td>
            </tr>
            <tr className="unread">
              <td>
                <h6 className="ml-3">
                  <i className="fa fa-circle text-c-blue f-10 m-r-15 m-2" />
                  Data Orang Tua/Wali
                  <i className="fa fa-check text-c-green f-20 m-r-15 m-2" />
                </h6>
              </td>
              <td>
                <a
                  href={"#dataregistrasi"}
                  className="label theme-bg text-white f-12"
                >
                  Lihat
                </a>
              </td>
            </tr>
            <tr className="unread">
              <td>
                <h6 className="ml-3">
                  <i className="fa fa-circle text-c-blue f-10 m-r-15 m-2" />
                  Data Sekolah
                  <i className="fa fa-check text-c-green f-20 m-r-15 m-2" />
                </h6>
              </td>
              <td>
                <a
                  href={"#dataregistrasi"}
                  className="label theme-bg text-white f-12"
                >
                  Lihat
                </a>
              </td>
            </tr>
            <tr className="unread">
              <td>
                <h6 className="ml-3">
                  {props.scankk ? (
                    <i className="fa fa-circle text-c-green f-10 m-r-15 m-2" />
                  ) : (
                    <i className="fa fa-circle text-c-red f-10 m-r-15 m-2" />
                  )}
                  Upload Scan Kartu Keluarga{" "}
                  {props.scankk ? (
                    <i className="fa fa-check text-c-green f-20 m-r-15 m-2" />
                  ) : (
                    <i className="fa fa-exclamation text-c-red f-20 m-r-15 m-2" />
                  )}
                </h6>
              </td>
              <td>
                {props.scankk ? (
                  <a
                    href={"#dataregistrasi"}
                    className="label theme-bg text-white f-12"
                  >
                    Lihat
                  </a>
                ) : (
                  <a
                    href={"/user/biodata"}
                    className="label theme-bg3 text-white f-12"
                    onClick={props.handleModal}
                  >
                    Upload
                  </a>
                )}
              </td>
            </tr>
            <tr className="unread">
              <td>
                <h6 className="ml-3">
                  {props.scankk ? (
                    <i className="fa fa-circle text-c-green f-10 m-r-15 m-2" />
                  ) : (
                    <i className="fa fa-circle text-c-red f-10 m-r-15 m-2" />
                  )}
                  Pas Photo{" "}
                  {props.scankk ? (
                    <i className="fa fa-check text-c-green f-20 m-r-15 m-2" />
                  ) : (
                    <i className="fa fa-exclamation text-c-red f-20 m-r-15 m-2" />
                  )}
                </h6>
              </td>
              <td>
                {props.pasphoto ? (
                  <a
                    href={"#dataregistrasi"}
                    className="label theme-bg text-white f-12"
                  >
                    Lihat
                  </a>
                ) : (
                  <a
                    href={"/user/biodata"}
                    className="label theme-bg3 text-white f-12"
                  >
                    Upload
                  </a>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
const PanelNews = (props) => {
  return <Card2 title="Pengumuman" />;
};
const RightPanel1 = (props) => {
  return (
    <CollapseItem
      title={"Informasi Penting"}
      icon={<i className="fa fa-exclamation-circle text-c-yellow f-30 ml-2" />}
    >
      <Col>
        <span className="d-block m-t-5 text-dark">
          Silakan login kembali untuk <code>Informasi</code> PPDB Terbaru atau
          <code> Status Penerimaan</code> kamu menggunakan:
          <hr />
        </span>
        <code>
          <h5>ID = {props.kodePendaftaran}</h5>
          <h5>PIN = {props.nik}</h5>
        </code>
        <div>
          <code>
            <small>Tips: Screenshot/Tangkap Layar informasi login ini</small>
          </code>
        </div>
      </Col>
      <Col className="mt-3">
        <Button
          variant="danger"
          onClick={() =>
            window.open(
              "https://www.instagram.com/smkmuhammadiyahsampit/",
              "_blank"
            )
          }
        >
          <i className="fa fa-instagram my-float"></i> Follow Instagram Kita
        </Button>{" "}
      </Col>
    </CollapseItem>
  );
};
const RightPanel2 = (props) => {
  const waJumi =
    "https://api.whatsapp.com/send?phone=6281345993558&text=*%5Bppdb/" +
    props.kodePendaftaran +
    "%5D%21%5B" +
    props.namasiswa +
    "%5D*%20AssalamualaikumWrWb..%20";
  return (
    <Card2
      title={"Layanan Informasi PPDB"}
      icon={<i className="fa fa-info text-c-purple f-20" />}
      body={
        <div className="col">
          <h6>
            Hubungi WhatsApp berikut untuk layanan informasi PPDB lebih jauh
          </h6>
        </div>
      }
      content={
        <>
          <div className="col">
            <Row>
              <h5 className="f-w-300 d-flex align-items-center float-left m-0 mt-2">
                <i
                  className="fa fa-phone f-20 m-l-15 mr-2"
                  style={{ color: "#25D366" }}
                />{" "}
                081345993558
              </h5>
              <div className="f-w-300 d-flex align-items-center float-left m-0 mt-2">
                <Button
                  className="m-l-15 mr-2"
                  style={{
                    backgroundColor: "#25D366",
                    borderColor: "white",
                  }}
                  onClick={() => window.open(`${waJumi}`, "_blank")}
                >
                  <i className="fa fa-whatsapp f-20 my-float" />
                  Jumiati, S.Pd
                </Button>
              </div>
            </Row>
          </div>
        </>
      }
    />
  );
};

const modalUpload = ({ eshow }) => (
  <div>
    <Modal show={eshow}>
      <Modal.Header closeButton onClick={() => this.handleModal()}>
        <Modal.Title>Upload Scan Kartu Keluarga</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Selain melakukan Download Formulir Offline, <br />
        <br />
        <Image
          style={{ paddingBottom: "15px" }}
          src={process.env.PUBLIC_URL + "../assets/ppdb_btn.png"}
        />
        <br /> Tombol <strong>Isi Formulir PPDB</strong> Online adalah cara yang
        lebih baik bagi Calon Siswa SMK Muhammadiyah Sampit untuk melakukan
        Pendaftaran secara real time
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => this.handleModal()}>
          Tutup
        </Button>
        <Button
          variant="info"
          download="FormulirOfflineSMKMSampit2021.pdf"
          target="_blank"
          href={
            process.env.PUBLIC_URL + "../assets/formulir-ppdb-2021-2022.pdf"
          }
        >
          Lanjutkan Download
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
);
class Beranda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datasiswa: this.props.dataC,
      showHide: false,
    };
  }

  handleModal() {
    // this.setState({ showHide: !this.state.showHide });
    // alert("okay");
  }

  render() {
    return (
      <Aux>
        {/* { !this.state.datasiswa ? */}
        <Row className="justify-content-md-center">
          <Col md={8} xl={8}>
            <Row>
              <CardStatusPendaftaran status="menunggu verifikasi" />
              <CardStatusPembayaran status="belum bayar" />
            </Row>
            <PanelBerkas
              scankk={this.state.datasiswa.scankk}
              pasphoto={this.state.datasiswa.pasphoto}
              // handleModal={this.handleModal}
            />
            <modalUpload eShow={this.state.showHide} />
            <PanelNews />
          </Col>
          <Col md={4} xl={4}>
            <RightPanel1
              kodePendaftaran={this.state.datasiswa.kodePendaftaran}
              nik={this.state.datasiswa.data.nik}
            />
            <RightPanel2
              kodePendaftaran={this.state.datasiswa.kodePendaftaran}
              namasiswa={this.state.datasiswa.namasiswa}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center" id="dataregistrasi">
          <Col md={12} xl={12}>
            <BerandaContent data={this.state.datasiswa} />
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Beranda;
