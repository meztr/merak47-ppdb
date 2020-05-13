import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { signout } from "../../../store/actions/auth";
import requireAuth from "../../hoc/requireAuth";

const Logout = ({ signout }) => {
  return (
    <div className="page">
      <div>
        <span className="emoji" role="img" aria-label="House With Garden">
          🏡
        </span>
      </div>
      <p>Miss you already!</p>
      <h3>Apakah anda yakin?</h3>
      <button className="btn-switch" onClick={() => signout()}>
        Log out
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signout())
  };
}

export default compose( connect( mapStateToProps, mapDispatchToProps),  requireAuth) (Logout);
// export default compose( connect( mapStateToProps, mapDispatchToProps),  requireAuth) (windowSize(Logout));
