import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Logina from "./Logina";
import Loader from "./Loader";

const Wakasis = ({ auth }) => {
  return (
    <div>
      {!auth.isLoaded ? <Loader /> : !auth.isEmpty ? <Redirect to={"/user/beranda"}/> : <Logina />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Wakasis);
