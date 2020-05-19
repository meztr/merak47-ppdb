import React from 'react';
import {Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Aux from '../../../../hoc/_Aux';

import Card from '../../../../../App/components/MainCard';
import BerandaContent from './BerandaContent';

class Beranda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datasiswa: this.props.dataC
    }
  }
  
  render() {
    // console.log('1-Beranda');
    // console.log(this.state.datasiswa)
    // Object.entries(this.state.datasiswa).forEach(([key, value]) => {
    //   console.log(key, value);
    // })

    return (
      <Aux>
        <Row>          
          <Col md={12} xl={12}>
            <BerandaContent data={this.state.datasiswa} />
          </Col>
        </Row>
      </Aux>      
    );
  }
};

export default Beranda;