import React from 'react'
import Header from '../components/HeaderComponent/Header'
import SideBar from '../components/SidebarComponent/SideBar'
import UserDetails from '../components/UserDetailsComponent/UserDetails'

const UserDetailsPage = () => {
    return (
        <div>
            <Header />
            <div className='main-body'>
                <div className="sidebar-section">
                    <SideBar />
                </div>
                <div className="body-section">
                    <UserDetails />
                </div>
            </div>
        </div>
    )
}

export default UserDetailsPage
