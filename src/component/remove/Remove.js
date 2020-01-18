import React from 'react';
import './removelist.css';

function Remove({name , color , cost , img ,memory , camera, handleRemove , index}) {
    return (
            <tr>
                <th>{index}</th>
                <td>{name}</td>
                <td>{color}</td>
                <td>{cost}</td>
                <td>{memory}</td>
                <td>{camera}</td>
                <td><img className="rounded" style={{width:'40px'}} src={img} /></td>
                <td  style={{cursor:'pointer'}} onClick={()=>handleRemove(index)}>
                    <i id="remove-icon"  className="fa fa-trash-o fa-2x "></i>
                </td>
            </tr> 
       
    )
}

export default Remove
