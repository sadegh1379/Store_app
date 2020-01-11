import React from 'react';
import './removelist.css';

function Remove({name , color , cost , handleRemove , index}) {
    return (
        <React.Fragment>
            <li className="list-group-item  my-2">
                {
                    `Name: ${name} ${" --- "} Cost : ${ cost } ${" --- "} ${"   "} Color :${color}`
                }
                <button onClick={()=>handleRemove(index)} className="btn btn-outline-primary float-right"><i  className="fa fa-trash float-right text-white" style={{cursor:'pointer'}}></i></button>
            </li>
        </React.Fragment>
    )
}

export default Remove
