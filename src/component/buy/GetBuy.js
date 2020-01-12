import React , { Component } from 'react';
import {ListContext} from '../../Context';
import { Link } from 'react-router-dom'
import './buylist.css';
import img1 from '../img/mobile1.jpg';
import img2 from '../img/mobile2.jpg';
import img3 from '../img/mobile3.jpg';
import img4 from '../img/mobile4.jpg';
import img5 from '../img/mobile6.jpg';

class  GetBuy extends Component{
    constructor(props){
      super(props);
      this.index = this.props.match.params.index ;
      this.let  = 1;
    }
    
    imges =()=>{
        switch(this.let){
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
        if(this.let === 5){
            this.let = 1;
        }else{
        this.let = this.let + 1;
        }
    }

    handleHover = (e) =>{
        e.target.style.width='1000px';
        e.target.style.height='700px';
        document.getElementById('col-ul').style.display = 'none';
        
    }
    handleOut = (e)=>{
        e.target.style.width='100%';
        e.target.style.height='100%';
        document.getElementById('col-ul').style.display = 'block';
    }
   

    render(){
        const { name , cost  , color } = this.props.list[this.index];
        return (
            <React.Fragment>
                 <Link to="/buy"> <i className="fa fa-arrow-left my-4"></i></Link><br/>
            <div className="jumbotron">
                    <div className="alert alert-primary text-center text-dark h3">{name}</div>
                <div  className="row my-4">
                   
                    <div className="col-md-6">
                        <img onMouseOut={(e)=>this.handleOut(e)} onMouseOver={(e)=>this.handleHover(e)} style={{height: '100%', width: '100%', display: 'block'}} src={this.imges()} alt="mobile"/>
                    </div>
                    <div id="col-ul" className="col-md-6 mt-4">
                        <ul id="getBuy" className="list-group text-center text-white">
                            <li className="list-group-item border-primary">
                                <h5>Name : {name}</h5>
                            </li >
                            <li className="list-group-item border-primary">
                                <h5>Cost : {cost} $</h5>
                            </li>
                            <li className="list-group-item border-primary">
                                <h5>Color : {color}</h5>
                            </li>
                           
                        </ul>
                        <button className="btn btn-block btn-outline-danger my-4 "> <span className="h5 text-white">Add to Cart</span><i className="fa fa-shopping-basket ml-4"></i> </button>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
    
}

export default GetBuy;
