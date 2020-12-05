import React from 'react';
import { Link } from 'react-router-dom';

import './userdetails.css';

const UserDetails = () => {
    return (
        <div className="userdetails-body">
            <div className="back-to">
                <Link to="/users">
                    <span>
                        &#8592; Back to the Users
                    </span>
                </Link>
            </div>
            <div className='userdetails-header'>
                <h2 className="dashboard-header">User Details</h2>
                <div className="user-category">
                    <span className="user-blacklist">Blacklist User</span>
                    <span className="user-activate">Activate User</span>
                </div>
            </div>

            <div className="user-basic-info">
                <div className="basic-info-top">
                    <div className="user-avatar">
                        <img src="../../img/avatar.svg" alt=""/>
                    </div>
                    <div className="user-name basic-info">
                        <p>Grace Effiom</p>
                        <p>LSQFf587g90</p>
                    </div>
                    <div className="user-rate basic-info">
                        <p>User’s Tier</p>
                        <p>
                            <img src="../../img/filled-star.svg" alt=""/>
                            <img src="../../img/star.svg" alt=""/>
                            <img src="../../img/star.svg" alt=""/>
                        </p>
                    </div>
                    <div className="user-balance basic-info">
                        <p>₦200,000.00</p>
                        <p>9912345678/Providus Bank</p>
                    </div>
                </div>
                <div className="basic-info-down">
                    <span className='active'>General Details</span>
                    <span>Documents</span>
                    <span>Bank Details</span>
                    <span>Loans</span>
                    <span>Savings</span>
                    <span>App and System</span>
                </div>
            </div>

            <div className="general-details">
                <div className="general-details-wrapper">
                    <h4 className="general-details-heading">Personal Information</h4>
                    <div className="sub-general-wrapper">
                        <div className="sub-general">
                            <p className="sub-general-heading">full Name</p>
                            <p className="sub-general-content">Grace Effiom</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Phone Number</p>
                            <p className="sub-general-content">07060780922</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Email Address</p>
                            <p className="sub-general-content">grace@gmail.com</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Bvn</p>
                            <p className="sub-general-content">07060780922</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Gender</p>
                            <p className="sub-general-content">Female</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Marital status</p>
                            <p className="sub-general-content">Single</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Children</p>
                            <p className="sub-general-content">None</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Type of residence</p>
                            <p className="sub-general-content">Parent’s Apartment</p>
                        </div>
                    </div>
                </div>

                <div className="general-details-wrapper">
                    <h4 className="general-details-heading">Education and Employment</h4>
                    <div className="sub-general-wrapper">
                    
                        <div className="sub-general">
                            <p className="sub-general-heading">level of education</p>
                            <p className="sub-general-content">B.Sc</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">employment status</p>
                            <p className="sub-general-content">Employed</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">sector of employment</p>
                            <p className="sub-general-content">FinTech</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Duration of employment</p>
                            <p className="sub-general-content">2 years</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">office email</p>
                            <p className="sub-general-content">grace@lendsqr.com</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Monthly income</p>
                            <p className="sub-general-content">₦200,000.00- ₦400,000.00</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">loan repayment</p>
                            <p className="sub-general-content">40,000</p>
                        </div>
                    </div>
                </div>

                <div className="general-details-wrapper">
                    <h4 className="general-details-heading">Socials</h4>
                    <div className="sub-general-wrapper">

                        <div className="sub-general">
                            <p className="sub-general-heading">Twitter</p>
                            <p className="sub-general-content">@grace_effiom</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Facebook</p>
                            <p className="sub-general-content">Grace Effiom</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Instagram</p>
                            <p className="sub-general-content">@grace_effiom</p>
                        </div>
                        
                    </div>
                </div>

                <div className="general-details-wrapper">

                    <h4 className="general-details-heading">Guarantor</h4>
                    <div className="sub-general-wrapper">

                        <div className="sub-general">
                            <p className="sub-general-heading">full Name</p>
                            <p className="sub-general-content">Debby Ogana</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Phone Number</p>
                            <p className="sub-general-content">07060780922</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Email Address</p>
                            <p className="sub-general-content">debby@gmail.com</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Relationship</p>
                            <p className="sub-general-content">Sister</p>
                        </div>
                        
                    </div>
                </div>

                <div className="general-details-wrapper">

                    <h4 className="general-details-heading">Next of Kin</h4>
                    <div className="sub-general-wrapper">

                        <div className="sub-general">
                            <p className="sub-general-heading">full Name</p>
                            <p className="sub-general-content">Debby Ogana</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Phone Number</p>
                            <p className="sub-general-content">07060780922</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Email Address</p>
                            <p className="sub-general-content">debby@gmail.com</p>
                        </div>
                        <div className="sub-general">
                            <p className="sub-general-heading">Relationship</p>
                            <p className="sub-general-content">Sister</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserDetails
