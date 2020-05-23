import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { compose } from 'redux';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';
import Navigation from './Navigation';
import NavBar from './NavBar';
import Breadcrumb from './Breadcrumb';
import Loader from "../Loader";
import routes from "../../../routes";
import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../../store/actions/adminLayoutActions";
import { signout, fetchAllAdminData } from "../../../store/actions/auth";
import requireAuth from '../../hoc/requireAuth';

import './app.scss';

class AdminLayout extends Component {

    state = {        
        isAdmin: false,
        role: 'calon',
        loading: true,
        dataC:[],
        dataA:[]
    }

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentDidMount() {        
        // const doesAdmin = this.props.userprofile.isAnonymous;
        if (this.props.data.role === 'admin') {
            this.props.fetchAllAdminData();
            // TODO: setup userprofile
            this.setState({
                isAdmin: true,
                role: 'admin',
                loading:false,
                dataA: this.props.data.authData || [],
                dataC:[]

            });
        } else if (this.props.data.role === 'user') {
            // console.log("Not Admin");
            this.setState({
                role: 'user',
                loading:false,
                dataA: this.props.data.authData || [],
                dataC:[]
            });
            
        } else {
            this.setState({ 
                localcalondata: localStorage.getItem('ppdbcalondata'),
                dataC: this.props.data.calonData || [],
                role: 'calon',
                loading:false
            })
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

        // if (this.state.loading && this.props.userprofile.isEmpty) {
        //     console.log ('unauthorized user')
        //     return (
        //         <Redirect to="/" />
        //     )
        // }
        
        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);

        const cMenu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} dataC={this.state.dataC} dataA={this.state.dataA} />
                    )} />                            
            ) : (null);
        });

        // TODO : in line 80 memory leaks issued by this.props.defaultPath = undefined, then caused by uncompatible Claire reducers vs AdminLayout reducers
        return (
            <Aux>
                <Fullscreen enabled={this.props.adminReducer.isFullScreen}>
                    <Navigation status={this.state} userprofile={this.props.userprofile} role={this.state.role}/>
                    <NavBar status={this.state} userprofile={this.props.userprofile} role={this.state.role} />            
                    <div className="pcoded-main-container" onClick={() => this.mobileOutClickHandler}>
                        <div className="pcoded-wrapper">
                            <div className="pcoded-content">
                            {/* <h4>{this.props.auth.uid}</h4> */}
                                <div className="pcoded-inner-content">
                                    <Breadcrumb role={this.state.role}/>
                                    <div className="main-body">
                                        <div className="page-wrapper">
                                            <Suspense fallback={<Loader/>}>
                                                {/* {bigMenu} */}
                                                <Switch>
                                                    {cMenu}
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
    data: state.authReducer
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

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));
// export default compose(connect(mapStateToProps, mapDispatchToProps), requireAuth)(windowSize(AdminLayout));