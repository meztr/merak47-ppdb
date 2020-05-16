import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

// import { compose } from "redux";
// // import { connect } from "react-redux";
import { signout, fetchAllAdminData } from "../../../store/actions/auth";

// MARKBUG : 10May2020
// import requireAuth from "../../hoc/requireAuth";

import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../../store/actions/adminLayoutActions";

import './app.scss';

class AdminLayout extends Component {

    state = {        
        isAdmin: false,
        role: "calon",
        // userprofila: {},
        // localcalondata: {},
        loading: true
    }

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentDidMount() {

        const doesAdmin = this.props.userprofile.isAnonymous;
        if (!doesAdmin) {            
            this.props.fetchAllAdminData();

            // const displayName = this.props.userprofile.displayName ? this.props.userprofile.displayName : this.props.userprofile.email;
            // const userDisplayName = doesAdmin ? displayName : "Calon Siswa";

            // TODO: setup userprofile
            this.setState({
                isAdmin: true,
                role: "user",
                loading:false
            });
        } else {
            console.log("Not Admin");
            this.setState({ localcalondata: localStorage.getItem('ppdbcalondata')})
            this.setState( {loading:false} );            
        }
    }

    componentWillMount() {

        if (this.props.adminReducer.windowWidth > 992 && this.props.adminReducer.windowWidth <= 1024 && this.props.adminReducer.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.adminReducer.windowWidth < 992 && this.props.adminReducer.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    render() {

        if (this.state.loading) {
            console.log ('masih loading bro')
            return (
                <Loader />
            )            
        }        
        
        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        const menu = routes.map((route, index) => {
            const usingData = this.state.isAdmin ? this.props.data : this.props.calondata;
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} data={usingData} />
                    )} />
            ) : (null);
        });

        // TODO : in line 80 memory leaks issued by this.props.defaultPath = undefined, then caused by uncompatible Claire reducers vs AdminLayout reducers
        return (
            <Aux>
                <Fullscreen enabled={this.props.adminReducer.isFullScreen}>
                    <Navigation status={this.state} userprofile={this.props.userprofile} />
                    <NavBar status={this.state} userprofile={this.props.userprofile} />            
                    <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                            {/* <h4>{this.props.auth.uid}</h4> */}
                                <div className="pcoded-inner-content">
                                    <Breadcrumb />
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <Suspense fallback={<Loader/>}>
                                                <Switch>
                                                    {menu}                                                    
                                                    <Redirect from="/" to={this.props.adminReducer.defaultPath} />
                                                </Switch>
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fullscreen>
            </Aux>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         auth: state.firebaseReducer.auth,
//         authMsg: state.authReducer.authMsg,
//         calonSiswaValues: state.authReducer.calonSiswaValues,
//         defaultPath: state.adminReducer.defaultPath,
//         isFullScreen: state.adminReducer.isFullScreen,
//         collapseMenu: state.adminReducer.collapseMenu,
//         configBlock: state.adminReducer.configBlock,
//         layout: state.adminReducer.layout
//     }
// };

const mapStateToProps = state => ({
    ...state,
    userprofile: state.firebaseReducer.auth,
    data: state.authReducer.authData,
    calondata: state.authReducer.calonData
});

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
        // onFetchCalonData: () => dispatch({type: actionTypes.FETCH_CALON_DATA}),
        signout: () => dispatch(signout()),
        fetchAllAdminData: () => dispatch(fetchAllAdminData())
    }
};

//export default connect(mapStateToProps, mapDispatchToProps) (windowSize(requireAuth(AdminLayout)));
export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));