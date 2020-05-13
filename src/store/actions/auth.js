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
  FETCH_SUCCESS,
  FETCH_ERROR
} from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatus";
import firebase from "../../services/firebase";

const refCalonSiswa = process.env.REACT_APP_DB_VERSION + "/calonsiswa";

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
                "Your account was successfully created! Now you need to verify your e-mail address, please go check your inbox."
            });
          } else {
            // Signup failed
            dispatch({
              type: SIGNUP_ERROR,
              payload:
                "Something went wrong, we couldn't create your account. Please try again."
            });
          }
        });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            "Something went wrong, we couldn't create your account. Please try again."
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        "Something went wrong, we couldn't create your account. Please try again."
    });
  }
};

export const fetchAllAdminData = () => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .database()
      .ref( refCalonSiswa )
      .on("value", snapshot => {
        dispatch({ 
          type: FETCH_SUCCESS,
          payload: snapshot.val() || {}
        });
        console.log("FETCH_SUCCESS ");
      });
  } catch (err) {
    console.log("FETCH_ERROR ", err)
    dispatch(apiCallError());
    dispatch({ type: FETCH_ERROR, payload: "Fetch authData error" });
  }
}

// Signing in with Firebase Claire version
export const signin = (email, password, callback) => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        if (data.user.emailVerified) {
          console.log("IF", data.user.emailVerified);
          // const allCalonData = [{ data100: "data sratus"}, { data200: "data duaratus"}]
          // firebase
          //   .child('calonsiswa')
          //   .on('value', snapshot => {
          //     allCalonData = snapshot.val();          
              
          // })

          dispatch({ 
            type: SIGNIN_SUCCESS
            // datas: allCalonData
          });
          callback();

          // // fetch authData from firebase for Admin/Panitia User
          // const authData = "";
          // const databaseRef = firebase.database().ref();
          // const authDataRef = databaseRef.child("calonsiswa");
          // // authDataRef.on("value", snapshot => {
          // //   data: snapshot.val()
          // // })
          // authDataRef.on("value", function(snapshot) {
          //   console.log("authDatas: " + snapshot.val());
          //   authData: snapshot.val();
          // }, function (errorObject) {
          //   console.log("The authDatas read failed: " + errorObject.code)
          // });

          // firebase
          //   .child('calonsiswa')
          //   .on('value', snapshot => {
          //     const allCalonData = snapshot.val();
          //     dispatch({ 
          //       type: SIGNIN_SUCCESS,
          //       datas: [{ data1: "data satu"}, { data2: "data dua"}]
          //     });
          //     callback();
          //   })
          // dispatch({ type: SIGNIN_SUCCESS });
          // callback();
         
        } else {
          console.log("ELSE", data.user.emailVerified);
          dispatch({
            type: EMAIL_NOT_VERIFIED,
            payload: "You haven't verified your e-mail address."
          });
        }
      })
      .catch((err) => {
        if (err) {
          dispatch(apiCallError());
          dispatch({
            type: SIGNIN_ERROR,
            payload: "Invalid login credentials"
          });
        }        
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: SIGNIN_ERROR, payload: "Invalid login credentials" });
  }
};

// Signing in Anonymously
export const registerWithValue = (values) => async dispatch => {
  dispatch({ 
    type: REGISTER_CALONSISWA_SUCCESS,
    payload: values
  });
}

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
                    "data": values
                })
        
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
          payload: "auth/operation-not-allowed"
      });
    });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: REGISTER_CALONSISWA_ERROR, payload: "invalid registrasi anonim" });
  }
}

// function registerCalonSiswaSuccess(payload) {
//   return { type: REGISTER_CALONSISWA_SUCCESS, payloadValues: payload}
// }

// export function registerCalonSiswa(values) {
//   return function(dispatch) {
//     return dispatch(registerCalonSiswaSuccess(values))
//   }
// }

// Signing out with Firebase
export const signout = () => async dispatch => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNOUT_ERROR,
          payload: "Error, we were not able to log you out. Please try again."
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNOUT_ERROR,
      payload: "Error, we were not able to log you out. Please try again."
    });
  }
};

// New Register Calon Siswa
export const newRegisterCalonSiswa = data => async dispatch => {  
    // dispatch(beginApiCall());
    dispatch({
      type: RESET_SUCCESS,
      payload:
        "Check your inbox. We've sent you a secured reset link by e-mail."
    })    
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
            "Check your inbox. We've sent you a secured reset link by e-mail."
        })
      )
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: RESET_ERROR,
          payload:
            "Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin."
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: RESET_ERROR, payload: err });
  }
};
