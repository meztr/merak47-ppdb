import React from 'react';
// import { Image } from 'react-bootstrap';
import DEMO  from './../../../../../store/constant';
import Aux from "../../../../hoc/_Aux";
import LogoMerak from '../../../../../assets/images/merak2020.jpg';

const navLogo = (props) => {
  let toggleClass = ['mobile-menu'];
  if (props.collapseMenu) {
    toggleClass = [...toggleClass, 'on'];
  }

  return (
    <Aux>
            
      <div className="navbar-brand header-logo">                
        <a href={DEMO.BLANK_LINK} className="b-brand">
          <div className="b-bg">
          {/* <i className="feather icon-trending-up" /> */}
          <img alt="merak" src={LogoMerak} style={{width:'41px', height:'41px', border:'2px solid darkgrey', borderRadius: '30%'}}/>
          </div>
          <span className="b-title">PPDB 2020/2021</span>                    
        </a>                 
        <a href={DEMO.BLANK_LINK} className={toggleClass.join(' ')} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
      </div>
    </Aux>
  );
};

export default navLogo;
