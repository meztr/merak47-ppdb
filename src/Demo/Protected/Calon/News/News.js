import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../../../hoc/_Aux";
import Card from "../../../../App/components/MainCard";

class News extends Component {
    

    render() {
        let contentNews = (
            <p>Belum ada pengumuman</p>
        );
        
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Update info' isOption>
                           {contentNews}
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default News;