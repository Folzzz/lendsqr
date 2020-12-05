import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css'

const SideBar = () => {
    const [barOpen, setBarOpen] = useState( false );
    const [ button, setButton ] = useState(false);


    // sidebar open function
    const handleClick = () => {
        setBarOpen(!barOpen)
        console.log(barOpen)
    };

    //function that removes button on mobile shows button depending on screen-size
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    //calls the showButton function on window resize
    window.addEventListener('resize', showButton);

    return (
        <div className='navigation'>
            <nav className='nav'>
                <div class="nav-menu-btn" onClick={handleClick}>
                    <div class="btn-line"></div>
                    <div class="btn-line"></div>
                    <div class="btn-line"></div>
                </div>
            </nav>
            <div className={barOpen ? "nav-sidebar active" : "nav-sidebar"}>
                <div className="org">
                    <img src="../../img/switch-org.svg" alt=""/>
                    <p>Switch Organisation <i class="caret-down"></i></p>
                </div>

                <div className="dashboard sidebar-item">
                    <img src="../../img/dashboard.svg" alt=""/>
                    <Link to="/dashboard" className="ml-sm">Dashboard</Link>
                </div>

                <div className="sub-sidebar">
                    <div className="customer">
                        <h4>Customer</h4>
                        <ul>
                            <li className="sidebar-item">
                                <img src="../../img/user.svg" alt=""/>
                                {/* <p className="ml-sm">Users</p> */}
                                <Link to="/users" className="ml-sm">Users</Link>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/guarantor.svg" alt=""/>
                                <p className="ml-sm">Guarantors</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/loan.svg" alt=""/>
                                <p className="ml-sm">Loans</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/savings.svg" alt=""/>
                                <p className="ml-sm">Savings</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/loan-req.svg" alt=""/>
                                <p className="ml-sm">Loan Requests</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/whitelist.svg" alt=""/>
                                <p className="ml-sm">Whitelist</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/karma.svg" alt=""/>
                                <p className="ml-sm">Karma</p>
                            </li>
                        </ul>
                    </div>

                    <div className="business">
                        <h4>Businesses</h4>
                        <ul>
                            <li className="sidebar-item">
                                <img src="../../img/organisation.svg" alt=""/>
                                <p className="ml-sm">Organization</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/loan-products.svg" alt=""/>
                                <p className="ml-sm">Loan Products</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/savings-products.svg" alt=""/>
                                <p className="ml-sm">Savings Products</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/transactions.svg" alt=""/>
                                <p className="ml-sm">Transactions</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/services.svg" alt=""/>
                                <p className="ml-sm">Services</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/service-acc.svg" alt=""/>
                                <p className="ml-sm">Service Account</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/settlements.svg" alt=""/>
                                <p className="ml-sm">Settlements</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/reports.svg" alt=""/>
                                <p className="ml-sm">Reports</p>
                            </li>
                        </ul>
                    </div>

                    <div className="settings">
                        <h4>SETTINGS</h4>
                        <ul>
                            <li className="sidebar-item">
                                <img src="../../img/prefrences.svg" alt=""/>
                                <p className="ml-sm">Preferences</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/fees-pricing.svg" alt=""/>
                                <p className="ml-sm">Fees and Pricing</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/audit-logs.svg" alt=""/>
                                <p className="ml-sm">Audit Logs</p>
                            </li>
                            <li className="sidebar-item">
                                <img src="../../img/system-msg.svg" alt=""/>
                                <p className="ml-sm">Systems Messages</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="dashboard sidebar-item">
                    <img src="../../img/dashboard.svg" alt=""/>
                    <p>Dashboard</p>
                </div> */}
            </div>
        </div>
    )
}

export default SideBar
