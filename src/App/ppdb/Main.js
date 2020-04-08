import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from './Home';
import Login from "./Login";
import Loader from "./Loader";

const Main = ({ auth }) => {
  return (
    <div>
      {/* {!auth.isLoaded ? <Loader /> : !auth.isEmpty ? <Redirect to={"/user/beranda"}/> : <Login />} */}
      {!auth.isLoaded ? <Loader /> : !auth.isEmpty ? <Home /> : <Login />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Main);
