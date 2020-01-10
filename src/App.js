import React , { useState } from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {InputContext} from './Context';
import {ListContext} from './Context';
import './component/bootstrap/bootstrap.css';
import Navbar from './component/navbar/Navbar';
import AppBody from './component/appbody/AppBody';
import About from './component/about/About';
import Buy from './component/buy/Buy';
import PageNotFound from './component/pagenot/PageNotFound';
import Add from './component/add/Add';

function App() {
  
  // state inputs
  const [name ,setName] = useState('')
  const [color , setColor] = useState('')
  const [cost , setCost] = useState(0);

  // list state
  const [list , setList] = useState(getLocalStorage("mobileList"));



   // handle submit form for added

   const handleSubmit = (e)=>{
    e.preventDefault();
    const newList = [...list , {name , cost , color}];
    setList(newList);
    console.log(list);
    setMobileListInLocalStorage("mobileList" , list);
    setName('');
    setCost(0);
    setColor('');

    
 }


 // save in local storage
 function getLocalStorage(value){
  return window.localStorage.getItem(value)? JSON.parse(window.localStorage.getItem("mobileList")) : []
 }

 function setMobileListInLocalStorage(localname , value){
   window.localStorage.setItem(localname , JSON.stringify(value));
 }

 // value input context
  const valueInputContext = {
    handleSubmit,
    setName,
    setCost,
    setColor,
    color,
    name,
    cost
  }

  
 // value list context
 const valueListContext = {
   list
  }

 

  return (
  <InputContext.Provider value={valueInputContext}>
    <ListContext.Provider value={list}>
          <Router>
              <div>
                <div className="container my-3" >
                    <h1 className="text-center mb-3 text-white">Mobile Store</h1>
                    <Navbar/>
                      <Switch>
                          <Route exact path="/" component={AppBody}/>
                          <Route exact path="/about" component={About}/>
                          <Route exact path="/add" component={Add}/>
                          <Route exact path="/buy" component={Buy}/>
                          <Route  component={PageNotFound}/>
                      </Switch>
                      
                </div>     
              </div>
          </Router>
        </ListContext.Provider>
    </InputContext.Provider>
  )
}

export default App;
