import React from 'react';
import {List, ListGroup, ListGroupItem} from 'react-bootstrap'
import Aux from '../../../hoc/_Aux';
import CollapseItem from '../CollapseItem'

function DataWali(props) {
  return(
    <Aux>
      {/* <ListGroup>
        <ListGroupItem>item sajah</ListGroupItem>
        <ListGroupItem>item sajah</ListGroupItem>
        <ListGroupItem>item sajah</ListGroupItem>
        <ListGroupItem>item sajah</ListGroupItem>
        <ListGroupItem>item sajah</ListGroupItem>
        <ListGroupItem>item sajah</ListGroupItem>
      </ListGroup> */}
      <CollapseItem title={props.title} data={props.data} />
    </Aux>
  )
}

export default DataWali;