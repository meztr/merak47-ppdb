import React from "react";
// import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import { ListGroup } from "react-bootstrap";
// import Map from '../Maps'
import Aux from "../../../hoc/_Aux";
// import DEMO from "../../store/constant";

class Home extends React.Component {
  render() {
    let content = (
      <div>
        {/* <!-- About section--> */}
        {/* <section className="page-section bg-primary" id="about">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">We've got what you need!</h2>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                    <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                  </div>
                </div>
              </div>
            </section> */}
        <section className="page-section bg-dark" id="prosedur">
          <div className="container text-center">
            <div className="jumbotron">
              <h1 className="display-6">Prosedur PPDB Online</h1>
              {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
              <hr className="my-4" />
              <ListGroup className="text-left">
                <ListGroup.Item variant="dark" as="li">
                  1. Calon Siswa mendaftarkan diri lewat{" "}
                  <span style={{ color: "blue" }}>
                    PPDB Online SMK Muhammadiyah Sampit
                  </span>{" "}
                  di website{" "}
                  <a
                    style={{ color: "blue" }}
                    href="https://ppdb.smkmuhsampit.id"
                  >
                    ppdb.smkmuhsampit.id
                  </a>
                </ListGroup.Item>
                <ListGroup.Item variant="dark" as="li">
                  2. Setelah seleasi melakukan registrasi pendaftaran online,
                  Calon Siswa wajib melakukan Print Out Pendaftaran &
                  mempersiapkan Kelengkapan Berkas PPDB SMK Muhammadiyah Sampit
                  untuk keperluan Proses Daftar Ulang
                </ListGroup.Item>
                <ListGroup.Item variant="dark" as="li">
                  3. Panitia PPDB melakukan Verifikasi dan Validasi Berkas
                  Pendaftaran secara online
                </ListGroup.Item>
                <ListGroup.Item variant="dark" as="li">
                  4. Hasil kelulusan Verifikasi PPDB Online dapat dilihat dengan
                  cara login menggunakan No. Kode Pendaftaran dan NISN yang
                  didapat dari web aplikasi PPDB saat selesai melakukan
                  registrasi pendaftaran online
                </ListGroup.Item>
                <ListGroup.Item variant="dark" as="li">
                  5. Lakukan cetak Pengumuman Hasil PPDB Online yang wajib
                  disertakan saat melakukan Registrasi/Daftar Ulang.
                </ListGroup.Item>
                <ListGroup.Item variant="dark" as="li">
                  6. Calon Siswa yang dinyatakan LULUS, selanjutnya melakukan
                  Registrasi/Daftar Ulang di SMK Muhammadiyah Sampit
                </ListGroup.Item>
              </ListGroup>
              {/* <p>It uses utility class for typography and spacing to space content out within the larger container.</p> */}
              <p className="lead my-4">
                <a className="btn btn-primary btn-lg" href="#prosedur" role="button">
                  Pelajari Lebih Jauh
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* <!-- Informasi section--> */}
        <section className="page-section" id="info">
          <div className="container">
            <h2 className="text-center mt-0">Informasi PPDB Online</h2>
            <hr className="divider my-4" />
            <p className="text-center mb-0">
              Layanan Informasi via WhatsApp PPDB Online SMK Muhammadiyah Sampit
            </p>
            <div className="row">
              <div className="col-lg col-md text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Layanan Informasi PPDB</h3>
                  <i className="fa fa-whatsapp fa-3x"></i>
                </div>
                <div className="mt-4">
                  <a
                    className="btn btn-primary btn-xl"
                    href="https://api.whatsapp.com/send?phone=6281345993558&text=*%5Bppdb%5D*%20AssalamualaikumWrWb..%20"
                  >
                    Jumiati, S.Pd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Contact section--> */}
        <section className="page-section bg-dark" id="contact">
          <div className="container text-white">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Hubungi Kami</h2>
                <hr className="divider my-4" />
                <p className="mb-5">
                  Jalan Merak No 47 A Sampit Kotawaringin Timur Kalimantan
                  Tengah
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas feather icon-phone fa-2x mb3"></i>
                <a href="tel:0531-21336" className="d-block mt-2">
                  (0531) 21336
                </a>
              </div>
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="feather icon-map-pin fa-2x mb3"></i>
                <a
                  href="https://goo.gl/maps/oi1sGug5DwV8bb2w5"
                  className="d-block mt-2"
                >
                  Panduan Lokasi Sekolah via Google Map
                </a>
              </div>
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas feather icon-mail fa-2x mb-3"></i>
                <a
                  className="d-block mt-2"
                  href="mailto:ict@smkmuhsampit.sch.id"
                >
                  smk.muhsampit@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    return <Aux>{content}</Aux>;
  }
}

export default Home;
