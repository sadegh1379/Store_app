import React , { Component, useContext } from 'react';
import {ListContext} from '../../Context';
import {CartCotext} from '../../Context';
import { Link } from 'react-router-dom'
import './buylist.css';



// const { cart , SetCart} = useContext(CartCotext);

class  GetBuy extends Component{
    constructor(props){
      super(props);
      this.index = this.props.match.params.index ;
    }
    
    
 
 
    // mouse over for image
    handleHover = (e) =>{
        e.target.style.width='1000px';
        e.target.style.height='700px';
        document.getElementById('col-ul').style.display = 'none';
        
    }

    // mouse out for image
    handleOut = (e)=>{
        e.target.style.width='100%';
        e.target.style.height='80%';
        document.getElementById('col-ul').style.display = 'block';
    }

    // add to cart basket
    handleCart = () =>{
    //     const { name , cost  , color } = this.props.list[this.index];
    //     let oldCart = [...cart];
    //     let newCart = [...oldCart , {name , color , cost}]
    //    SetCart(newCart);
    //    console.log(cart);
    }
   

    render(){
        const { name , cost  , color , img  , memory , camera , description} = this.props.list[this.index];
        return (
            <React.Fragment>
                 <Link to="/buy"> <i className="fa fa-arrow-left my-4"></i></Link><br/>
            <div className="jumbotron">
                    <div className="alert alert-primary text-center text-dark h3">{name}</div>
                <div  className="row my-4">
                   
                    <div className="col-md-6">
                        <img onMouseOut={(e)=>this.handleOut(e)} onClick={(e)=>this.handleHover(e)} style={{height: '80%', width: '100%', display: 'block' , cursor:'pointer' , borderRadius:'30px'}} src={img} alt="mobile"/>
                    </div>
                    <div id="col-ul" className="col-md-6 mt-4">
                        <ul id="getBuy" className="list-group text-left text-white bold">
                            <li className="list-group-item ">
                                <h5>Name : <span class="badge badge-pill badge-primary">{name}</span></h5>
                            </li >
                            <li className="list-group-item ">
                                <h5>Cost : <span class="badge badge-pill badge-primary">{cost} $</span></h5>
                            </li>
                            <li className="list-group-item ">
                                <h5>Color : <span class="badge badge-pill badge-primary">{color}</span></h5>
                            </li>
                            <li className="list-group-item ">
                                <h5>Camera : <span class="badge badge-pill badge-primary">{camera}</span></h5>
                            </li>
                            <li className="list-group-item ">
                                <h5>Internal memory :  <span class="badge badge-pill badge-primary">{memory}</span></h5>
                            </li>
                            <li className="list-group-item ">
                                <h5>Description :  <span class="badge badge-pill badge-primary">{description}</span></h5>
                            </li>
                           
                        </ul>
                        <button onClick={()=>this.handleCart} className="btn bg-dark btn-block btn-outline-danger my-4 "> <span className="h5 text-white">Add to Cart</span><i className="fa fa-shopping-basket ml-4"></i> </button>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
    
}

export default GetBuy;
