import React, { useState } from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';
import Aux from '../../../../hoc/_Aux';

function Progress() {
  return (    
    <Aux>      
      <Row>        
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Progress Informasi Calon Siswa</Card.Title>
              <span className="d-block m-t-5">use props <code>hover</code> with <code>Table</code> component</span>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>    
  );
}

export default Progress;