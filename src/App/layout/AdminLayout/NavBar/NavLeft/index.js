/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Dropdown} from 'react-bootstrap';
import windowSize from 'react-window-size';

// import NavSearch from './NavSearch';
import Aux from '../../../../hoc/_Aux';
import DEMO from '../../../../../store/constant';
import * as actionTypes from '../../../../../store/actions/adminLayoutActions';
import LogoMerak from '../../../../../assets/images/merak2020.jpg';

class NavLeft extends Component {

  render() {
    let iconFullScreen = ['feather'];
    iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

    let navItemClass = ['nav-item'];
    if (this.props.windowWidth <= 575) {
      navItemClass = [...navItemClass, 'd-none'];
    }
    // let dropdownRightAlign = false;
    // if (this.props.rtlLayout) {
    //     dropdownRightAlign = true;
    // }


    return (
      <Aux>
        <ul className="navbar-nav mr-auto">
          <li><img alt="merak" src={LogoMerak} style={{width:'50px', height:'50px', border:'2px solid lightgrey', borderRadius: '50%'}}/></li>                    
          <li className={navItemClass.join(' ')}>
            {/* <Dropdown alignRight={dropdownRightAlign}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                Dropdown
                            </Dropdown.Toggle>
                            <ul>
                                <Dropdown.Menu>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Action</a></li>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Another action</a></li>
                                    <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>Something else here</a></li>
                                </Dropdown.Menu>
                            </ul>
                        </Dropdown> */}                        
            <h4 className="b-title">SMK MUHAMMADIYAH SAMPIT</h4>
          </li>
          <li><a href={DEMO.BLANK_LINK} className="full-screen" onClick={this.props.onFullScreen}><i className={iconFullScreen.join(' ')} /></a></li>
          {/* <li className="nav-item"><NavSearch/></li> */}
        </ul>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFullScreen: state.adminReducer.isFullScreen,
    rtlLayout: state.adminReducer.rtlLayout
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFullScreen: () => dispatch({type: actionTypes.FULL_SCREEN}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLeft));
