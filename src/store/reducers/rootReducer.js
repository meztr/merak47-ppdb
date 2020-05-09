import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import adminReducer from "./adminLayoutReducer";
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({  
  firebaseReducer,
  authReducer,
  apiStatusReducer,
  adminReducer,
  form: reduxFormReducer // post claire
});

// export function makeRootReducer(asyncReducers) {
//   return combineReducers({
//     firebaseReducer,
//     authReducer,
//     apiStatusReducer,
//     adminReducer,
//     form: reduxFormReducer, // post claire
//     ...asyncReducers
//   })
// }


