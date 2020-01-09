import React   , { useContext }from 'react';
import { InputContext } from '../../Context';
import './add.css';

function Add() {
    // give context
    const contextList = useContext(InputContext);

    console.log(contextList);
    return (
        <div className="mt-4">
           
            <div className="jumbotron text-white">
                     <h1 className="text-center  mb-4">Adding goods</h1>
                    <form  className="mx-auto text-center">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control" placeholder="enter name... "/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Cost</label>
                                <input type="text" id="name" className="form-control" placeholder="enter Cost... "/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control" placeholder="enter name your "/>
                            </div>
                        <button type="submit" className="btn btn-block btn-success mt-4">Add </button>
                    </form>
            </div>
        </div>
    )
}

export default Add;
