import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Fullscreen from "react-full-screen";
import windowSize from "react-window-size";

import Navigation from "./Navigation";
import { Button, Modal, Image, Card, Col } from "react-bootstrap";
// import Breadcrumb from './Breadcumb';
// import Loader from "../Loader";
import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../../store/actions/adminLayoutActions";

// import bgImage from "../../../assets/bg-masthead.jpg"
import styled from "styled-components";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Loader from "../Loader";

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

          {/* <!-- Masthead--> */}
          <header className="masthead">
            <div className="container h-100">
              <div className="row">
                <div className="row h-100 align-items-center justify-content-center text-center">
                  {/* <FloatMenu>
                                      <a className="btn btn-info btn-xl"                                         
                                          href="/pengumuman"
                                      >Pengumuman Kelulusan</a>                                    
                                  </FloatMenu>                                 */}

                  <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="text-uppercase text-white">PPDB ONLINE</h1>
                    <h2 className="text-uppercase text-white">
                      SMK Muhammadiyah Sampit
                    </h2>
                    <h2 className="text-uppercase text-white">2021/2022</h2>
                    <hr className="divider my-4" />
                  </div>
                  <div className="container-fluid">
                    <div className="row">
                      {/* <div className="col-sm">
                        <a
                          className="btn btn-primary btn-xl js-scroll-trigger"
                          style={{ margin: "10px" }}
                          href="/main"
                        >
                          Login Calon Siswa
                        </a>
                      </div>
                      <div className="col-sm">
                        <a
                          className="btn btn-primary btn-xl js-scroll-trigger"
                          style={{ margin: "10px" }}
                          href="/wizard"
                        >
                          Pendaftaran PPDB Online
                        </a>
                      </div>
                      <div className="col-sm">
                        <a
                          className="btn btn-light btn-xl js-scroll-trigger"
                          style={{ margin: "10px" }}
                          onClick={() => this.handleModal()}
                        >
                          Download Formulir Offline
                        </a>
                      </div> */}
                      {/* <div className="card" style={{width: "18rem"}}>
                          <img className="card-img-top" src="https://dummyimage.com/286x180" alt="Card image cap" />
                          <div className="card-body">
                              <h5 className="card-title">Login</h5>
                              <p className="card-text">Login calon siswa yang sudah melakukan pendaftaran</p>
                              <a href="#" class="btn btn-primary">Login</a>
                          </div>
                      </div>
                      <div className="card" style={{width: "18rem"}}>
                          <img className="card-img-top" src="https://dummyimage.com/286x180" alt="Card image cap" />
                          <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                      <div className="card" style={{width: "18rem"}}>
                          <img className="card-img-top" src="https://dummyimage.com/286x180" alt="Card image cap" />
                          <div className="card-body">
                              <h5 className="card-title">Card title</h5>
                              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                      </div> */}
                    </div>
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 box-shadow">
                          <a
                            className="btn btn-lg btn-block btn-primary"
                            href="/wizard"
                          >
                            Isi Formulir PPDB
                          </a>
                        </div>
                        <div className="card mb-4 box-shadow">
                          <a
                            className="btn btn-lg btn-block btn-outline"
                            href="/main"
                          >
                              Cetak Formulir (Login)
                          </a>
                        </div>
                        <div className="card mb-4 box-shadow">
                            <a
                              className="btn btn-lg btn-block btn-secondary"
                              href="/pengumuman"
                            >
                              Hasil Penerimaan
                            </a>
                        </div>
                      </div>
                      <div className="col-sm">
                        <a
                          className="btn btn-light btn-xl js-scroll-trigger"
                          style={{ margin: "10px" }}
                          onClick={() => this.handleModal()}
                        >
                          Download Formulir Offline
                        </a>
                      </div>
                  </div>
                  {/* <div className="col-lg-4 align-self-baseline">
                    <a className="btn btn-info btn-xl" href="/pengumuman">
                      Pengumuman Kelulusan
                    </a>
                  </div> */}
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
              <br /> Tombol Pendaftaran PPDB Online adalah cara yang lebih baik
              bagi Calon Siswa SMK Muhammadiyah Sampit untuk melakukan
              Pendaftaran secara real time
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => this.handleModal()}>
                Tutup
              </Button>
              <Button
                variant="info"
                download="FormulirOfflineSMKMSampit.pdf"
                target="_blank"
                href={
                  process.env.PUBLIC_URL +
                  "../assets/Formulir-Offline-smkmsampit.pdf"
                }
              >
                Lanjutkan Download
              </Button>
            </Modal.Footer>
          </Modal>

          <Home />
          <Footer />
        </Fullscreen>
      </Aux>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//         defaultPath: state.adminReducer.defaultPath,
//         isFullScreen: state.adminReducer.isFullScreen,
//         collapseMenu: state.adminReducer.collapseMenu,
//         configBlock: state.adminReducer.configBlock,
//         layout: state.adminReducer.layout
//     }
// };

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
