/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavLeft from './NavLeft';
import NavRight from './NavRight';
import Aux from '../../../hoc/_Aux';
import DEMO from '../../../../store/constant';
import * as actionTypes from '../../../../store/actions/adminLayoutActions';
// import LogoMerak from '../../../../../assets/images/merak2020.jpg';
import LogoMerak from '../../../../assets/images/merak2020.jpg';

class NavBar extends Component {
  render() {
    let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', this.props.headerBackColor];
    if (this.props.headerFixedLayout) {
      headerClass = [...headerClass, 'headerpos-fixed'];
    }

    let toggleClass = ['mobile-menu'];
    if (this.props.collapseMenu) {
      toggleClass = [...toggleClass, 'on'];
    }

    return (
      <Aux>
        <header className={headerClass.join(' ')}>
          <div className="m-header">
            <a className={toggleClass.join(' ')} id="mobile-collapse1" href={DEMO.BLANK_LINK} onClick={this.props.onToggleNavigation}><span/></a>
            <a href={DEMO.BLANK_LINK} className="b-brand">
              <div className="b-bg">
                {/* <i className="feather icon-trending-up"/> */}
                <img alt="merak" src={LogoMerak} style={{width:'41px', height:'41px', border:'2px solid darkgrey', borderRadius: '50%'}}/>
              </div>
              <span className="b-title">PPDB 2020/2021</span>
            </a>
          </div>
          <a className="mobile-menu" id="mobile-header" href={DEMO.BLANK_LINK}><i className="feather icon-more-horizontal"/></a>
          <div className="collapse navbar-collapse">
            <NavLeft {...this.props} />
            <NavRight {...this.props} rtlLayout={this.props.rtlLayout} />
          </div>
        </header>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    rtlLayout: state.adminReducer.rtlLayout,
    headerBackColor: state.adminReducer.headerBackColor,
    headerFixedLayout: state.adminReducer.headerFixedLayout,
    collapseMenu: state.adminReducer.collapseMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);
