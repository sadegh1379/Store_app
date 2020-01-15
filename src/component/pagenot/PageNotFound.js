import React from 'react'
import  { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className="container mt-4 text-center">
            <p className="display-1 mb-2"><i className="fa fa-smile-o"></i> Sorry </p>
            <p className="display-2 text-danger">404</p>
            <p>This page not found</p>
            
           
            <Link  to="/">Back To Home</Link>
        </div>
    )
}

export default PageNotFound;
