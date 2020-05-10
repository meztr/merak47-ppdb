import React from "react";
import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Logina from "./Logina";
import Loader from "./Loader";

const Wakasis = ({ auth }) => {
  // let history = useHistory();
  return (
    <div>
      {!auth.isLoaded ? <Loader /> : !auth.isEmpty ? <Redirect from="/" to="/user/beranda"/> : <Logina />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Wakasis);
