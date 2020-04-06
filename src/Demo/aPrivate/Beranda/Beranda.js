import React from 'react';
import {Row, Col, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";

import Card from "../../../App/components/MainCard";

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

class Beranda extends React.Component {
    
    render() {
        const user = "Anis Baswedan";        

        let bContent = (            
            <Aux>
                <Col md={12} xl={12}>
                    <Card title={"Selamat datang " + user + " calon siswa SMK Muhammadiyah Sampit" }>
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
}

export default Beranda;