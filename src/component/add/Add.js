import React   , { useContext }from 'react';
import { InputContext } from '../../Context';
import './add.css';

function Add() {
    // give context
    const { setName , setCost , name , cost , color , setColor , handleSubmit} = useContext(InputContext);

    return (
        <div className="mt-4">
           
            <div className="jumbotron  jumbotronAdd text-white">
                     <h1 className="text-center  mb-4">Adding to Store</h1>
                    <form onSubmit={(e)=>handleSubmit(e)}  className="mx-auto text-center">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input required value={name} onChange={(e)=>setName(e.target.value)}  type="text" id="name" className="form-control" placeholder="enter name... "/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cost">Cost</label>
                                <input required value={cost} onChange={(e)=>setCost(e.target.value)} type="number" id="cost" className="form-control" placeholder="enter Cost... "/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Color</label>
                                <input required value={color} onChange={(e)=>setColor(e.target.value)} type="text" id="color" className="form-control" placeholder="enter Cost... "/>
                            </div>
                           
                        <button type="submit" className="btn btnAdd btn-block btn- mt-4">Add </button>
                    </form>
            </div>
        </div>
    )
}

export default Add;
