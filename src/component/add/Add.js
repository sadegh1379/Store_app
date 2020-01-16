import React   , { useContext , useRef }from 'react';
import { InputContext } from '../../Context';
import './add.css';

function Add() {
    
    // use ref 
    const inputRef = useRef();

    // give context
    const { setName , setCost , name , cost , color , setColor , handleSubmit , img , setImg , description , setDescription ,memory , camera , setMemory , setCamera} = useContext(InputContext);

    // show alert
    function Alert(){
        document.getElementById('alert-s').style.display = 'block';
        setTimeout(
            ()=>{
                document.getElementById('alert-s').style.display = 'none';
            }
            , 2000)
    } 
    return (
        <div className="mt-4">
           
            <div className="jumbotron  jumbotronAdd text-white">
                     <h1 className="text-center   mb-4">Adding to Store</h1>
                    <form onSubmit={(e)=>{handleSubmit(e) ; inputRef.current.focus(); Alert()}}  className="mx-auto text-center">
                             <div>
                                <span id="alert-s" className="alert alert-red">Added successfully</span>
                            </div>
                            
                           <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input autoComplete="off" ref={inputRef} required value={name} onChange={(e)=>setName(e.target.value)}  type="text" id="name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cost">Cost</label>
                                <input autoComplete="off" required value={cost} onChange={(e)=>setCost(e.target.value)} type="number" id="cost" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Color</label>
                                <input autoComplete="off" required value={color} onChange={(e)=>setColor(e.target.value)} type="text" id="color" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="memory">Internal Memory</label>
                                <input autoComplete="off" required value={memory} onChange={(e)=>setMemory(e.target.value)} type="text" id="memory" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="camera">Camera</label>
                                <input autoComplete="off" required value={camera} onChange={(e)=>setCamera(e.target.value)} type="text" id="camera" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="img">Image Url</label>
                                <input autoComplete="off" required value={img} onChange={(e)=>setImg(e.target.value)} type="text" id="color" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea autoComplete="off" value={description} onChange={(e)=>setDescription(e.target.value)}  id="description" className="form-control"></textarea>
                            </div>

                           
                            
                           
                        <button type="submit" className="btn btn-outline-primary btn-block btn- mt-4">Add </button>
                    </form>
            </div>
        </div>
    )
}

export default Add;
