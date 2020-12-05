import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import './user.css';
import UserTable from './UserTable';
import UserTablePagination from './UserTablePagination';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';
import PaginationTable from './PaginationTable';

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
                        <PaginationTable />
                    {/* <UserTable  userData={currentPosts} loading={loading} id="userprofile"/>
                    <UserTablePagination postPerPage={postPerPage} totalUserData={totalDataCount} paginate={paginate}/>

    <span>Showing {indexOfLastPost} out of {totalDataCount} users</span> */}
                    </div>
                </div>
                </div>
                {/* <div className="all-user-container">
                    <div className="all-user-table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>organization <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Username <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Email <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Phone number <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Date joined <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Status <img src="../../img/user-arrow.svg" alt=""/></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    userData.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.company}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.date}</td>
                                            {user.status ? (<td>active</td>) : (<td>inactive</td>)}
                                            {/* <td>{user.status ? active }</td> */}
                                        {/* </tr>
                                    ))
                                }
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="pagination-wrapper"></div>
                </div> */}
        </div>

    )
}

export default User
