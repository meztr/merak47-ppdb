// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your app's Firebase configuration
const prodconfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

// const devconfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };

// Rules
// {
//     "rules": {
//       "ppdb2020" : {
//         "calonsiswa": {
//           ".read": "auth != null",
//           ".write": "auth != null"
//         }
//       }
//     }
//   }
// const firebaseConfig = process.env.NODE_ENV === 'production' ? prodconfig : devconfig;
//console.log('using: ' + process.env.NODE_ENV);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(prodconfig);
const storage = firebase.storage();

// Finally, export it to use it throughout your app
// export default firebase;
export { storage, firebase as default };
