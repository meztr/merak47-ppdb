import React, { Component } from "react";
import { Card } from "react-bootstrap";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Modal,
//   Image,
//   Card,
//   ListGroup,
//   Tab,
//   Nav,
// } from "react-bootstrap";

class RightBar extends Component {
  render() {
    return (
      //Page Content
      <div className="container mt-3 mb-3">
        <Card>
          <Card.Header as="h5">Alur PPDB Online</Card.Header>

          {/* agenda 1 */}
          <ul className="timeline overflow-auto">
            <li>
              <a className="text-dark" href="/wizard">
                Isi Formulir PPDB Online
              </a>
            </li>
            <li>
              <p className="text-dark">Mendapatkan ID dan PIN</p>
            </li>
            <li>
              <p className="text-dark">Konfirmasi Pembayaran</p>
            </li>
            <li>
              <p className="text-dark">Print Formulir PPDB</p>
            </li>
            <li>
              <p className="text-dark">Mengikuti Tes Masuk</p>
            </li>
            <li>
              <p className="text-dark" href="/pengumuman">
                Lihat Hasil Penerimaan
              </p>
            </li>
            <li>
              <p className="text-dark">Daftar Ulang & Setor Berkas</p>
            </li>
            <li>
              <p className="text-dark">Membayar Biaya Sekolah</p>
            </li>
            <li>
              <p className="text-dark">Mengikuti Pendidikan</p>
            </li>
          </ul>
        </Card>
      </div>
    );
  }
}

export default RightBar;
