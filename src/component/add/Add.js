import React   , { useContext , useRef }from 'react';
import { InputContext } from '../../Context';
import './add.css';

function Add() {
    
    // use ref 
    const inputRef = useRef();

    // give context
    const { setName , setCost , name , cost , color , setColor , handleSubmit} = useContext(InputContext);

    // show alert
    function Alert(){
        document.getElementById('alert-s').style.display = 'block';
        setTimeout(
            ()=>{
                document.getElementById('alert-s').style.display = 'none';
            }
            , 3000)
    } 
    return (
        <div className="mt-4">
           
            <div className="jumbotron  jumbotronAdd text-white">
                     <h1 className="text-center  mb-4">Adding to Store</h1>
                    <form onSubmit={(e)=>{handleSubmit(e) ; inputRef.current.focus(); Alert()}}  className="mx-auto text-center">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input autocomplete="off" ref={inputRef} required value={name} onChange={(e)=>setName(e.target.value)}  type="text" id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cost">Cost</label>
                                <input autocomplete="off" required value={cost} onChange={(e)=>setCost(e.target.value)} type="number" id="cost" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Color</label>
                                <input autocomplete="off" required value={color} onChange={(e)=>setColor(e.target.value)} type="text" id="color" className="form-control" />
                            </div>
                            <div>
                                <span id="alert-s" className="alert alert-red">Added successfully</span>
                            </div>
                            
                           
                        <button type="submit" className="btn btn-outline-primary btn-block btn- mt-4">Add </button>
                    </form>
            </div>
        </div>
    )
}

export default Add;
