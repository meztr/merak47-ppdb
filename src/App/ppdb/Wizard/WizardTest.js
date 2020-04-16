import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardFormTest0 from './WizardFormTest0'
import WizardFormTest1 from './WizardFormTest1'

import { Button, Form, Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import Loader from "../../layout/Loader"

class WizardTest extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <Aux>
        <Container>
            <Row>
                <Col>
                  <h3 className="mt-4">Form Online PPDB SMK Muhammadiyah Sampit</h3> 
                  <div>        
                    {page === 1 && <WizardFormTest0 onSubmit={this.nextPage} />}
                    {page === 2 && (
                      <WizardFormTest1
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                      />
                    )}                    
                  </div>
                </Col>
            </Row>
        </Container>
    </Aux>    
    )
  }
}

WizardTest.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardTest
