import React from 'react'

const UserTable = ({ userData, loading }) => {

    if(loading) {
        return <h4>loading...</h4>
    }

    return (
                <div className="all-user-container">
                    <div className="all-user-table-wrapper">
                        <table className="table">
                            <thead className="table-data-header">
                                <tr>
                                    <th>organization <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Username <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Email <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Phone number <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Date joined <img src="../../img/user-arrow.svg" alt=""/></th>
                                    <th>Status <img src="../../img/user-arrow.svg" alt=""/></th>
                                </tr>
                            </thead>

                            <tbody className="table-data-body">
                                {
                                    userData.map(user => (
                                        <tr key={user.id}>
                                            <td>{user.company}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.date}</td>
                                            {user.status ? 
                                            (<td className="active">active</td>) : 
                                            !user.status ? 
                                            (<td className="inactive">inactive</td>) : 
                                            (<td className="pending">pending</td>)}
                                            <td><img src="../../img/table-icon.svg" alt=""/></td>
                                        </tr>
                                    ))
                                }
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    )
}

export default UserTable
