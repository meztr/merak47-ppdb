import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "../../layout/ScratchLayout/Navigation";
import Wizard2Form0Ketentuan from "./Wizard2Form/Wizard2Form0Ketentuan";
import Wizard2Form1DataSiswa from "./Wizard2Form/Wizard2Form1DataSiswa";
import Wizard2Form2DataWali from "./Wizard2Form/Wizard2Form2DataWali";
import Wizard2Form3DataSekolah from "./Wizard2Form/Wizard2Form3DataSekolah";

import "../../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
// import Loader from "../../layout/Loader"
import styled from "styled-components";
import "../../layout/ScratchLayout/app.scss";

const MSContainer = styled.div`
  margin-top: 78px;
  background-color: #9c27b0;
  background-image: linear-gradient(120deg, lightgray, white);
`;

const MSForm = styled.div`
  text-align: center;
  position: relative;
  margin-top: 20px;

  #msform fieldset .form-card {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    padding: 20px 40px 30px 40px;
    box-sizing: border-box;
    width: 94%;
    margin: 0 3% 20px 3%;
    position: relative;
  }

  #msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    position: relative;
  }

  #msform fieldset:not(:first-of-type) {
    display: none;
  }

  #msform fieldset .form-card {
    text-align: left;
    color: #9e9e9e;
  }

  #msform input,
  #msform textarea {
    padding: 0px 8px 4px 8px;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2c3e50;
    font-size: 16px;
    letter-spacing: 1px;
  }

  #msform input:focus,
  #msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: none;
    font-weight: bold;
    border-bottom: 2px solid skyblue;
    outline-width: 0;
  }

  #msform .action-button {
    width: 100px;
    background: skyblue;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
  }

  #msform .action-button:hover,
  #msform .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px skyblue;
  }

  #msform .action-button-previous {
    width: 100px;
    background: #616161;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 0px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
  }

  #msform .action-button-previous:hover,
  #msform .action-button-previous:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #616161;
  }

  select.list-dt {
    border: none;
    outline: 0;
    border-bottom: 1px solid #ccc;
    padding: 2px 5px 3px 5px;
    margin: 2px;
  }

  select.list-dt:focus {
    border-bottom: 2px solid skyblue;
  }

  .card {
    z-index: 0;
    border: none;
    border-radius: 0.5rem;
    position: relative;
  }

  .fs-title {
    font-size: 25px;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: left;
  }
`;

const Progressbar = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
  color: #434161;

  .active {
    color: #000000;
  }

  li {
    list-style-type: none;
    font-size: 12px;
    width: 24%;
    float: left;
    position: relative;
  }

  #ketentuan:before {
    font-family: FontAwesome;
    content: "\f023";
  }

  #datapendaftaran:before {
    font-family: FontAwesome;
    content: "\f007";
  }

  #datasiswa:before {
    font-family: FontAwesome;
    content: "\f007";
  }

  #dataortuwali:before {
    font-family: FontAwesome;
    content: "\f09d";
  }

  #datasekolah:before {
    font-family: FontAwesome;
    content: "\f00c";
  }

  li:before {
    width: 50px;
    height: 50px;
    line-height: 45px;
    display: block;
    font-size: 18px;
    color: #ffffff;
    background: #acabbd;
    border-radius: 50%;
    margin: 0 auto 10px auto;
    padding: 2px;
  }

  li:after {
    content: "";
    width: 100%;
    height: 2px;
    background: #acabbd;
    position: absolute;
    left: 0;
    top: 25px;
    z-index: -1;
  }

  li.active:before,
  li.active:after {
    background: #272466;
  }
`;

const PageStepIndicator = (props) => {
  return (
    <div className="sticky-top bg-white px-2">
      <Progressbar>
        {/* <Stepper>Step {props.page}</Stepper> */}
        <ul id="progressbar">
          <li className={props.page >= 1 ? "active" : ""} id="ketentuan">
            <strong>Ketentuan</strong>
          </li>
          <li className={props.page >= 2 ? "active" : ""} id="datasiswa">
            <strong>Data Siswa</strong>
          </li>
          <li className={props.page >= 3 ? "active" : ""} id="dataortuwali">
            <strong>Data Orang Tua</strong>
          </li>
          <li className={props.page >= 4 ? "active" : ""} id="datasekolah">
            <strong>Data Sekolah</strong>
          </li>
        </ul>
      </Progressbar>
      <hr />
    </div>
  );
};

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
    console.log("page:" + this.state.page);
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <Aux>
        <Navigation isSubMode navExpanded={true} />
        <MSContainer>
          <div className="row justify-content-center mt-0">
            <div className="col-11 col-sm-9 col-md-7 col-lg-8 text-center px-3 mt-3 mb-2 bg-white">
              <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h4 className="text-center font-weight-bold pb-5 mb-2">
                  Formulir Online Tahun Pelajaran 2021/2022{" "}
                  {this.props.gelombang}
                </h4>
                <MSForm>
                  <PageStepIndicator page={page} />

                  <div className="text-left">
                    {page === 1 && (
                      <Wizard2Form0Ketentuan onSubmit={this.nextPage} />
                    )}
                    {page === 2 && (
                      <Wizard2Form1DataSiswa
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                      />
                    )}
                    {page === 3 && (
                      <Wizard2Form2DataWali
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                      />
                    )}
                    {page === 4 && (
                      <Wizard2Form3DataSekolah
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                      />
                    )}
                  </div>
                </MSForm>
              </div>
            </div>
          </div>
        </MSContainer>
      </Aux>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
