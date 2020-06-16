import React, { useMemo, useState, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import {connect} from 'react-redux';
import { isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';
import Aux from '../../../../hoc/_Aux';
import Moment from 'react-moment';
// import styled from 'styled-components';
import TableCalon from '../../../Component/TableCalon';
import './Table.css';

function Progress({ firebase }) {
  const columns = useMemo(
    () => [      
      {
        Header: 'Calon Siswa',
        columns: [
          {
            Header: 'Kode',
            accessor: 'kodePendaftaran'
          },
          {
            Header: 'NISN',
            accessor: 'nisn'
          },
          {
            Header: 'Nama',
            accessor: 'namasiswa'
          },
          {
            Header: 'Jalur',
            accessor: 'jalurPendaftaran'            
          },
          {
            Header: 'Ibu Kandung',
            accessor: 'data.namaIbu'            
          },
          {
            Header: 'Sekolah',
            accessor: 'data.sekolahasal'            
          },
          {
            Header: 'Waktu Reg.',
            accessor: 'createAt',
            Cell: ({ cell: { value } }) => {              
              return <Moment format='DD MMMM YYYY, HH:mm:ss' utc local>{value}</Moment>;
            }
          }
        ]
      },
      {
        Header: 'Status',
        columns: [
          {
            Header: 'Verifikasi',
            accessor: 'verifikasi',
            Cell: ({ cell: { value } }) => {              
              return value ? <i className="fa fa-check" /> : 'Belum';
            }
          },
          {
            Header: 'Diterima',
            accessor: 'diterima',
            Cell: ({ cell: { value } }) => {              
              return value ? <i className="fa fa-check" /> : 'Belum';
            }
          }
        ]
      },
      {
        Header: '#',
        columns: [
          {
            Header: 'Kelola',
            Cell: ({ original }) => (
              <button value={original} >
                <i className="fa fa-edit" />
              </button>
            )
          }
        ]
      },
    ],
    []
  );

  function refreshPage() {
    window.location.reload(false);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      // const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      // await fetchAllAdminData();
      // setData(props.dataA);
      this.props.firebase.watchEvent('value', 'todos')
    })();
  }, []);

  return (    
    <Aux>      
      <Row>        
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Progress Informasi Calon Siswa</Card.Title>              
            </Card.Header>
            <Card.Body>
              {/* <TableCalonSiswas data={props.dataA} /> */}
              <button style={{marginBottom:'20px'}} onClick={refreshPage}>Refresh</button>
              <span className="d-block m-t-0">#1. Gunakan kotak filter pencarian berdasar <code>Kode Pendaftaran</code>, <code>Nama Calon Siswa</code>, <code>NISN</code> untuk pencarian cepat. </span>
              <span className="d-block m-t-0">#2. Klik Header Table untuk <code>Sortir</code> urutan table</span>
              <span className="d-block m-t-0">#3. Tekan tombol <code>Refresh</code> jika data kosong</span>              
              <TableCalon columns={columns} data={data} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>    
  );
}

Progress.propTypes = {
  calonsiswa: PropTypes.object
}

// export default Progress;
// export default connect(mapStateToProps, mapDispatchToProps) (Progress);
export default compose(
  withFirebase, // add props.firebase
  connect(
    (state) => ({
      calonsiswa: state.firebase.data.calonsiswa,
      // profile: state.firebase.profile // load profile
    })
  )
)(Progress);