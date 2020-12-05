import React from 'react'
import Dashboard from '../components/DashBoardComponent/Dashboard'
import Header from '../components/HeaderComponent/Header';
import SideBar from '../components/SidebarComponent/SideBar';


import './mainbody.css'

const DashboardPage = () => {
    return (
        <div>
            <Header />
            <div className='main-body'>
                <div className="sidebar-section">
                    <SideBar />
                </div>
                <div className="body-section">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
