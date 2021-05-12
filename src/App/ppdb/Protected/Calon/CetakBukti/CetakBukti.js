/* eslint-disable react/prop-types */
import React from "react";
import { Button, Row, Col, ResponsiveEmbed, Card } from "react-bootstrap";
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Image,
  // Font,
} from "@react-pdf/renderer";
import moment from "moment";
import HeaderBukti from "../../../../../assets/images/header_bukti.png";
import Aux from "../../../../hoc/_Aux";
// import FormDaftarUlang from './FormDaftarUlang.pdf';

// const Halaman = props =>
//   <Page size="A4" style={styles.page}>
//     <View style={styles.page}>
//       <Image
//         style={styles.image}
//         src={HeaderBukti}
//       />
//     </View>
//     {Children}
//   </Page>;

const SubField = (props) => (
  <View style={styles.section1}>
    <View style={styles.section21}>
      <Text style={styles.boxtitle2}>{props.sub}</Text>
    </View>
    <View style={styles.section22}>
      <Text style={styles.boxcontent2}>{props.value}</Text>
    </View>
  </View>
);

const Formulir = (props) => (
  <Document
    title={`${props.data.kodePendaftaran}-${props.data.namasiswa}`}
    author="Panitia PPDB 2020 SMK Muhammadiyah Sampit"
    subject="Cetak Bukti Registrasi PPDB Online"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.page}>
        <Image style={styles.image} src={HeaderBukti} />
      </View>

      <View style={styles.section}>
        <Text style={[styles.boxsubjudul, { textAlign: "left" }]}>
          Link login masuk: [https://ppdb.smkmuhsampit.id/main] [username:
          {props.data.kodePendaftaran} password:{props.data.nisn}]{" "}
        </Text>
        <Text style={styles.boxjudul}>
          Bukti Cetak PPDB Online 2020/2021 SMK Muhammadiyah Sampit
        </Text>
      </View>

      <View style={styles.section}>
        {/* Data Siswa */}
        <Text style={styles.boxheader1}>Data Registrasi</Text>
        <SubField
          sub="No.Pendaftaran (Login)"
          value={props.data.kodePendaftaran}
        />
        <SubField sub="NISN (Password)" value={props.data.nisn} />
        <SubField sub="Tanggal Registrasi" value={props.WaktuRegis} />
        <SubField sub="Pilihan 1" value={props.data.data.pilihan1} />
        <SubField sub="Pilihan 2" value={props.data.data.pilihan2} />
      </View>
      <View style={styles.section}>
        {/* Data Siswa */}
        <Text style={styles.boxheader1}>Data Siswa</Text>
        <SubField sub="Nama Lengkap" value={props.data.data.namasiswa} />
        <SubField sub="Jenis Kelamin" value={props.data.data.jeniskelamin} />
        <SubField sub="NISN" value={props.data.data.nisn} />
        <SubField sub="NIK" value={props.data.data.nik} />
        <SubField sub="No.HP" value={props.data.data.nohapesiswa} />
        <SubField
          sub="Tempat/Tgl Lahir"
          value={
            `${props.data.data.tempatlahirsiswa}` +
            ", " +
            `${props.data.data.tgllahirsiswa} ` +
            `${props.data.data.blnlahirsiswa} ` +
            `${props.data.data.tahunlahirsiswa}`
          }
        />
        <SubField sub="Agama" value={props.data.data.agamaSiswa} />
        <SubField
          sub="Kewarganegaraan"
          value={props.data.data.kewarganegaraan}
        />
        <SubField sub="Alamat" value={props.data.data.alamatsiswa} />
        <SubField
          sub="Tinggal Bersama"
          value={props.data.data.tinggalbersama}
        />
        <SubField sub="Jumlah Saudara" value={props.data.data.jmlsaudara} />
        <SubField sub="Anak ke-" value={props.data.data.anakkebrp} />
        <SubField
          sub="Status Keluarga"
          value={props.data.data.statusdlmkeluarga}
        />
      </View>

      {/* Data Sekolah         */}
      <View style={styles.section}>
        <Text style={styles.boxheader1}>Data Sekolah Asal</Text>
        <SubField sub="Asal Sekolah" value={props.data.data.sekolahasal} />
        <SubField sub="Status Sekolah" value={props.data.data.statussekolah} />
        <SubField sub="Alamat Sekolah" value={props.data.data.alamatSekolah} />
        <SubField sub="Tahun Lulus" value={props.data.data.tahunlulus} />
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.page}>
        <Image style={styles.image} src={HeaderBukti} />
      </View>

      {/* Data Ibu Kandung */}
      <View style={styles.section} break>
        <Text style={styles.boxheader1}>Data Ibu Kandung</Text>
        <SubField sub="Nama Ibu" value={props.data.data.namaIbu} />
        <SubField
          sub="Pendidikan Terakhir"
          value={props.data.data.pendidikanIbu}
        />
        <SubField sub="Pekerjaan" value={props.data.data.pekerjaanIbu} />
        <SubField sub="Agama" value={props.data.data.agamaIbu} />
        <SubField
          sub="Penghasilan/Bulan"
          value={props.data.data.penghasilanIbu}
        />
        <SubField sub="No.HP Ibu" value={props.data.data.nohapeIbu} />
      </View>

      {/* Data Ayah Kandung */}
      <View style={styles.section}>
        <Text style={styles.boxheader1}>Data Ayah Kandung</Text>
        <SubField sub="Nama Ayah" value={props.data.data.namaAyah} />
        <SubField
          sub="Pendidikan Terakhir"
          value={props.data.data.pendidikanAyah}
        />
        <SubField sub="Pekerjaan" value={props.data.data.pekerjaanAyah} />
        <SubField sub="Agama" value={props.data.data.agamaAyah} />
        <SubField
          sub="Penghasilan/Bulan"
          value={props.data.data.penghasilanAyah}
        />
        <SubField sub="No.HP Ayah" value={props.data.data.nohapeAyah} />
      </View>

      {/* Data Wali */}
      <View style={styles.section}>
        <Text style={styles.boxheader1}>Data Wali Siswa</Text>
        <SubField sub="Nama Wali" value={props.data.data.namaWali} />
        <SubField
          sub="Pendidikan Terakhir"
          value={props.data.data.pendidikanWali}
        />
        <SubField sub="Pekerjaan" value={props.data.data.pekerjaanWali} />
        <SubField
          sub="Penghasilan/Bulan"
          value={props.data.data.penghasilanWali}
        />
        <SubField sub="No.HP Wali" value={props.data.data.nohapeWali} />
      </View>
    </Page>
  </Document>
);
class Cetak extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const TglRegistrasi = moment(this.props.dataC.createAt).format(
      "dddd, MMMM Do YYYY,HH:mm:ss"
    );
    console.log(process.env.PUBLIC_UR);
    return (
      <Aux>
        {this.props.dataC && (
          <div>
            <Row className="mb-4">
              <Col sm={4} md={6} xl={6}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Langkah Pertama</Card.Title>
                    <Card.Text>
                      Download berkas pertama Bukti Cetak PPDB Online pada
                      tombol di bawah
                    </Card.Text>
                    <PDFDownloadLink
                      document={
                        <Formulir
                          data={this.props.dataC}
                          WaktuRegis={TglRegistrasi}
                        />
                      }
                      fileName={`${this.props.dataC.kodePendaftaran}-${this.props.dataC.namasiswa}.pdf`}
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? (
                          "Loading document..."
                        ) : (
                          <Button variant="primary">
                            Bukti Cetak PPDB Online
                          </Button>
                        )
                      }
                    </PDFDownloadLink>
                    <div>
                      <small>
                        Gunakan{" "}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=id"
                        >
                          Peramban Chrome
                        </a>{" "}
                        jika download gagal
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4} md={6} xl={6}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Langkah Kedua</Card.Title>
                    <Card.Text>
                      Download berkas kedua yang berisi: Form Daftar Ulang,
                      Persyaratan Lampiran Dokumen dan Fakta Integritas pada
                      tombol di bawah
                    </Card.Text>
                    <Button
                      variant="primary"
                      download="FormDaftarUlang.pdf"
                      target="_blank"
                      href={
                        process.env.PUBLIC_URL + "../assets/FormDaftarUlang.pdf"
                      }
                    >
                      Form Daftar Ulang dll
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={8} xl={10}>
                <ResponsiveEmbed aspectRatio="1by1">
                  <PDFViewer className="embed-responsive-item">
                    <Formulir
                      data={this.props.dataC}
                      WaktuRegis={TglRegistrasi}
                    />
                  </PDFViewer>
                </ResponsiveEmbed>
              </Col>
            </Row>
          </div>
        )}
      </Aux>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    margin: 0,
    padding: 0,
  },
  section: {
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "40px",
    paddingLeft: "25px",
    paddingBottom: "10px",
    // backgroundColor: 'yellow',
  },
  section1: {
    // padding: 2,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderBottom: "1pt solid darkgrey",
  },
  section21: {
    width: "140px",
    height: "21px",
    backgroundColor: "#F2F2F2",
  },
  section22: {
    marginLeft: 10,
    height: "21px",
    backgroundColor: "#FFFFFF",
  },
  boxtitle2: {
    fontSize: 8,
    textAlign: "left",
    marginLeft: 10,
    color: "#202020",
    paddingTop: "5px",
    textTransform: "uppercase",
  },
  boxcontent2: {
    fontSize: 10,
    textAlign: "left",
    color: "#202020",
    paddingTop: "4px",
    borderBottom: "1px solid #BDBDBD",
  },
  boxjudul: {
    fontSize: 14,
    textAlign: "center",
    color: "#202020",
    backgroundColor: "#FFFFFF",
    fontWeight: "bold",
    paddingTop: "15px",
    paddingBottom: "15px",
    borderBottom: "1px solid #BDBDBD",
    textTransform: "uppercase",
  },
  boxsubjudul: {
    fontSize: 11,
    textAlign: "left",
    color: "#202020",
    backgroundColor: "#FFFFFF",
    paddingTop: "5px",
    borderBottom: "1px solid #BDBDBD",
  },
  boxheader1: {
    fontSize: 9,
    textAlign: "left",
    color: "#202020",
    backgroundColor: "#FFFFFF",
    paddingTop: "5px",
    borderBottom: "1px solid #BDBDBD",
    textTransform: "uppercase",
  },
});

export default Cetak;
