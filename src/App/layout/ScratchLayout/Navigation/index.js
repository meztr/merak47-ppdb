import React, { Component } from 'react';

import {Dropdown} from 'react-bootstrap';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import windowSize from 'react-window-size';

import NavContent from './NavContent';
import OutsideClick from './OutsideClick';
import Aux from '../../../hoc/_Aux';
import * as actionTypes from './../../../../store/actions';
// import navigation from '../../../../menu-scratch-items';
// import navigation from '../../../../menu-ppdb-items';

import classnames from "classnames";

class Navigation extends Component {
    
    state = {
        prevScrollpos: window.pageYOffset,
        visible: true        
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
        const { prevScrollpos } = this.state;
        const { marginScrollpos } = 150;

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
    
    render() {        
        const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
            <a
                className="nav-link dropdown-toggle js-scroll-trigger"
                href=""
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
              {children}
            </a>
        )); 

        const ScratchContent = (            
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">TENTANG SEKOLAH</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#info">INFORMASI</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger " href="#contact">HUBUNGI KAMI</a></li>                      
                </ul>
            </div>
        );

        let navClass = [
            'pcoded-navbar',
        ];

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
                        <img style={{width:"55px", marginRight: "10px"}} src="/assets/logo60.png"/>
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">
                            <h2>PPDB ONLINE</h2></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
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
        layout: state.layout,
        preLayout: state.preLayout,
        collapseMenu: state.collapseMenu,
        layoutType: state.layoutType,
        navBackColor: state.navBackColor,
        navBackImage: state.navBackImage,
        navIconColor: state.navIconColor,
        navBrandColor: state.navBrandColor,
        layout6Background: state.layout6Background,
        layout6BackSize: state.layout6BackSize,
        rtlLayout: state.rtlLayout,
        navFixedLayout: state.navFixedLayout,
        boxLayout: state.boxLayout,
        navDropdownIcon: state.navDropdownIcon,
        navListIcon: state.navListIcon,
        navActiveListColor: state.navActiveListColor,
        navListTitleColor: state.navListTitleColor,
        navListTitleHide: state.navListTitleHide
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
        onChangeLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(windowSize(Navigation)));
