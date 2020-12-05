import React from 'react'

import './dashboard.css'

const Dashboard = () => {
    // const details = [
    //     {
    //         key: 'key1',
    //         img: "../../",
    //         text:'',
    //         figure:,
            
    //     },
    //     {
    //         key: 'key2',
    //         img: "../../",
    //         text:'',
    //         figure:
    //     },
    //     {
    //         key: 'key3',
    //         img: "../../",
    //         text:'',
    //         figure:
    //         count:
    //     },
    //     {
    //         key: 'key4',
    //         img: "../../",
    //         text:'',
    //         figure:,
    //         count:
    //     }
    // ]
    return (
        <div className="dashboard-body">
            <div>
                <h1 className="dashboard-header">Dashboard</h1>
            </div>
            <div className="sub-dashboard-section">
                <div className="sub-dashboard">
                    <div className='dashboard-img mb-sm'>
                        <img src="../../img/dash-org.svg" alt=""/>
                    </div>

                    <p className="dashboard-text mb-sm">organizations</p>
                    <p className="dashboard-fig mb-sm">2,453</p>
                </div>
                <div className="sub-dashboard">
                    <div className='dashboard-img mb-sm'>
                        <img src="../../img/active-user.svg" alt=""/>
                    </div>

                    <p className="dashboard-text mb-sm">Users</p>
                    <p className="dashboard-fig mb-sm">2,453</p>
                </div>
                <div className="sub-dashboard">
                    <div className='dashboard-img mb-sm'>
                        <img src="../../img/user-loan.svg" alt=""/>
                    </div>

                    <p className="dashboard-text mb-sm">Loans</p>
                    <p className="dashboard-fig mb-sm">₦12,453</p>
                    <p className="dashboard-count ">Count: 88</p>
                </div>
                <div className="sub-dashboard">
                    <div className='dashboard-img mb-sm'>
                        <img src="../../img/user-savings.svg" alt=""/>
                    </div>

                    <p className="dashboard-text mb-sm">Savings</p>
                    <p className="dashboard-fig mb-sm">₦102,453</p>
                    <p className="dashboard-count ">Count: 302</p>
                </div>
            </div>

            <div className="dashboard-more">
                <div className="dashboard-table-wrapper first">
                    <div className="table-heading">
                        <h4>recent logins</h4>
                        <a href="">view more</a>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Users</th>
                                <th>Date/time</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                
                                <td>Adedeji</td>
                                <td>Apr 15, 2020 10:00 AM</td>

                            </tr>
                            <tr>

                                <td>Debby Ogana</td>
                                <td>Mar 30, 2020 10:00 AM</td>

                            </tr>
                            <tr>

                                <td>Grace Effiom</td>
                                <td>Mar 15, 2020 10:00 AM</td>

                            </tr>
                            <tr>

                                <td>Tosin Dokunmu</td>
                                <td>Feb 28, 2020 10:00 AM</td>

                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className="dashboard-table-wrapper second">
                    <div className="table-heading">
                        <h4>organizations</h4>
                        <a href="">view more</a>
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Organizations</th>
                                <th>Number of Users</th>
                                <th>Number of loans</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Librety Credi</td>
                                <td>1,000</td>
                                <td>2,309</td>
                            </tr>
                            <tr>
                                <td>Debz Inc.</td>
                                <td>234</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>Irorun</td>
                                <td>500</td>
                                <td>308</td>
                            </tr>
                            <tr>
                                <td>Kredi Bank</td>
                                <td>800</td>
                                <td>1,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
