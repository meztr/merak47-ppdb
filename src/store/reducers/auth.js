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
  REGISTER_CALONSISWA_ERROR,
  ANON_SIGNIN_SUCCESS,
  ANON_SIGNIN_ERROR
} from '../actions/actionTypes';

// const staticValues = {
//   'setuju': true,
//   'namasiswa': 'Jada',
//   'nisn': '7890',
//   'nik': '7890',
//   'jeniskelamin': 'laki-laki',
//   'tempatlahirsiswa': 'hjkl',
//   'tgllahirsiswa': '0',
//   'blnlahirsiswa': 'Februari',
//   'tahunlahirsiswa': '2013',
//   'agamaSiswa': 'Islam',
//   'kewarganegaraan': 'Indonesia',
//   'alamatsiswa': 'fghj',
//   'tinggalbersama': 'Bersama orang tua',
//   'anakkebrp': '0',
//   'jmlsaudara': '1',
//   'statusdlmkeluarga': 'Anak Kandung',
//   'nohapesiswa': '0874562453',
//   'pilihan1': 'TKJ',
//   'pilihan2': 'PBKS',
//   'namaAyah': 'GFD',
//   'pendidikanAyah': 'S1',
//   'pekerjaanAyah': 'Wiraswasta',
//   'agamaAyah': 'Islam',
//   'penghasilanAyah': '3jt-5jt',
//   'nohapeAyah': '087564433333',
//   'namaIbu': 'JUGFH',
//   'pendidikanIbu': 'DIPLOMA',
//   'pekerjaanIbu': 'PNS',
//   'agamaIbu': 'Islam',
//   'penghasilanIbu': '1jt-3jt',
//   'nohapeIbu': '08745345353',
//   'namaWali': 'HUHFG',
//   'pendidikanWali': 'S1',
//   'pekerjaanWali': 'Wiraswasta',
//   'penghasilanWali': '3jt-5jt',
//   'nohapeWali': '08745634535',
//   'sekolahasal': 'SMPN 99 JASDA',
//   'statussekolah': 'Negeri',
//   'alamatSekolah': 'JOJA',
//   'tahunlulus': '2020'
// };

const INITIAL_STATE = {
  authMsg: '',
  fetchMsg: '',
  calonData: [],
  authData: [],
  role: '',
  nama: null,
  // authorizing: false,
  avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
  user_authorized: false,
  anon_authorized: false
};

export default function(state = INITIAL_STATE, action) { 
  switch (action.type) {
  case SIGNIN_SUCCESS:
    console.log('SIGNIN_SUCCESS ', action.payload);
    return {
      ...state,
      authMsg: action.payload,
      role: 'admin',
      user_authorized: true
    };
  case SIGNOUT_SUCCESS :
    console.log('SIGNIN_SIGNOUT_SUCCESS ', action.payload);
    return {
      ...state,
      authMsg: '',
      fetchMsg: '',
      calonData: [],
      authData: [],
      role: '',
      nama: null,
      // authorizing: false,
      avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
      user_authorized: false,
      anon_authorized: false
    };
  case SIGNUP_SUCCESS:
    console.log('SIGNUP_SUCCESS ', action.payload);
    return {
      ...state,
    };
  case SIGNUP_ERROR || EMAIL_NOT_VERIFIED || SIGNOUT_ERROR :
    console.log('ERROR ', action.payload);
    return {
      ...state,
      authMsg: action.payload
    };
  case SIGNIN_ERROR:
    console.log('SIGNIN ERROR ', action.payload);
    return {
      ...state,
      authMsg: action.payload
    };
  case RESET_SUCCESS || RESET_ERROR:
    console.log('RESET_SUCCESS||RESET_ERROR ', action.payload);
    return {
      ...state
    };
  case FETCH_SUCCESS:
    // console.log('FETCH_SUCCESS', action.payload);
    return {
      ...state,
      authData: action.payload
    };
  case FETCH_ERROR:
    console.log('FETCH_ERROR', action.payload);
    return {
      ...state,
      fetchMsg: action.payload
    };
  case REGISTER_CALONSISWA_SUCCESS:
    console.log('REGISTER_CALONSISWA_SUCCESS', action.payload);
    return {
      ...state,
      calonData: action.payload,
      anon_authorized: true,
      role: 'calon'
    };
  case REGISTER_CALONSISWA_ERROR:
    console.log('REGISTER_CALONSISWA_ERROR', action.payload);
    return {
      ...state,
      fetchMsg: action.payload
    };
  case ANON_SIGNIN_SUCCESS:
    console.log('ANON_SIGNIN_SUCCESS', action.payload);
    return { 
      // unsafe method.. should filtering this with safe anonim state
      ...state,
      anon_authorized: true,
      nama: action.payload.namasiswa,
      calonData: action.payload,
      role: 'calon'
    }
  case ANON_SIGNIN_ERROR:
    console.log('ANON_SIGNIN_ERROR ', action.payload);
    return {
      ...state,
      authMsg: action.payload,
      fetchMsg: '',
      calonData: [],
      authData: [],
      role: '',
      nama: null,
      // authorizing: false,
      avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
      user_authorized: false,
      anon_authorized: false
    };
  default:
    return state;
  }
}
