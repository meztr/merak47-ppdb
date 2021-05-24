import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import windowSize from "react-window-size";

import Navigation from "./Navigation";
import { 
  Button, 
  Modal, 
  Image, 
  // Card, 
  // Col 
} from "react-bootstrap";
// import Breadcrumb from './Breadcumb';
// import Loader from "../Loader";
import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../../store/actions/adminLayoutActions";

// import bgImage from "../../../assets/bg-masthead.jpg"
// import styled from "styled-components";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
// import Loader from "../Loader";
// import RightBar from "./Agenda";

import "./app.scss";

// import { signout } from "../../../store/actions/auth";

// const FloatMenu = styled.div`
//     position: absolute;
//     left: 238px;
//     top: 168px;
//     height: 42px;
//     text-align: right;
//     /*transition: height 250ms ease-in-out;*/,
//     borderWidth:1,
//     borderColor:'rgba(0,0,0,0.2)',
//     alignItems:'center',
//     justifyContent:'center',
//     width:100,
//     height:100,
//     backgroundColor:'#fff',
//     borderRadius:100,
// `;

class ScratchLayout extends Component {
  state = {
    showHide: false,
  };

  fullScreenExitHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      this.props.onFullScreenExit();
    }
  };

  componentWillMount() {
    if (
      this.props.adminReducer.windowWidth > 992 &&
      this.props.adminReducer.windowWidth <= 1024 &&
      this.props.adminReducer.layout !== "horizontal"
    ) {
      this.props.onComponentWillMount();
    }
  }

  mobileOutClickHandler() {
    if (
      this.props.adminReducer.windowWidth < 992 &&
      this.props.adminReducer.collapseMenu
    ) {
      this.props.onComponentWillMount();
    }
  }

  handleModal() {
    this.setState({ showHide: !this.state.showHide });
  }

  render() {
    // Redirect if user auth

    // TODO: bug Check the render method of `windowSize(Connect(ComposedComponent))`.
    // if (!this.props.firebaseReducer.auth.isEmpty) {
    //     return <Redirect from="/" to="/main"/>
    // }

    /* full screen exit call */
    document.addEventListener("fullscreenchange", this.fullScreenExitHandler);
    document.addEventListener(
      "webkitfullscreenchange",
      this.fullScreenExitHandler
    );
    document.addEventListener(
      "mozfullscreenchange",
      this.fullScreenExitHandler
    );
    document.addEventListener("MSFullscreenChange", this.fullScreenExitHandler);

    return (
      <Aux>
        <Fullscreen enabled={this.props.adminReducer.isFullScreen}>
          <Navigation />

          {/* <div className="container pt-5"></div> */}
          <header className="masthead " style={{ paddingTop: "120px" }}>
            <div className="container h-100">
              <div className="row">
                <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="text-uppercase text-white">PPDB ONLINE</h1>
                    <h2 className="text-uppercase text-white">
                      SMK Muhammadiyah Sampit
                    </h2>
                    <h2 className="text-uppercase text-white">2021/2022</h2>
                    <hr className="divider my-4" />
                  </div>
                  <div className="container-fluid">
                    <div className="card-deck mb-3 text-center">
                      <div className="card mb-4 box-shadow bg-primary mx-3">
                        <a
                          className="btn btn-lg btn-block btn-primary"
                          href="/wizard"
                        >
                          <i className="fa fa-edit mr-2"></i>
                          Isi Formulir PPDB
                        </a>
                      </div>
                      <div className="card mb-4 box-shadow bg-info mx-3">
                        <a
                          className="btn btn-lg btn-block btn-info"
                          href="/main"
                        >
                          <i className="fa fa-edit mr-2"></i>
                          Cetak Formulir (Login)
                        </a>
                      </div>
                      <div className="card mb-4 box-shadow bg-success mx-3">
                        <a
                          className="btn btn-lg btn-block btn-success"
                          href="/pengumuman"
                        >
                          <i className="fa fa-print mr-2"></i>
                          Hasil Penerimaan
                        </a>
                      </div>
                    </div>
                    <hr className="divider my-4" />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center my-3">
                <div className="text-center w-50 text-light">
                  Jika kamu terkendala koneksi internet, bisa mendownload
                  formulir PPDB offline di sini jangan lupa di print, isi dan
                  kembalikan ke Panitia PPDB
                  <div className="my-4">
                    <a
                      className="btn btn-sm btn-light js-scroll-trigger"
                      style={{ margin: "10px" }}
                      href="#downloadoffline"
                      onClick={() => this.handleModal()}
                    >
                      <i></i>
                      Download Formulir Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Modal show={this.state.showHide}>
            <Modal.Header closeButton onClick={() => this.handleModal()}>
              <Modal.Title>Tahukah kamu?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Selain melakukan Download Formulir Offline, <br />
              <br />
              <Image
                style={{ paddingBottom: "15px" }}
                src={process.env.PUBLIC_URL + "../assets/ppdb_btn.png"}
              />
              <br /> Tombol <strong>Isi Formulir PPDB</strong> Online adalah cara yang lebih baik
              bagi Calon Siswa SMK Muhammadiyah Sampit untuk melakukan
              Pendaftaran secara real time
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => this.handleModal()}>
                Tutup
              </Button>
              <Button
                variant="info"
                download="FormulirOfflineSMKMSampit2021.pdf"
                target="_blank"
                href={
                  process.env.PUBLIC_URL +
                  "../assets/formulir-ppdb-2021-2022.pdf"
                }
              >
                Lanjutkan Download
              </Button>
            </Modal.Footer>
          </Modal>
          <Home />
          <Footer />
          {/* </div> */}

          {/* News Timeline */}
          {/* <div
              className="col-md-4 overflow-auto"
              style={{ paddingTop: "100px", height: "500px" }}
            >
              <h1>RightBar</h1>
            </div>
          </div> */}
        </Fullscreen>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFullScreenExit: () => dispatch({ type: actionTypes.FULL_SCREEN_EXIT }),
    onComponentWillMount: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(ScratchLayout));
