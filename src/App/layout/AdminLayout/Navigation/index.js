import React, { Component } from "react";
// import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import windowSize from "react-window-size";

import NavLogo from "./NavLogo";
import NavContent from "./NavContent";
import OutsideClick from "./OutsideClick";
import Aux from "../../../../App/hoc/_Aux";
import * as actionTypes from "./../../../../store/actions/adminLayoutActions";
import navigation from "../../../../menu-items";

class Navigation extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = { usera: this.props.userProfile }
  // }

  resize = () => {
    const contentWidth = document.getElementById("root").clientWidth;

    if (this.props.layout === "horizontal" && contentWidth < 992) {
      this.props.onChangeLayout("vertical");
    }
  };

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", this.resize);
    this.props.onChangeLayout("vertical");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
    let navClass = ["pcoded-navbar"];

    if (
      this.props.preLayout !== null &&
      this.props.preLayout !== "" &&
      this.props.preLayout !== "layout-6" &&
      this.props.preLayout !== "layout-8"
    ) {
      navClass = [...navClass, this.props.preLayout];
    } else {
      navClass = [
        ...navClass,
        this.props.layoutType,
        this.props.navBackColor,
        this.props.navBrandColor,
        "drp-icon-" + this.props.navDropdownIcon,
        "menu-item-icon-" + this.props.navListIcon,
        this.props.navActiveListColor,
        this.props.navListTitleColor,
      ];

      if (this.props.layout === "horizontal") {
        navClass = [...navClass, "theme-horizontal"];
      }

      if (this.props.navBackImage) {
        navClass = [...navClass, this.props.navBackImage];
      }

      if (this.props.navIconColor) {
        navClass = [...navClass, "icon-colored"];
      }

      if (!this.props.navFixedLayout) {
        navClass = [...navClass, "menupos-static"];
      }

      if (this.props.navListTitleHide) {
        navClass = [...navClass, "caption-hide"];
      }
    }

    if (this.props.windowWidth < 992 && this.props.collapseMenu) {
      navClass = [...navClass, "mob-open"];
    } else if (this.props.collapseMenu) {
      navClass = [...navClass, "navbar-collapsed"];
    }

    if (this.props.preLayout === "layout-6") {
      document.body.classList.add("layout-6");
      document.body.style.backgroundImage = this.props.layout6Background;
      document.body.style.backgroundSize = this.props.layout6BackSize;
    }

    if (this.props.preLayout === "layout-8") {
      document.body.classList.add("layout-8");
    }

    if (this.props.layoutType === "dark") {
      document.body.classList.add("datta-dark");
    } else {
      document.body.classList.remove("datta-dark");
    }

    if (this.props.rtlLayout) {
      document.body.classList.add("datta-rtl");
    } else {
      document.body.classList.remove("datta-rtl");
    }

    if (this.props.boxLayout) {
      document.body.classList.add("container");
      document.body.classList.add("box-layout");
    } else {
      document.body.classList.remove("container");
      document.body.classList.remove("box-layout");
    }

    // const whatRole = this.props.role;
    // const whichObj = Object.keys(navigation);
    // const navRole = navigation[this.props.role].items;

    let navContent = (
      <div className="navbar-wrapper">
        <NavLogo
          collapseMenu={this.props.collapseMenu}
          windowWidth={this.props.windowWidth}
          onToggleNavigation={this.props.onToggleNavigation}
        />
        <NavContent
          navigation={navigation[this.props.role].items}
          role={this.props.role}
        />
      </div>
    );
    if (this.props.windowWidth < 992) {
      navContent = (
        <OutsideClick>
          <div className="navbar-wrapper">
            <NavLogo
              collapseMenu={this.props.collapseMenu}
              windowWidth={this.props.windowWidth}
              onToggleNavigation={this.props.onToggleNavigation}
            />
            <NavContent
              navigation={navigation[this.props.role].items}
              role={this.props.role}
            />
            {/* <NavContent navigation={navigation.items} /> */}
          </div>
        </OutsideClick>
      );
    }

    return (
      <Aux>
        <nav className={navClass.join(" ")}>{navContent}</nav>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
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
    navListTitleHide: state.adminReducer.navListTitleHide,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleNavigation: () => dispatch({ type: actionTypes.COLLAPSE_MENU }),
    onChangeLayout: (layout) =>
      dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(windowSize(Navigation))
);
