import React from 'react';
import './removelist.css';

function Remove({name , color , cost , img , handleRemove , index}) {
    return (
        <React.Fragment>
            <li className="list-group-item  my-1 py-4">
                {
                    `Name: ${name} ${" --- "} Cost : ${ cost } ${" --- "} ${"   "} Color :${color}${" --- "} `
                }<img className="rounded" style={{width:'40px'}} src={img} />
                <button onClick={()=>handleRemove(index)} className="btn my-auto btn-outline-primary float-right"><i  className="fa fa-trash float-right text-white" style={{cursor:'pointer'}}></i></button>
            </li> 
        </React.Fragment>
    )
}

export default Remove
