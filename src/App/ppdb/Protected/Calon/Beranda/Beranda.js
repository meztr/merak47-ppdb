import React, { Component } from 'react';
import {Row, Col } from 'react-bootstrap';

import Aux from "../../../../hoc/_Aux";
import Card from "../../../../../App/components/MainCard";

import { connect } from "react-redux";
// import { signout } from "../../../../../store/actions/auth";
// import requireAuth from "../../../../hoc/requireAuth"

class Beranda extends Component {

    render() {

        let bContent = (            
            <Aux>
                <Col md={12} xl={12}>
                    <Card   title={"Selamat datang " + this.props.calonData.namasiswa + " calon siswa SMK Muhammadiyah Sampit" } 
                            isOption = {true}
                            collapseCard = {false}
                    >
                        <p>
                            Belum ada pengumuman
                        </p>
                    </Card>
                </Col>
                        
                <Col md={6} xl={4}>
                    <Card title='Biodata Pendaftaran'>
                        <p>
                            Lihat biodata
                        </p>
                    </Card>
                </Col>
                        
                <Col md={6} xl={4}>
                    <Card title='Cetak Bukti Pendaftaran'>
                        <p>
                            Cetak bukti Pendaftaran
                        </p>
                    </Card>
                </Col>
                        
                <Col md={6} xl={4}>
                    <Card title='Download Panduan'>
                        <p>
                            Download panduan di sini                        
                        </p>
                    </Card>
                </Col>
            </Aux>
        )
        return (
            <Aux>
                <Row>
                    {bContent}   
                </Row>
            </Aux>
        );
    }
};

  export default Beranda;