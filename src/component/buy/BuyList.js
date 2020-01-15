import React from 'react';
import { Link  } from 'react-router-dom';
import './buylist.css';

let i = 1;
function BuyList({name , cost , color , img , index}) {


    return (
        <div id="card-mobile" className="card mb-3">
  
            
            <img className="mx-auto" style={{height: '200px', width: '70%', display: 'block'}} src={img} alt="mobile"/>
            
                    <ul className="list-group list-group-flush">
                            <li className="list-group-item">Name : <span className="text-white">{name}</span></li>
                            <li className="list-group-item">color : <span className="text-white">{color}</span></li>
                            <li className="list-group-item">Price : <span className="text-white">{cost}$</span></li>
                    </ul>
            <div className="card-body">
                <Link to={`buy/${index}`} className="card-link btn btn-outline-danger btn-block">Buy</Link>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
</div>

    )
}

export default BuyList;
