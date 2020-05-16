import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';

// import ChatList from './ChatList';
import Aux from "../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

import Avatar2 from '../../../../../assets/images/user/avatar-2.jpg';

class NavRight extends Component {
    state = {
        listOpen: false
    };

    render() {

        const displayName = this.props.userprofile.displayName ? this.props.userprofile.displayName : this.props.userprofile.email;
        const userDisplayName = this.props.status.isAdmin ? displayName : "Calon Siswa";

        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    {/* Notifikasi */}
                    <li><span>{userDisplayName}</span></li>
                    <li><span>role: {this.props.status.role}</span></li>
                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout}>
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-bell"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="notification">
                                <div className="noti-head">
                                    <h6 className="d-inline-block m-b-0">Notifikasi</h6>
                                </div>
                                <ul className="noti-body">
                                    <li className="n-title">
                                        <p className="m-b-0">LAMA</p>
                                    </li>
                                    <li className="notification">
                                        <div className="media">
                                            <img className="img-radius" src={Avatar2} alt="Generic placeholder"/>
                                            <div className="media-body">
                                                <p><strong>Admin</strong><span className="n-time text-muted"><i
                                                    className="icon feather icon-clock m-r-10"/>30 hari</span></p>
                                                <p>Belum ada pengumuman</p>
                                            </div>
                                        </div>
                                    </li>                                    
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    
                    {/* Gear  */}
                    <li>
                        <Dropdown alignRight={!this.props.rtlLayout} className="drp-user">
                            <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                                <i className="icon feather icon-settings"/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu alignRight className="profile-notification">
                                <div className="pro-head">
                                    <img src={Avatar2} className="img-radius" alt="User Profile"/>
                                    <span>{userDisplayName}</span>
                                    <a href="/user/logout" className="dud-logout" title="Logout">
                                        <i className="feather icon-log-out"/>
                                    </a>
                                </div>
                                <ul className="pro-body">
                                    {/* <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-settings"/> Settings</a></li> */}
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-user"/> Profile</a></li>
                                    {/* <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-mail"/> My Messages</a></li> */}
                                    {/* <hr/> */}
                                    <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="feather icon-help-circle"/> Bantuan</a></li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                {/* <ChatList listOpen={this.state.listOpen} closed={() => {this.setState({listOpen: false});}} /> */}
            </Aux>
        );
    }
}

export default NavRight;
