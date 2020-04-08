import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

class Login extends React.Component {
    render() {        
        return (
            <Aux>
                <Row>
                    <Col>
                        <h1>Login page</h1>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Login;