import React from 'react';
import {List, ListGroup, ListGroupItem} from 'react-bootstrap';
import Aux from '../../../hoc/_Aux';
import CollapseItem from '../CollapseItem';

function DataSiswa(props) {  
  return(
    <Aux>
      <p>test</p>
      {/* <CollapseItem title={props.title}>
        <p>Nama Lengkap {props.datas.namasiswa}</p>
        <p>NISN {props.datas.nisn}</p>
        {props.datas.map((siswa, key) => (
          <p>{key}, {siswa.namasiswa}</p>
        ))}
      </CollapseItem> */}
    </Aux>
  )
}

export default DataSiswa;