import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  EMAIL_NOT_VERIFIED,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  RESET_SUCCESS,
  RESET_ERROR
} from "../actions/actionTypes";

const staticValues = {
  "setuju": true,
  "namasiswa": "Jada",
  "nisn": "7890",
  "nik": "7890",
  "jeniskelamin": "laki-laki",
  "tempatlahirsiswa": "hjkl",
  "tgllahirsiswa": "0",
  "blnlahirsiswa": "Februari",
  "tahunlahirsiswa": "2013",
  "agamaSiswa": "Islam",
  "kewarganegaraan": "Indonesia",
  "alamatsiswa": "fghj",
  "tinggalbersama": "Bersama orang tua",
  "anakkebrp": "0",
  "jmlsaudara": "1",
  "statusdlmkeluarga": "Anak Kandung",
  "nohapesiswa": "0874562453",
  "pilihan1": "TKJ",
  "pilihan2": "PBKS",
  "namaAyah": "GFD",
  "pendidikanAyah": "S1",
  "pekerjaanAyah": "Wiraswasta",
  "agamaAyah": "Islam",
  "penghasilanAyah": "3jt-5jt",
  "nohapeAyah": "087564433333",
  "namaIbu": "JUGFH",
  "pendidikanIbu": "DIPLOMA",
  "pekerjaanIbu": "PNS",
  "agamaIbu": "Islam",
  "penghasilanIbu": "1jt-3jt",
  "nohapeIbu": "08745345353",
  "namaWali": "HUHFG",
  "pendidikanWali": "S1",
  "pekerjaanWali": "Wiraswasta",
  "penghasilanWali": "3jt-5jt",
  "nohapeWali": "08745634535",
  "sekolahasal": "SMPN 99 JASDA",
  "statussekolah": "Negeri",
  "alamatSekolah": "JOJA",
  "tahunlulus": "2020"
}

const INITIAL_STATE = {
  authMsg: ""
};

export default function(state = INITIAL_STATE, action) {
  if (action.type === SIGNIN_SUCCESS || action.type === SIGNOUT_SUCCESS) {
    return { ...state, authMsg: "" };
  } else if (
    action.type === SIGNUP_SUCCESS ||
    action.type === SIGNUP_ERROR ||
    action.type === SIGNIN_ERROR ||
    action.type === EMAIL_NOT_VERIFIED ||
    action.type === SIGNOUT_ERROR ||
    action.type === RESET_SUCCESS ||
    action.type === RESET_ERROR
  ) {
    return { ...state, authMsg: action.payload };
  } else {
    return state;
  }
}
