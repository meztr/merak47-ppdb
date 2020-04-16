import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
  firebaseReducer,
  authReducer,
  apiStatusReducer,
  form: reduxFormReducer // post claire
});
