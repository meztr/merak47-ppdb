/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useMemo, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  // Dropdown,
  // DropdownButton,
} from "react-bootstrap";
// import {connect} from 'react-redux';
import Aux from "../../../../hoc/_Aux";
import Moment from "react-moment";
import styled from "styled-components";
import MLoader from "../../../../layout/Loader/Spinner";
import firebase from "../../../../../services/firebase";
import TableCalon from "../../../Component/TableCalon";
// import CollapseItem from '../../../Component/CollapseItem';
import "./Table.css";

const Styles = styled.div`
  .pagination {
    padding: 0.5rem;
    display: inherit;
  }
`;

const BoxTitle = styled.div`
  font-size: 0.7em;
  text-align: left;
  color: #202020;
  background-color: #ffffff;
  height: 30px;
  font-weight: bold;
  padding-left: 12px;
  line-height: 35px;
  border-bottom: 1px solid #bdbdbd;
  text-transform: uppercase;
`;

const BoxContent = styled.div`
  font-size: ${(props) => (props.small ? "0.9em" : "1em")};
  text-align: left;
  font-style: ${(props) => (props.italic ? "italic" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  color: #202020;
  background-color: #f2f2f2;
  height: 30px;
  padding-left: 12px;
  line-height: 32px;
  border-bottom: 1px solid #bdbdbd;
`;

const BoxTitle2 = styled.h1`
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #202020;
  padding-left: 25px;
  padding-top: ${(props) => (props.isPaddingTop ? "0" : "40px")};
  text-transform: uppercase;
`;

function Progress(props) {
  const [data, setData] = useState([]);
  // const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentData, setCurrentData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Calon Siswa",
        columns: [
          {
            Header: "Tgl Reg.",
            accessor: "createAt",
            Cell: ({ cell: { value } }) => {
              return (
                <Moment format="DD MMMM YYYY, HH:mm:ss" utc local>
                  {value}
                </Moment>
              );
            },
          },
          {
            Header: "Kode",
            accessor: "kodePendaftaran",
          },
          {
            Header: "NISN",
            accessor: "nisn",
          },
          {
            Header: "Nama",
            accessor: "namasiswa",
          },
          {
            Header: "Jalur",
            accessor: "jalurPendaftaran",
          },
          {
            Header: "Ibu Kandung",
            accessor: "data.namaIbu",
          },
          {
            Header: "Sekolah",
            accessor: "data.sekolahasal",
          },
        ],
      },
      {
        Header: "Status",
        columns: [
          {
            Header: "Verifikasi",
            accessor: "verifikasi",
            Cell: ({ cell: { value } }) => {
              return value ? <i className="fa fa-check" /> : "Belum";
            },
          },
          {
            Header: "Diterima",
            accessor: "diterima",
            Cell: ({ cell: { value } }) => {
              return value ? <i className="fa fa-check" /> : "Belum";
            },
          },
        ],
      },
      {
        Header: "#",
        columns: [
          {
            Header: "Kelola",
            Cell: ({ row }) => (
              <button value={row} onClick={(e) => handleButtonClick(e, row)}>
                <i className="fa fa-edit" />
              </button>
            ),
          },
        ],
      },
    ],
    []
  );

  const handleButtonClick = (e, row) => {
    setShowModal(true);
    setCurrentData(row.original);
  };

  useEffect(() => {
    (async () => {
      // try {
      //   firebase
      //   .database()
      //   .ref( 'ppdb2020/calonsiswa' )
      //   .on('value', snapshot => {
      //     setData(Object.values(snapshot.val()));
      //     setError(null);
      //     setLoading(false);
      //   });
      // } catch (error) {
      //   setError('Progress Informasi Fetch failed');
      //   setLoading(false);
      // }
      firebase
        .database()
        .ref("ppdb2021/calonsiswa")
        .on("value", (snapshot) => {
          setData(Object.values(snapshot.val()));
          setLoading(false);
        });
    })();
  }, []);

  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Progress Informasi Calon Siswa</Card.Title>
            </Card.Header>
            <Card.Body>
              {loading ? (
                <Col>
                  <MLoader />
                </Col>
              ) : (
                <Styles>
                  <TableCalon columns={columns} data={data} />
                </Styles>
              )}

              {showModal && (
                <DetilModal
                  data={currentData}
                  show={showModal}
                  onHide={() => setShowModal(false)}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
}

function DetilModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5>
            {props.data.namasiswa} | {props.data.data.sekolahasal}
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BoxTitle2 isPaddingTop>STATUS REGISTRASI</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Kode Pendaftaran</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.kodePendaftaran}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Login No.Pendaftaran</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent bold>{props.data.kodePendaftaran}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Login NISN/Password</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent bold>{props.data.nisn}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Tanggal Registrasi</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>
                {/* TODO : Moment refused to bring valid minutes:second */}
                <Moment format="dddd, D MMMM YYYY, HH:mm:ss" utc local>
                  {props.data.createAt}
                </Moment>

                {/* {Moment(props.data.createAt).format("dddd, MMMM Do YYYY, h:mm:ss a")} */}
              </BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pilihan 1</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pilihan1}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pilihan 2</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pilihan2}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Status Verifikasi</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent bold italic small>
                {props.data.verifikasi
                  ? "Berhasil (Berkas Pendaftaran Online diterima)"
                  : "menunggu proses verifikasi..."}
              </BoxContent>
            </Col>
            {/* <Col sm={3} md={3} xl={3}>
              {
                props.data.verifikasi ? <button>Batalkan</button> : <button>Verifikasi</button>
              } 
            </Col> */}
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Status Lulus Pendaftaran</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent bold italic small>
                {props.data.diterima ? "Lulus" : "Menunggu Proses Daftar Ulang"}
              </BoxContent>
            </Col>
          </Row>
        </Container>

        <Container fluid={true}>
          <BoxTitle2>Kelola</BoxTitle2>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Verifikasi</BoxTitle>
            </Col>
            <Col></Col>
          </Row>
        </Container>

        <BoxTitle2>Data Siswa</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Nama Lengkap</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.namasiswa}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>NISN</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.nisn}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>NIK</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.nik}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>No.HP</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.nohapesiswa}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Tempat/Tanggal Lahir</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>
                {props.data.data.tempatlahirsiswa}
                <span>,</span> {props.data.data.tgllahirsiswa}{" "}
                {props.data.data.blnlahirsiswa}{" "}
                {props.data.data.tahunlahirsiswa}
              </BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Jenis Kelamin</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.jeniskelamin}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Agama</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.agamaSiswa}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Kewarganegaraan</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.kewarganegaraan}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Alamat</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.alamatsiswa}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Tinggal Bersama</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.tinggalbersama}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <BoxTitle>Jumlah Saudara</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.jmlsaudara}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <BoxTitle>Anak Ke-</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.anakkebrp}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <BoxTitle>Status Keluarga</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.statusdlmkeluarga}</BoxContent>
            </Col>
          </Row>
        </Container>

        <BoxTitle2>Data Sekolah</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Asal Sekolah</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.sekolahasal}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Status Sekolah</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.statussekolah}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Alamat Sekolah</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.alamatSekolah}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Tahun Lulus</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.tahunlulus}</BoxContent>
            </Col>
          </Row>
        </Container>

        <BoxTitle2>Data Ibu Kandung</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Nama Ibu</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.namaIbu}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pendidikan Terakhir</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pendidikanIbu}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pekerjaan</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pekerjaanIbu}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Agama</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.agamaIbu}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Penghasilan/bulan</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.penghasilanIbu}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>No.HP Ibu</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.nohapeIbu}</BoxContent>
            </Col>
          </Row>
        </Container>

        <BoxTitle2>Data Ayah Kandung</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Nama Ayah</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.namaAyah}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pendidikan Terakhir</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pendidikanAyah}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pekerjaan</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pekerjaanAyah}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Agama</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.agamaAyah}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Penghasilan/bulan</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.penghasilanAyah}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>No.HP Ayah</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.nohapeAyah}</BoxContent>
            </Col>
          </Row>
        </Container>

        <BoxTitle2>Data Wali</BoxTitle2>
        <Container fluid={true}>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Nama Wali</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.namaWali}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pendidikan Terakhir</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pendidikanWali}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Pekerjaan</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.pekerjaanWali}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>Penghasilan/bulan</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.penghasilanWali}</BoxContent>
            </Col>
          </Row>
          <Row>
            <Col sm={3} md={3} xl={3}>
              <BoxTitle>No.HP Wali</BoxTitle>
            </Col>
            <Col sm={6}>
              <BoxContent>{props.data.data.nohapeWali}</BoxContent>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="success" onClick={props.onHide}>Send Notify WA</Button> */}
        {/* <Button variant="primary" onClick={props.onHide}>Simpan</Button>         */}
        <Button variant="secondary" onClick={props.onHide}>
          Tutup
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// const mapStateToProps = state => ({
//   datag: state.authReducer.dataA
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchAllAdminData: () => dispatch(fetchAllAdminData())
//   }
// };

export default Progress;
// export default connect(mapStateToProps, mapDispatchToProps) (Progress);
