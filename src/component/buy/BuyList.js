import React from 'react';
import { Link  } from 'react-router-dom';
import img1 from '../img/mobile1.jpg';
import img2 from '../img/mobile2.jpg';
import img3 from '../img/mobile3.jpg';
import img4 from '../img/mobile4.jpg';
import img5 from '../img/mobile6.jpg';
import './buylist.css';

let i = 1;
function BuyList({name , cost , color , index}) {

    // 
    function imges(){
        switch(i){
            case 1 :
                return img1
            break;
            case 2 :
                return img2
            break;
            case 3 :
                return img3
            break;
            case 4 :
                return img4
            break;
            case 5 :
                return img5
            break;
            default:
                return null;
        }
    }
    if(i === 5){
        i = 1;
    }else{
    i = i+1;
    }

    return (
        <div id="card-mobile" className="card mb-3">
  
            
            <img style={{height: '200px', width: '100%', display: 'block'}} src={imges()} alt="mobile"/>
            
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
