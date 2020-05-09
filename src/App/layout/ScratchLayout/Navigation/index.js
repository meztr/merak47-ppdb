import React, { Component } from 'react';

// import {Dropdown} from 'react-bootstrap';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import windowSize from 'react-window-size';

// import NavContent from './NavContent';
// import OutsideClick from './OutsideClick';
import Aux from '../../../hoc/_Aux';
import * as actionTypes from './../../../../store/actions/adminLayoutActions';
import meraklogo from '../../../../assets/logo60.png';
// import navigation from '../../../../menu-scratch-items';
// import navigation from '../../../../menu-ppdb-items';

import classnames from "classnames";

class Navigation extends Component {
    
    state = {
        prevScrollpos: window.pageYOffset,
        visible: true,
        navExpanded: false,
        pakeH4: false
    }

    resize = () => {
        const contentWidth = document.getElementById('root').clientWidth;

        if (this.props.layout === 'horizontal' && contentWidth < 992) {
            this.props.onChangeLayout('vertical');
        }

        // merak47: fixed bug windows resized change 
        if (this.props.layout === 'vertical' && contentWidth > 992) {
            this.props.onChangeLayout('horizontal');
        }
    };

    componentDidMount() {
        this.resize();
        // this.handleScroll();
        window.addEventListener('resize', this.resize);
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        // const { prevScrollpos } = this.state;
        // const { marginScrollpos } = 150;

        const currentScrollPos = window.pageYOffset;
        // const visible = prevScrollpos > currentScrollPos;
        const visible = 150 > currentScrollPos;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
        window.removeEventListener('scroll', this.handleScroll);
    }

    toggleNavbar() {
        this.setNavExpanded(!this.state.navExpanded);
    }

    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    }
    
    render() {  

        const isNavExpanded = this.state.navExpanded ? 'show' : '';

        const ScratchContent = (            
            <div className={`${isNavExpanded}` + "collapse navbar-collapse"} id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">TENTANG SEKOLAH</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#info">INFORMASI</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger " href="#contact">HUBUNGI KAMI</a></li>                      
                </ul>
            </div>
        );
        
        const styleSatu = ( <a className="navbar-brand js-scroll-trigger" href="#page-top"> <h3>PPDB ONLINE</h3> </a> );
        // const styleDua = ( <a className="navbar-brand js-scroll-trigger" href="#page-top"> <h4>PPDB ONLINE</h4> </a> );
        const headerStyle = this.state.pakeH4 ? styleSatu : styleSatu;
        

        let navContent = (
            <div className="navbar-wrapper">
                {/* <NavLogo collapseMenu={this.props.collapseMenu} windowWidth={this.props.windowWidth} onToggleNavigation={this.props.onToggleNavigation} /> */}
                {/* <NavContent navigation={navigation.items} /> */}
                {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav"> */}
                <nav className={classnames("navbar navbar-expand-lg navbar-light fixed-top py-3", 
                                    {
                                        "navbar-scrolled": !this.state.visible
                                    })
                                } id="mainNav">
                    <div className="container">
                        <img style={{width:"55px", marginRight: "10px"}} src={meraklogo} alt="Logo"/>
                        {headerStyle}
                        <button onClick={ () => this.toggleNavbar() }
                                className="navbar-toggler navbar-toggler-right" 
                                type="button" data-toggle="collapse" 
                                data-target="#navbarResponsive" 
                                aria-controls="navbarResponsive" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                        </button>

                        {ScratchContent}
                    </div>
                </nav>
            </div>
        );
        

        return (
            <Aux>
                {/* <nav className={navClass.join(' ')}>
                    {navContent}
                </nav>
                 */}                
                {navContent}                 
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.adminReducer.layout,
        preLayout: state.adminReducer.preLayout,
        collapseMenu: state.adminReducer.collapseMenu,
        layoutType: state.adminReducer.layoutType,
        navBackColor: state.adminReducer.navBackColor,
        navBackImage: state.adminReducer.navBackImage,
        navIconColor: state.adminReducer.navIconColor,
        navBrandColor: state.adminReducer.navBrandColor,
        layout6Background: state.adminReducer.layout6Background,
        layout6BackSize: state.adminReducer.layout6BackSize,
        rtlLayout: state.adminReducer.rtlLayout,
        navFixedLayout: state.adminReducer.navFixedLayout,
        boxLayout: state.adminReducer.boxLayout,
        navDropdownIcon: state.adminReducer.navDropdownIcon,
        navListIcon: state.adminReducer.navListIcon,
        navActiveListColor: state.adminReducer.navActiveListColor,
        navListTitleColor: state.adminReducer.navListTitleColor,
        navListTitleHide: state.adminReducer.navListTitleHide
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(windowSize(Navigation)));
