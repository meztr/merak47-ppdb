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
    errors.sex = 'wajib diisi'
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'wajib diisi'
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
  // -- no.reg.akta lahir (di tunda untuk registrasi ulang)
  // if (!values.noakta) {
  //   errors.noakta = ' wajib diisi'
  // }

  // -- agama
  if (!values.agamasiswa) {
    errors.agamasiswa = ' wajib diisi'
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
  if (!values.nama) {
    errors.nama = ' wajib diisi'
  }
  // -- Pendidikan terakhir
  if (!values.pendidikan) {
    errors.pendidikan = 'wajib diisi'
  }
  // -- Pekerjaan
  if (!values.pekerjaan) {
    errors.pekerjaan = 'wajib diisi'
  }
  // -- Agama
  if (!values.agama) {
    errors.agama = 'wajib diisi'
  }
  // -- Penghasilan/bulan
  if (!values.agama) {
    errors.agama = 'wajib diisi'
  }
  // -- No hape Ayah kandung
  if (!values.nohape) {
    errors.nohape = 'wajib diisi'
  }

  // - Data Ibu
  // -- Nama Lengkap Ibu Kandung
  // -- Pendidikan terakhir
  // -- Pekerjaan
  // -- Agama
  // -- Penghasilan/bulan
  // -- No hape Ibu kandung
  
  // - Data Wali
  // -- Nama Lengkap Wali
  // -- Pendidikan terakhir
  // -- Pekerjaan
  // -- Penghasilan/bulan
  // -- No hape Wali

  // Step 3 Data Sekolah Asal
  // -- Sekolah Asal
  // -- Status sekolah asal
  if (!values.sekolahasal) {
    errors.sekolahasal = 'wajib diisi'
  }
  // -- Alamat sekolah asal
  if (!values.alamatsekolah) {
    errors.sekolahasal = 'wajib diisi'
  }
  // -- Tahun lulus
  if (!values.tahunlulus) {
    errors.sekolahasal = 'wajib diisi'
  }
  return errors
}

export default validate
