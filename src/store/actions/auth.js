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
  REGISTER_CALONSISWA_SUCCESS,
  REGISTER_CALONSISWA_ERROR,
  ANON_SIGNIN_SUCCESS,
  ANON_SIGNIN_ERROR,
  FETCH_SUCCESS,
  FETCH_ERROR
} from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatus';
import firebase from '../../services/firebase';

const refCalonSiswa = process.env.REACT_APP_DB_VERSION + '/calonsiswa';

// Signing up with Firebase
export const signup = (email, password) => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(dataBeforeEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          user.sendEmailVerification();
        });
      })
      .then(dataAfterEmail => {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // Sign up successful
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                'Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox.'
            });
          } else {
            // Signup failed
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                'Something went wrong, we couldn\'t create your account. Please try again.'
            });
          }
        });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            'Something went wrong, we couldn\'t create your account. Please try again.'
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        'Something went wrong, we couldn\'t create your account. Please try again.'
    });
  }
};

export const fetchAllAdminData = () => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .database()
      .ref( refCalonSiswa )
      .on('value', snapshot => {
        dispatch({ 
          type: FETCH_SUCCESS,
          payload: Object.values(snapshot.val()) || {}
        });
        // console.log('fetchAllAdminData FETCH_SUCCESS ');
      });
  } catch (err) {
    // console.log('fetchAllAdminData FETCH_ERROR ', err);
    dispatch(apiCallError());
    dispatch({ type: FETCH_ERROR, payload: 'fetchAllAdminData error' });
  }
};

export const fetchCalonUserById = (id, nisn) => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .database()
      .ref( refCalonSiswa );

  } catch (err) {
    // console.log('fetchCalonUserById FETCH_ERROR');
    dispatch(apiCallError());
    dispatch({ type: FETCH_ERROR, payload: 'fetchCalonUserById error' });
  }
};

// Signing in with Firebase Claire version
export const signin = (email, password, callback) => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {

        // console.log("IF", data.user.emailVerified);
        dispatch({ 
          type: SIGNIN_SUCCESS,
          payload: 'Sign In succeed'
        });
        callback();
      })
      .catch(() => {
        // console.log('Catched Sigin Error')
        dispatch(apiCallError());
        dispatch({
          type: SIGNIN_ERROR,
          payload: 'Invalid login credentials'
        });
      })      
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: SIGNIN_ERROR, payload: 'Invalid login credentials' });
  }
};

// Multi Signing received email/password or kodePendaftaran/nisn
export const signinCalon = (kodePendaftaran, nisn, callback) => async dispatch => {
  // console.log ('SIGNIN CALON ' + kodePendaftaran + ' | ' + nisn);
  try {
    dispatch(beginApiCall());
    // after State Auth
    firebase
      .auth()
      .signInAnonymously()
      .then(() => firebase.database()
        .ref(`ppdb2020/calonsiswa/${kodePendaftaran}`)    //.ref(`ppdb2020/calonsiswa/${randomkode}`)
        .once('value', (snapshot) => {
          const val = snapshot.val();
          if (val == null) {
            const user = firebase.auth().currentUser;
            user.delete()
              .then(() => {
                // console.log('signinCalon deleted user');
                dispatch(apiCallError());
                dispatch({ type: ANON_SIGNIN_ERROR, payload: 'No. Pendaftaran tidak ditemukan' });
              })
              .catch(err => console.log(err))            
          } else {
            // console.log('kode ketemu ' + kodePendaftaran); //859245 | 876545552
            if (val.nisn === nisn) {
              // console.log('kode ketemu dan cocok' + kodePendaftaran + ' | ' + nisn);
              dispatch({
                type: ANON_SIGNIN_SUCCESS,
                payload: val
              });
              callback();
            } else {
              // console.log('kode ketemu dan tdk cocok' + kodePendaftaran + ' | ' + nisn);
              const user = firebase.auth().currentUser;
              user.delete()
                .then(() => {
                // console.log('signinCalon deleted user');
                  dispatch(apiCallError());
                  dispatch({ type: ANON_SIGNIN_ERROR, payload: 'No.Pendaftaran tidak ditemukan' });
                })
                .catch(err => console.log(err));              
            }
          }
        }
        )
      )
      .catch( err => console.log(err))
      
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: ANON_SIGNIN_ERROR, payload: 'Anon signin error' });
  }
};

// Register with Signing in Anonymously
export const registerSuccessWithValue = (values) => async dispatch => {
  // console.log('-----------REGISTER_CALONSISWA_SUCCESS');
  dispatch({ 
    type: REGISTER_CALONSISWA_SUCCESS,
    payload: values
  });
};

export const registerErrorWithValue = (err) => async dispatch => {
  // console.log('-----------REGISTER_CALONSISWA_ERROR');
  dispatch({ 
    type: REGISTER_CALONSISWA_ERROR,
    payload: err
  });
};

// Signing out with Firebase
export const signout = () => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signOut()
      .then(() => {        
        // clear localStorage
        localStorage.removeItem('ppdbcalondata');
        // console.log('localStorage ppdbcalondata cleared');
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNOUT_ERROR,
          payload: 'Error, we were not able to log you out. Please try again.'
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNOUT_ERROR,
      payload: 'Error, we were not able to log you out. Please try again.'
    });
  }
};

export const signinAnonim = (values, callback) => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth
      .signInAnonymously()
      .then(data => {        
        const kodePendaftaran = Math.floor(100000 + Math.random() * 900000);
        const namasiswa = values.namasiswa;
        const nisn = values.nisn;
        const verifikasi = false;
        const diterima = false;
        const lunasPembayaran = false;
        const calonid = data.user.uid;
        
        firebase.database()
          .ref(`ppdb2020/calonsiswa/${kodePendaftaran}`)
          .set({
            calonid,
            nisn,
            namasiswa,
            verifikasi,
            diterima,
            lunasPembayaran,
            'data': values
          });
        
        dispatch({ 
          type: REGISTER_CALONSISWA_SUCCESS,
          payload: values
        });

        callback();
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: REGISTER_CALONSISWA_ERROR,
          payload: 'auth/operation-not-allowed'
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: REGISTER_CALONSISWA_ERROR, payload: 'invalid registrasi anonim' });
  }
};

// New Register Calon Siswa
export const newRegisterCalonSiswa = data => async dispatch => {  
  // dispatch(beginApiCall());
  dispatch({
    type: RESET_SUCCESS,
    payload:
        'Check your inbox. We\'ve sent you a secured reset link by e-mail.'
  });    
};

// Reset password with Firebase
export const resetPassword = email => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        dispatch({
          type: RESET_SUCCESS,
          payload:
            'Check your inbox. We\'ve sent you a secured reset link by e-mail.'
        })
      )
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: RESET_ERROR,
          payload:
            'Oops, something went wrong we couldn\'t send you the e-mail. Try again and if the error persists, contact admin.'
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: RESET_ERROR, payload: err });
  }
};
