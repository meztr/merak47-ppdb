import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  EMAIL_NOT_VERIFIED,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  RESET_SUCCESS,
  RESET_ERROR,
  FETCH_SUCCESS,
  FETCH_ERROR,
  REGISTER_CALONSISWA_SUCCESS,
  REGISTER_CALONSISWA_ERROR
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
  authMsg: "",
  fetchMsg: "",
  ppdbNewRegister: {},
  calonData: {},
  authData: [],
  role: ''
};

export default function(state = INITIAL_STATE, action) {
  // if (action.type === SIGNIN_SUCCESS || action.type === SIGNOUT_SUCCESS) {
  //   return { ...state, authMsg: "" };
  // } else if (
  //   action.type === SIGNUP_SUCCESS ||
  //   action.type === SIGNUP_ERROR ||
  //   action.type === SIGNIN_ERROR ||
  //   action.type === EMAIL_NOT_VERIFIED ||
  //   action.type === SIGNOUT_ERROR ||
  //   action.type === RESET_SUCCESS ||
  //   action.type === RESET_ERROR
  // ) {
  //   return { ...state, authMsg: action.payload };
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case SIGNIN_SUCCESS:
      console.log("SIGNIN_SUCCESS ", action.payload);
      return {
        ...state,
        authMsg: action.payload,
        role: 'user'
        // authData: Object.values(action.datas),
        
    }
    case SIGNOUT_SUCCESS :
      console.log("SIGNIN_SIGNOUT_SUCCESS ", action.payload);
      return {
        ...state,
        authMsg: "",
        authData: [],
        role: ''
      }
  case SIGNUP_SUCCESS:
    console.log("SIGNUP_SUCCESS ", action.payload);
    return {
      ...state,
    }
  case SIGNUP_ERROR || SIGNIN_ERROR || EMAIL_NOT_VERIFIED || SIGNOUT_ERROR :
    console.log("ERROR ", action.payload);
    return {
      ...state,
      authMsg: action.payload
    }
  case RESET_SUCCESS || RESET_ERROR:
    console.log("RESET_SUCCESS||RESET_ERROR ", action.payload);
    return {
      ...state
    }
  case FETCH_SUCCESS:
    console.log("FETCH_SUCCESS", action.payload);
    return {
      ...state,
      authData: action.payload
    }
  case FETCH_ERROR:
    console.log("FETCH_ERROR", action.payload);
    return {
      ...state,
      fetchMsg: action.payload
    }
  case REGISTER_CALONSISWA_SUCCESS:
    console.log("REGISTER_CALONSISWA_SUCCESS", action.payload);
    return {
      ...state,
      calonData: action.payload,
      role: 'calon'
    }
  case REGISTER_CALONSISWA_ERROR:
    console.log("REGISTER_CALONSISWA_ERROR", action.payload);
    return {
      ...state,
      fetchMsg: action.payload
    }
  default:
    return state;
  }
}
