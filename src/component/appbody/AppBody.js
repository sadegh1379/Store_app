import React from 'react';
import { Link } from 'react-router-dom';
import './appbody.css';

function AppBody() {
    return (
    <div id="table" className="mx-auto">       
         <table className="table tablebody table-responsive table-bordered text-center">
             <thead></thead>
             <tbody>
            <tr>
                    <Link to="/add"><td><p>Add</p> <span className="fa fa-plus fa-3x"></span> </td></Link>
                    <Link to="/buy"><td><p>Shopping</p> <span className="fa fa-shopping-bag fa-3x"></span> </td></Link>
            </tr>
            <tr>
                    <Link to="/remove"><td><p>Remove</p> <span className="fa fa-trash fa-3x"></span> </td></Link>
                    <Link to="/about"><td><p>About</p> <span className="fa fa-question fa-3x"></span> </td></Link>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
     
    </div>

    )
}

export default AppBody;
