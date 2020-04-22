import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import adminReducer from "../reducer"
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({  
  firebaseReducer,
  authReducer,
  apiStatusReducer,
  adminReducer,
  form: reduxFormReducer // post claire
});
