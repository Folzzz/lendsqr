import React from 'react';
import Dashboard from '../DashBoardComponent/Dashboard';
import SideBar from '../SidebarComponent/SideBar';

import './header.css';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="brand-section">
                <img src="../../img/logo.svg" alt="brand identity"/>
            </div>
            <div className="search-section">
                <form action="" className="search-bar">
                    <input type="text" placeholder="search for anything"/>
                    <button type="submit"><img src="../../img/search-icon.svg" alt=""/></button>
                </form>
            </div>
            <div className="profile-section">
                <div className="profile-bell profile-content">
                    <img src="../../img/bell-icon.svg" alt="notification"/>
                </div>
                <div className="profile-img profile-content">
                    <img src="../../img/profile-pic.svg" alt=""/>
                </div>

                <div className="profile-name profile-content">
                    <p>Adedeji <i class="arrow-down"></i></p>
                </div>
            </div>
        </div>

        {/* <div className='main-body'>
            <div className="sidebar-section">
            <SideBar />
            </div>
            <div className="body-section">
                <Dashboard />
            </div>
        </div> */}
        
        </>
    )
}

export default Header
