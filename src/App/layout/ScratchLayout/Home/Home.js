import React from 'react';
// import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';
import {Row, Col } from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
// import DEMO from "../../store/constant";

class Home extends React.Component {
    render() {
        let content = 
        (
            <div>
                {/* <!-- About section--> */}
                <section className="page-section bg-primary" id="about">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <h2 className="text-white mt-0">We've got what you need!</h2>
                                    <hr className="divider light my-4" />
                                    <p className="text-white-50 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                                    <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Informasi section--> */}
                    <section className="page-section" id="info">
                        <div className="container">
                            <h2 className="text-center mt-0">Informasi PPDB Online</h2>
                            <hr className="divider my-4" />
                            <div className="row">                                
                                <div className="col-lg-6 col-md-6 text-center">
                                    <div className="mt-5">
                                        <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                                        <h3 className="h4 mb-2">Info 2</h3>
                                        <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                                    </div>
                                    <div className="mt-4">
                                        <a className="btn btn-primary btn-xl" href="#prosedur">Prosedur dan Ketentuan</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 text-center">
                                    <div className="mt-5">
                                        <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                                        <h3 className="h4 mb-2">Info 3</h3>
                                        <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                                    </div>
                                    <div className="mt-4">
                                        <a className="btn btn-primary btn-xl" href="https://dev2.smkmuhsampit.id">Login Calon Peserta Didik</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="page-section bg-dark text-white" id="prosedur">
                        <div className="container text-center">
                            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
                        </div>
                    </section>

                    {/* <!-- Contact section--> */}
                    <section className="page-section" id="contact">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 text-center">
                                    <h2 className="mt-0">Let's Get In Touch!</h2>
                                    <hr className="divider my-4" />
                                    <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                                    <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                                    <div>+1 (555) 123-4567</div>
                                </div>
                                <div className="col-lg-4 mr-auto text-center">
                                    <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                                    <a className="d-block" href="mailto:ict@smkmuhsampit.sch.id">smk.muhsampit@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
        return (
            <Aux>
                {content}
            </Aux>
        );
    }
}

export default Home;