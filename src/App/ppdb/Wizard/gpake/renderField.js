import React from 'react';
import { Form } from 'react-bootstrap';

const whiteStyle = {
  backgroundColor: 'white'
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Form.Group style={{color:'black'}}>    
    <Form.Label>{label}</Form.Label>    
    <Form.Control required
      {...input}
      type={type} 
      placeholder={label}
      isInvalid= {touched && error}
      style = {whiteStyle}
    />
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
)

export default renderField;
