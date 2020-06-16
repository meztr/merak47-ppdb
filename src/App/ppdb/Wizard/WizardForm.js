import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WizardForm0Ketentuan from './WizardForm0Ketentuan'
import WizardForm1DataSiswa from './WizardForm1DataSiswa'
import WizardForm2DataWali from './WizardForm2DataWali'
import WizardForm3DataSekolah from './WizardForm3DataSekolah'

import { Container, Row, Col } from 'react-bootstrap';
import '../../../assets/scss/style.scss';
import Aux from '../../hoc/_Aux';
// import Loader from "../../layout/Loader"
import styled from 'styled-components';

const LoginBackground = styled.div`
  & {
    width: 30%;
    height: 10%;
    padding: 0.5em;
    background-color: #f8d05d;
    margin: 0 auto;
    position: auto;
  }
  &:after {
    border-right: solid 20px transparent;
    border-left: solid 20px transparent;
    border-top: solid 20px #f8d05d;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    left: 50%;
    height: 0;
    width: 0;
  }
`;

const Stepper = styled.ul`
  & {
    width: 80%;
    height: 10%;
    padding: 0.5em;
    bacgkround-color: #f8d05d;
    margin: 0 auto;
    position: auto;
  }
  &:after {
    border-right: solid 20px transparent;
    border-left: solid 20px transparent;
    border-top: solid 20px #f8d05d;
    transform: translateX(-50%);
    position: absolute;
    z-index: -1;
    content: "";
    top: 100%;
    left: 50%;
    height: 0;
    width: 0;
  }
`;


const PageStepIndicator = (props) => {
  return (
    <div className="sticky-top">
      <Stepper>
        Step {props.page}
      </Stepper>
    </div>
    
  )
}

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
              <h3 className="text-center font-weight-bold pt-4 pb-5 mb-2">Form Registrasi Calon Siswa</h3>
              {/* <PageStepIndicator page={page} /> */}
              {/* <LoginBackground className="sticky-top" /> */}
              {/* <div>
                {page === 1 && <h3>1-Ketentuan</h3>}
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
              </div>  */}
              <div>        
                {page === 1 &&  <WizardForm0Ketentuan onSubmit={this.nextPage} />} 
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

export default WizardForm;
