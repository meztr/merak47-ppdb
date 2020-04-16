const validate = values => {
  const errors = {}
  
  if (!values.firstName) {
    errors.firstName = ' wajib diisi'
  }
  if (!values.lastName) {
    errors.lastName = ' wajib diisi'
  }
  if (!values.email) {
    errors.email = ' wajib diisi'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.sex) {
    errors.sex = ' wajib diisi'
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = ' wajib diisi'
  }

  // step 0 ketentuan
  // -- setuju
  if(!values.setuju) {
    errors.setuju = ' wajib diisi'
  }

  // step 1 data siswa
  // -- nama lengkap
  if (!values.namasiswa) {
    errors.namasiswa = ' wajib diisi'
  }
  // -- jenis kelamin
  if (!values.jeniskelamin) {
    errors.jeniskelamin = ' wajib diisi'
  }
  // -- nisn
  if (!values.nisn) {
    errors.nisn = ' wajib diisi'
  }
  // -- nik
  if (!values.nik) {
    errors.nik = ' wajib diisi'
  }
  // -- tempat lahir
  if (!values.tempatlahirsiswa) {
    errors.tempatlahirsiswa = ' wajib diisi'
  }
  // -- tgl lahir
  if (!values.tgllahirsiswa) {
    errors.tgllahirsiswa = ' wajib diisi'
  }

  // -- bln lahir
  if (!values.blnlahirsiswa) {
    errors.blnlahirsiswa = ' wajib diisi'
  }

  // -- thn lahir
  if (!values.tahunlahirsiswa) {
    errors.tahunlahirsiswa = ' wajib diisi'
  }

  // -- agama
  if (!values.agamaSiswa) {
    errors.agamaSiswa = ' wajib diisi'
  }
  // -- kewarganegaraan
  if (!values.kewarganegaraan) {
    errors.kewarganegaraan = ' wajib diisi'
  }
  // -- berkebutuhan  (tunda di registrasi ulang)
  // if (!values.nisn) {
  //   errors.nisn = ' wajib diisi'
  // }

  // -- alamat
  if (!values.alamatsiswa) {
    errors.alamatsiswa = ' wajib diisi'
  }
  // -- tinggal bersama (tunda gak ya)
  if (!values.tinggalbersama) {
    errors.tinggalbersama = ' wajib diisi'
  }
  // -- jumlah saudara
  if (!values.jmlsaudara) {
    errors.jmlsaudara = ' wajib diisi'
  }
  // -- anak ke (tunda gak ya)
  if (!values.anakkebrp) {
    errors.anakkebrp = ' wajib diisi'
  }
  // -- status 
  if (!values.statusdlmkeluarga) {
    errors.statusdlmkeluarga = ' wajib diisi'
  }
  // -- no hape siswa
  if (!values.nohapesiswa) {
    errors.nohapesiswa = ' wajib diisi'
  }
  // -- akun sosmed (tunda gak ya)
  if (!values.sosmed) {
    errors.sosmed = ' wajib diisi'
  }
  // -- pilihan kompetensi pertama
  if (!values.pilihan1) {
    errors.pilihan1 = ' wajib diisi'
  }
  // -- pilihan kompetensi kedua
  if (!values.pilihan2) {
    errors.pilihan2 = ' wajib diisi'
  }
  
  // Step 2 Data Ortu - Wali
  // - Data Ayah
  // -- Nama Lengkap Ayah Kandung
  if (!values.namaAyah) {
    errors.namaAyah = ' wajib diisi'
  }
  // -- Pendidikan terakhir
  if (!values.pendidikanAyah) {
    errors.pendidikanAyah = ' wajib diisi'
  }
  // -- Pekerjaan
  if (!values.pekerjaanAyah) {
    errors.pekerjaanAyah = ' wajib diisi'
  }
  // -- Agama
  if (!values.agamaAyah) {
    errors.agamaAyah = ' wajib diisi'
  }
  // -- Penghasilan/bulan
  if (!values.penghasilanAyah) {
    errors.penghasilanAyah = ' wajib diisi'
  }
  // -- No hape Ayah kandung
  if (!values.nohapeAyah) {
    errors.nohapeAyah = ' wajib diisi'
  }

  // - Data Ibu
  // -- Nama Lengkap Ibu Kandung
  if (!values.namaIbu) {
    errors.namaIbu = ' wajib diisi'
  }
  // -- Pendidikan terakhir
  if (!values.pendidikanIbu) {
    errors.pendidikanIbu = ' wajib diisi'
  }
  // -- Pekerjaan
  if (!values.pekerjaanIbu) {
    errors.pekerjaanIbu = ' wajib diisi'
  }
  // -- Agama
  if (!values.agamaIbu) {
    errors.agamaIbu = ' wajib diisi'
  }
  // -- Penghasilan/bulan
  if (!values.penghasilanIbu) {
    errors.penghasilanIbu = ' wajib diisi'
  }
  // -- No hape Ibu kandung
  if (!values.nohapeIbu) {
    errors.nohapeIbu = ' wajib diisi'
  }
  
  // - Data Wali
  // -- Nama Lengkap Wali
  if (!values.namaWali) {
    errors.namaWali = ' wajib diisi'
  }
  // -- Pendidikan terakhir
  if (!values.pendidikanWali) {
    errors.pendidikanWali = ' wajib diisi'
  }
  // -- Pekerjaan
  if (!values.pekerjaanWali) {
    errors.pekerjaanWali = ' wajib diisi'
  }
  // -- Penghasilan/bulan
  if (!values.penghasilanWali) {
    errors.penghasilanWali = ' wajib diisi'
  }
  // -- No hape Ibu kandung
  if (!values.nohapeWali) {
    errors.nohapeWali = ' wajib diisi'
  }

  // Step 3 Data Sekolah Asal
  // -- Sekolah Asal
  // -- Status sekolah asal
  if (!values.sekolahasal) {
    errors.sekolahasal = ' wajib diisi'
  }

  // -- Status sekolah asal
  if (!values.statussekolah) {
    errors.statussekolah = ' wajib diisi'
  }

  // -- Alamat sekolah asal
  if (!values.alamatsekolah) {
    errors.alamatsekolah = ' wajib diisi'
  }
  // -- Tahun lulus
  if (!values.tahunlulus) {
    errors.tahunlulus = ' wajib diisi'
  }
  return errors
}

export default validate
