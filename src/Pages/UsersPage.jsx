import React from 'react'
import Header from '../components/HeaderComponent/Header'
import SideBar from '../components/SidebarComponent/SideBar'
import User from '../components/UsersComponent/User'

const UsersPage = () => {
    return (
        <div>
            <Header />
            <div className='main-body'>
                <div className="sidebar-section">
                    <SideBar />
                </div>
                <div className="body-section">
                    <User />
                </div>
            </div>
        </div>
    )
}

export default UsersPage
