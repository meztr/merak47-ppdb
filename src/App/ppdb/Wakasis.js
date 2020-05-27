/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Redirect, withRouter } from "react-router-dom";
import { Redirect } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// import { compose } from "redux"
import { connect } from 'react-redux';
import Logina from './Logina';
import Loader from './Loader';
import '../../css/index.css';

const Wakasis = ({ auth, role }) => {

  function RedirectByRole(props) {
    switch(role) 
    {
    case 'calon': return <Redirect from="/" to="/user/beranda"/>;
    case 'admin': return <Redirect from="/" to="/user/panitia/dashboard"/>;
    default : return null;
    }
  }

  return (
    <div>
      {!auth.isLoaded ? <Loader /> : 
        !auth.isEmpty ? 
          <RedirectByRole role={role} /> : 
          <Logina />
      }
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth,
    role: state.authReducer.role
  };
}

export default connect(mapStateToProps)(Wakasis);
