import React, {Component, useState, useMemo, useEffect} from 'react';
import { Container, Row, Col, Button, Modal, Image, Card, ListGroup, Tab, Nav } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';
import Navigation from '../layout/ScratchLayout/Navigation';
import Aux from "../hoc/_Aux";
import * as actionTypes from "../../store/actions/adminLayoutActions";
import '../layout/ScratchLayout/app.scss';
import BlueCard from '../../App/components/BlueCard';

import Moment from 'react-moment';
import styled from 'styled-components';
import MLoader from '../layout/Loader/Spinner';
import firebase from '../../services/firebase';
import TableNews from '../ppdb/Component/TableNews';
import './Protected/Panitia/Progress/Table.css';

const Styles = styled.div`
  
  .pagination {
    padding: 0.5rem;
    display: inherit;
  }
`;

function TableNewsHeader() {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    // const [showModal, setShowModal] = useState(false);
    const [currentData, setCurrentData] = useState([]);
  
    const columns = useMemo(
      () => [
        {
            Header: '#',
            accessor: 'ranking',
            Cell: row => {
                return <div>{row.index}</div>;
            }
        },
        {
            Header: 'NISN',
            accessor: 'nisn'
        },
        {
            Header: 'NAMA',
            accessor: 'namasiswa'
        },
        {
            Header: 'ASAL SEKOLAH',
            accessor: 'asalsekolah'
        },
        {
            Header: 'PILIHAN JURUSAN',
            accessor: 'jurusan'
        }, 
        {
            Header: 'JALUR',
            accessor: 'jalurpendaftaran'
        },   
        {
            Header: 'KETERANGAN',
            Cell: 'LULUS'
        }
    ],
    []
    );

    // const handleButtonClick = (e, row) => {
    // //   setShowModal(true);
    //   setCurrentData(row.original);
    // }; 
  
    useEffect(() => {
      (async () => {
        // try {
        //   firebase
        //   .database()
        //   .ref( 'ppdb2020/calonsiswa' )
        //   .on('value', snapshot => {
        //     setData(Object.values(snapshot.val()));
        //     setError(null);
        //     setLoading(false);
        //   });
        // } catch (error) {
        //   setError('Progress Informasi Fetch failed');
        //   setLoading(false);
        // }
        firebase
          .database()
          .ref( 'ppdb2020/gelombang1' )
          .on('value', snapshot => {
            setData(Object.values(snapshot.val()));
            setLoading(false);
          });
      })();
  
    }, []);
  
    return (    
      <Aux>      
        <Row>        
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Tabel Kelulusan PPDB Gelombang I</Card.Title>              
              </Card.Header>
              <Card.Body>
                {
                  loading ? (
                    <Col>
                      <MLoader />
                    </Col>
                  )
                    : (
                      <Styles>
                        <TableNews columns={columns} data={data} />
                      </Styles>
                    )
                }
  
                {/* { showModal && 
                  <DetilModal 
                    data = {currentData}
                    show={showModal}
                    onHide={() => setShowModal(false)}
                  /> } */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>    
    );
}


class Pengumuman extends Component {
    state = {
        showHide: false
    }

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentWillMount() {
        if (this.props.adminReducer.windowWidth > 992 && this.props.adminReducer.windowWidth <= 1024 && this.props.adminReducer.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.adminReducer.windowWidth < 992 && this.props.adminReducer.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    handleModal() {
        this.setState({ showHide: !this.state.showHide })
    }
  render() {
    document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
    document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
    document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
    document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

    return (
    //Page Content
      <Aux>
        <Fullscreen enabled={this.props.adminReducer.isFullScreen}>
            <Navigation SubMode={true}/>
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">                                
                        <div className="col-lg-10">
                            <h4 className="text-uppercase text-white font-weight-bold">Pengumuman Kelulusan Gelombang I</h4>
                            <hr className="divider my-4" />
                            <h6 className="text-white font-weight-normal text-center">Ketentuan PSBB Covid19 Saat Daftar Ulang/Pengembalian Berkas</h6>
                            <Container fluid>
                                <div className="align-self-start">
                                    <ListGroup as="ul" className="text-left">
                                        <ListGroup.Item as="li" variant="secondary">1. Wajib menggunakan masker</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="secondary">2. Wajib cuci tangan sebelum memasuki antrian dan ruangan</ListGroup.Item>
                                        <ListGroup.Item as="li" variant="secondary">3. Jaga Jarak ( hindari berkerumun )</ListGroup.Item>
                                    </ListGroup>                                
                                </div>
                                <hr className="divider my-4" />
                                <div className="col-lg-12 align-self-end">
                                    
                                        <Row className="justify-content-md-center">
                                            <Col sm='auto'>
                                                <BlueCard title='JADWAL DAFTAR ULANG'>
                                                </BlueCard>
                                            </Col>
                                            <Col sm='auto'>
                                                <BlueCard title='BERKAS DAFTAR ULANG'>
                                                </BlueCard>
                                            </Col>
                                            <Col sm='auto'>
                                                <BlueCard title='RINCIAN ADMINISTRASI'>
                                                </BlueCard>
                                            </Col>
                                        </Row>
                                </div>
                            </Container> 
                            {/* <Tab.Container id="uncontrolled-tab-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                                    <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <h1>first</h1>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h1>second</h1>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container> */}
                        </div>
                    </div>
                </div>
            </header>
          
          <TableNewsHeader />      

        </Fullscreen>
      </Aux>
    );
  }
}

// export default Pengumuman;
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(Pengumuman));