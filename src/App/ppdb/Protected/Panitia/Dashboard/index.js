import React, { useState } from 'react';
import {Row, Col, Card, Form, Button, Image, InputGroup, FormControl, DropdownButton, Dropdown, Container} from 'react-bootstrap';
import Aux from "../../../../hoc/_Aux";

function Dashboard() {
  return (    
    <Aux>      
      <Row>        
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Dashboard</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* {
                Object.entries(props.data).forEach(([key, value]) => {
                  console.log("key: " + key + " --value:" + value)
                  if (Array.isArray(value)) {
                    console.log('horray')
                  }
                })
              } */}

                  {/* <p>qwe</p> */}

                  {/* {
                Object.keys(props.data).map((key, i) => (
                  <li key={i}>key: {i} | {key} | Values: {props.data[`{key}`]}</li>
                ))
              } */}
              
                  {/* {
                props.data.map((item, key) => (
                  <ListGroupItem key={key}><span>Nama Lengkap</span> {item.namasiswa} </ListGroupItem>
                ))
              } */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>    
  );
}

export default Dashboard;