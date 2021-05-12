import React from 'react';
// import React, { useState } from 'react';
import {Row, Col, Card } from 'react-bootstrap';
// import {Row, Col, Card, Form, Button, Image, InputGroup, FormControl, DropdownButton, Dropdown, Container} from 'react-bootstrap';
import Aux from "../../../../hoc/_Aux";

function AdminPage() {
  return (    
    <Aux>      
      <Row>        
          <Col>
              <Card>
                <Card.Header>
                    <Card.Title as="h5">Administrator Page</Card.Title>
                </Card.Header>
                <Card.Body>
                  {/* <Row>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="formBasicText">
                              <Form.Label>Nama Lengkap</Form.Label>
                              <Form.Control type="text" placeholder="contoh: Weldan Andreanur" />
                              <Form.Text className="text-muted">
                                  Informasi emailmu tidak akan kami share ke pihak lain
                              </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Bio singkat tentangmu</Form.Label>
                              <Form.Control as="textarea" rows="3" />
                            </Form.Group>             
                            <Button variant="primary">
                                Simpan
                            </Button>
                        </Form>                        
                    </Col>
                    <Col md="auto">
                        <hr/>
                        <Form.Group controlId="formBasicProfilPicture">                            
                            <Image src={Avatar2} roundedCircle />
                            <Form.Text className="text-muted">
                                Support file png, jpg
                            </Form.Text>                   
                        </Form.Group>
                        <Button variant="secondary">
                            Upload Photo
                        </Button>                        
                    </Col>
                  </Row> */}
                </Card.Body>
              </Card>
          </Col>
      </Row>
    </Aux>    
  );
}

export default AdminPage;