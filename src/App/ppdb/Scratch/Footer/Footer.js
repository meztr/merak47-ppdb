import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
// import DEMO from "../../../store/constant";

class Footer extends React.Component {
    render() {        
        let content = (
            <div>
                <footer className="bg-light py-5">
                <div className="container"><div className="small text-center text-muted">Merak47@2020</div></div>
                </footer>
            </div>
        );
        return (
            <Aux>
                <Row>
                    <Col>
                        {content}
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Footer;