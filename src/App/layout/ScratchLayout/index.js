import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Navigation from './Navigation';
// import Breadcrumb from './Breadcumb';
import Loader from "../Loader";
import Aux from "../../../hoc/_Aux";
import * as actionTypes from "../../../store/actions";

// import bgImage from "../../../assets/bg-masthead.jpg"
import Home from '../../ppdb/Scratch/Home/Home';
import Footer from "../../ppdb/Scratch/Footer/Footer";

import './app.scss';

class ScratchLayout extends Component {

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }
    render() {
       
        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        return (
            <Aux>                
                <Fullscreen enabled={this.props.isFullScreen}>
                    <Navigation />                   
                    
                    {/* <!-- Masthead--> */}
                    <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center justify-content-center text-center">
                                <div className="col-lg-10 align-self-end">
                                    <h1 className="text-uppercase text-white font-weight-bold">PPDB ONLINE</h1>
                                    <h2 className="text-uppercase text-white font-weight-bold">SMK Muhammadiyah Sampit</h2>
                                    <hr className="divider my-4" />
                                </div>
                                <div className="col-lg-8 align-self-baseline">        
                                    <a className="btn btn-primary btn-xl js-scroll-trigger" 
                                        style={{margin: "10px"}}
                                        href="/pendaftaran"
                                    >Pendaftaran PPDB Online</a>                                                     
                                    <a className="btn btn-primary btn-xl js-scroll-trigger" style={{margin: "10px"}}>Login Calon Peserta Didik</a>
                                </div>
                            </div>
                        </div>
                    </header>                    
                    
                    <Home/>
                    <Footer/>          
                </Fullscreen>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(ScratchLayout));