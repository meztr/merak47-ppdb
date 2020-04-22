import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardForm0Ketentuan from './WizardForm0Ketentuan'
import WizardForm1DataSiswa from './WizardForm1DataSiswa'
import WizardForm2DataWali from './WizardForm2DataWali'
import WizardForm3DataSekolah from './WizardForm3DataSekolah'

import { Container, Row, Col } from 'react-bootstrap';
import '../../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
// import Loader from "../../layout/Loader"

class WizardForm extends Component {
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
                    {page === 1 && <WizardForm0Ketentuan onSubmit={this.nextPage} />}
                    {page === 2 && (
                      <WizardForm1DataSiswa
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                      />
                    )}
                    {page === 3 && (
                      <WizardForm2DataWali
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                      />
                    )}
                    {page === 4 && (
                      <WizardForm3DataSekolah
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

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
