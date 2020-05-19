/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Aux from '../../../hoc/_Aux';
import CardSiswa from '../../../../App/components/MainCard';
import DataSiswa from './DataSiswa';
import DataOrtuKandung from './DataOrtuKandung';
import DataSekolah from './DataSekolah';
import DataWali from './DataWali';

function CalonSiswa(props) {
  // const [namaSiswa, setNamaSiswa] = useState("default");
  
  // const registerData = {
  //   'setuju': props.datas.setuju,
  //   'namasiswa': props.datas.namasiswa,
  //   'nisn': props.datas.nisn,
  //   'nik': props.datas.nik,
  //   'jeniskelamin': props.datas.jeniskelamin,
  //   'tempatlahirsiswa': props.datas.tempatlahirsiswa,
  //   'tgllahirsiswa': props.datas.tgllahirsiswa,
  //   'blnlahirsiswa': props.datas.blnlahirsiswa,
  //   'tahunlahirsiswa': props.datas.tahunlahirsiswa,
  //   'agamaSiswa': props.datas.agamaSiswa,
  //   'kewarganegaraan': props.datas.kewarganegaraan,
  //   'alamatsiswa': props.datas.alamatsiswa,
  //   'tinggalbersama': props.datas.tinggalbersama,
  //   'anakkebrp': props.datas.anakkebrp,
  //   'jmlsaudara': props.datas.jmlsaudara,
  //   'statusdlmkeluarga': props.datas.statusdlmkeluarga,
  //   'nohapesiswa': props.datas.nohapesiswa,
  //   'pilihan1': props.datas.pilihan1,
  //   'pilihan2': props.datas.pilihan2,
  //   'namaAyah': props.datas.namaAyah,
  //   'pendidikanAyah': props.datas.pendidikanAyah,
  //   'pekerjaanAyah': props.datas.pekerjaanAyah,
  //   'agamaAyah': props.datas.agamaAyah,
  //   'penghasilanAyah': props.datas.penghasilanAyah,
  //   'nohapeAyah': props.datas.nohapeAyah,
  //   'namaIbu': props.datas.namaIbu,
  //   'pendidikanIbu': props.datas.pendidikanIbu,
  //   'pekerjaanIbu': props.datas.pekerjaanIbu,
  //   'agamaIbu': props.datas.agamaIbu,
  //   'penghasilanIbu': props.datas.penghasilanIbu,
  //   'nohapeIbu': props.datas.nohapeIbu,
  //   'namaWali': props.datas.namaWali,
  //   'pendidikanWali': props.datas.pendidikanWali,
  //   'pekerjaanWali': props.datas.pekerjaanWali,
  //   'penghasilanWali': props.datas.penghasilanWali,
  //   'nohapeWali': props.datas.nohapeWali,
  //   'sekolahasal': props.datas.sekolahasal,
  //   'statussekolah': props.datas.statussekolah,
  //   'alamatSekolah': props.datas.alamatSekolah,
  //   'tahunlulus': props.datas.tahunlulus
  // };

  // const siswaData = {
  //   'setuju': registerData.setuju,
  //   'Nama Lengkap': registerData.namasiswa,
  //   'NISN': registerData.nisn,
  //   'NIK': registerData.nik,
  //   'Jenis Kelamin': registerData.jeniskelamin,
  //   'Tempat Lahir': registerData.tempatlahirsiswa,
  //   'Tanggal Lahir': registerData.tgllahirsiswa,
  //   'Bulan Lahir': registerData.blnlahirsiswa,
  //   'Tahun Lahir': registerData.tahunlahirsiswa,
  //   'Agama': registerData.agamaSiswa,
  //   'Kewarganegaraan': registerData.kewarganegaraan,
  //   'Alamat': registerData.alamatsiswa,
  //   'Tinggal Bersama': registerData.tinggalbersama,
  //   'Anak ke': registerData.anakkebrp,
  //   'Jumlah Saudara': registerData.jmlsaudara,
  //   'Status Keluarga': registerData.statusdlmkeluarga,
  //   'No HP': registerData.nohapesiswa,
  //   'Pilihan Pertama': registerData.pilihan1,
  //   'Pilihan Kedua': registerData.pilihan2    
  // };

  // const ayahIbuData = {    
  //   'namaAyah': registerData.namaAyah,
  //   'pendidikanAyah': registerData.pendidikanAyah,
  //   'pekerjaanAyah': registerData.pekerjaanAyah,
  //   'agamaAyah': registerData.agamaAyah,
  //   'penghasilanAyah': registerData.penghasilanAyah,
  //   'nohapeAyah': registerData.nohapeAyah,
  //   'namaIbu': registerData.namaIbu,
  //   'pendidikanIbu': registerData.pendidikanIbu,
  //   'pekerjaanIbu': registerData.pekerjaanIbu,
  //   'agamaIbu': registerData.agamaIbu,
  //   'penghasilanIbu': registerData.penghasilanIbu,
  //   'nohapeIbu': registerData.nohapeIbu,
  //   'namaWali': registerData.namaWali,
  //   'pendidikanWali': registerData.pendidikanWali,
  //   'pekerjaanWali': registerData.pekerjaanWali,
  //   'penghasilanWali': registerData.penghasilanWali,
  //   'nohapeWali': registerData.nohapeWali,
  //   'sekolahasal': registerData.sekolahasal,
  //   'statussekolah': registerData.statussekolah,
  //   'alamatSekolah': registerData.alamatSekolah,
  //   'tahunlulus': registerData.tahunlulus
  // };

  // const waliData = {    
  //   'namaWali': registerData.namaWali,
  //   'pendidikanWali': registerData.pendidikanWali,
  //   'pekerjaanWali': registerData.pekerjaanWali,
  //   'penghasilanWali': registerData.penghasilanWali,
  //   'nohapeWali': registerData.nohapeWali
  // };

  // const sekolahData = {    
  //   'Asal Sekolah' : registerData.sekolahasal,
  //   'Status Sekolah': registerData.statussekolah,
  //   'Alamat Sekolah': registerData.alamatSekolah,
  //   'Tahun Lulus': registerData.tahunlulus
  // };

  return (
    <Aux>
      <Col md={12} xl={12}>
        <CardSiswa 
          title= {`${props.namasiswa}`.toUpperCase()}
          isOption={true}
          collapseCard={false}
        >          
          <DataSiswa title="Data Siswa" {...props}/>
          {/* <DataOrtuKandung title="Data Ibu/Ayah Kandung" data={ayahIbuData}/>
          <DataWali title="Data Wali" data={waliData}/>
          <DataSekolah title="Data Sekolah" data={sekolahData}/> */}
        </CardSiswa>
      </Col>
    </Aux>
  );
}

export default CalonSiswa;


// const staticValues = {
//   "setuju": true,
//   "namasiswa": "Jada",
//   "nisn": "7890",
//   "nik": "7890",
//   "jeniskelamin": "laki-laki",
//   "tempatlahirsiswa": "hjkl",
//   "tgllahirsiswa": "0",
//   "blnlahirsiswa": "Februari",
//   "tahunlahirsiswa": "2013",
//   "agamaSiswa": "Islam",
//   "kewarganegaraan": "Indonesia",
//   "alamatsiswa": "fghj",
//   "tinggalbersama": "Bersama orang tua",
//   "anakkebrp": "0",
//   "jmlsaudara": "1",
//   "statusdlmkeluarga": "Anak Kandung",
//   "nohapesiswa": "0874562453",
//   "pilihan1": "TKJ",
//   "pilihan2": "PBKS",
//   "namaAyah": "GFD",
//   "pendidikanAyah": "S1",
//   "pekerjaanAyah": "Wiraswasta",
//   "agamaAyah": "Islam",
//   "penghasilanAyah": "3jt-5jt",
//   "nohapeAyah": "087564433333",
//   "namaIbu": "JUGFH",
//   "pendidikanIbu": "DIPLOMA",
//   "pekerjaanIbu": "PNS",
//   "agamaIbu": "Islam",
//   "penghasilanIbu": "1jt-3jt",
//   "nohapeIbu": "08745345353",
//   "namaWali": "HUHFG",
//   "pendidikanWali": "S1",
//   "pekerjaanWali": "Wiraswasta",
//   "penghasilanWali": "3jt-5jt",
//   "nohapeWali": "08745634535",
//   "sekolahasal": "SMPN 99 JASDA",
//   "statussekolah": "Negeri",
//   "alamatSekolah": "JOJA",
//   "tahunlulus": "2020"
// }