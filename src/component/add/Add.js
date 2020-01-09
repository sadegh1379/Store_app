import React   , { useContext }from 'react';
import { InputContext } from '../../Context';
import './add.css';

function Add() {
    // give context
    const { setName , setCost , name , cost} = useContext(InputContext);

    return (
        <div className="mt-4">
           
            <div className="jumbotron text-white">
                     <h1 className="text-center  mb-4">Adding goods</h1>
                    <form  className="mx-auto text-center">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" id="name" className="form-control" placeholder="enter name... "/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Cost</label>
                                <input value={cost} onChange={(e)=>setCost(e.target.value)} type="number" id="name" className="form-control" placeholder="enter Cost... "/>
                            </div>
                           
                        <button type="submit" className="btn btn-block btn-success mt-4">Add </button>
                    </form>
            </div>
        </div>
    )
}

export default Add;
