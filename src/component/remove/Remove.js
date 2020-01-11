import React from 'react';
import './removelist.css';

function Remove({name , color , cost , handleRemove , index}) {
    return (
        <React.Fragment>
            <li className="list-group-item  my-2">
                {
                    `Name: ${name} ${" --- "} Cost : ${ cost } ${" --- "} ${"   "} Color :${color}`
                }
                <i onClick={()=>handleRemove(index)} className="fa fa-trash float-right text-white" style={{cursor:'pointer'}}></i>
            </li>
        </React.Fragment>
    )
}

export default Remove
