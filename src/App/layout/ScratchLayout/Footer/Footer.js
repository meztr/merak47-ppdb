import React from 'react';
import {Row, Col } from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
// import DEMO from "../../../store/constant";

class Footer extends React.Component {
  render() {        
    let content = (
      <div>
        <footer className="bg-light py-5">
          <div className="container"><div className="small text-center text-muted">ICT SMK Muhammadiyah Sampit @2020</div></div>
        </footer>
      </div>
    );
    return (
      <Aux>
        {content}
      </Aux>
    );
  }
}

export default Footer;