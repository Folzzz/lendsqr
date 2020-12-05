import React from 'react'

const UserTablePagination = ({ postPerPage, totalUserData, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalUserData/postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(page => (
                        <li key={page} className="page-item">
                            <a href="#userprofile" className="page-link" onClick={()=> paginate(page)}>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default UserTablePagination
