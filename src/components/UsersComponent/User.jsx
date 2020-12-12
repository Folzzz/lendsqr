import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import './user.css';
import UserTable from './UserTable';
import UserTablePagination from './UserTablePagination';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
import PaginationTable from './PaginationTable';
import NewTable from './NewTable';
import TableSection from './TableSection';
import AnotherTable from './AnotherTable';

const User = () => {

    // data state
    // const [userData, setUserData] = useState(localStorage.getItem("UserData") ? JSON.parse(localStorage.getItem("UserData")) : []);
    // loading data state
    // const [loading, setLoading] = useState(false);
    // pagination state
    // const [currentUserPage, setCurrentUserPage] = useState(1);
    // post per page state 
    // const [postPerPage, setPostPerPage] = useState(10);

    // const [currentUserData, setCurrentUserData] = useState([]);
    // const [currentUserPage, setCurrentUserPage] = useState(null);
    // const [totalUserPage, setTotalUserPage] = useState(null);
    // const [totalDataCount, setTotalDataCount] = useState(0)

    // const endpoint = "https://my.api.mockaroo.com/users.json?key=5bfbf710";


    // const getUserData = async() => {
    //    try {
    //         setLoading(true)
    //         const response = await fetch(endpoint)
    //         const data = await response.json()
    //         console.log(data);
    //         console.log(data.length);
    //         setUserData(data);
    //         setTotalDataCount(data.length)
    //         localStorage.setItem("UserData", JSON.stringify(data));
    //         setLoading(false)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }



    // useEffect (() => {
    //     getUserData()
    //   }, [])

    // //   get current post
    // const indexOfLastPost = currentUserPage * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const currentPosts = userData.slice(indexOfFirstPost, indexOfLastPost);

    // // pagination click function- change page
    // const paginate = (pageNumber) => {
    //     setCurrentUserPage(pageNumber)
    // }

    return (

        <div className="users-body">
                <div>
                    <h1 className="dashboard-header">
                    <Link to="/userdetails">Users</Link>
                    </h1>
                </div>
                <div className="sub-dashboard-section">
                    <div className="sub-dashboard">
                        <div className='dashboard-img mb-sm'>
                            <img src="../../img/all-user.svg" alt=""/>
                        </div>

                        <p className="dashboard-text mb-sm">users</p>
                        <p className="dashboard-fig mb-sm">2,453</p>
                    </div>
                    <div className="sub-dashboard">
                        <div className='dashboard-img mb-sm'>
                            <img src="../../img/active-user.svg" alt=""/>
                        </div>

                        <p className="dashboard-text mb-sm">Active Users</p>
                        <p className="dashboard-fig mb-sm">2,453</p>
                    </div>
                    <div className="sub-dashboard">
                        <div className='dashboard-img mb-sm'>
                            <img src="../../img/user-loan.svg" alt=""/>
                        </div>

                        <p className="dashboard-text mb-sm">Users with Loans</p>
                        <p className="dashboard-fig mb-sm">12,453</p>
                    </div>
                    <div className="sub-dashboard">
                        <div className='dashboard-img mb-sm'>
                            <img src="../../img/user-savings.svg" alt=""/>
                        </div>

                        <p className="dashboard-text mb-sm">Users with Savings</p>
                        <p className="dashboard-fig mb-sm">102,453</p>
                    </div>
                </div>


                <div className="table-wrapper">
                    <div className="all-user-container">
                        <div className="all-user-table-wrapper">
                            <AnotherTable />
                        </div>
                    </div>
                </div>
        </div>

    )
}

export default User
