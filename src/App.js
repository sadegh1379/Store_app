import React , { useState } from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {InputContext} from './Context';
import {ListContext} from './Context';
import {CartCotext} from './Context';
import './component/bootstrap/bootstrap.css';
import Navbar from './component/navbar/Navbar';
import AppBody from './component/appbody/AppBody';
import About from './component/about/About';
import Buy from './component/buy/Buy';
import PageNotFound from './component/pagenot/PageNotFound';
import Add from './component/add/Add';
import RemoveList from './component/remove/RemoveList';
import GetBuy from './component/buy/GetBuy';
import Cart from './component/buy/Cart';

function App() {
  
  // state inputs
  const [name ,setName] = useState('')
  const [color , setColor] = useState('')
  const [cost , setCost] = useState();
  const [img , setImg] = useState();
  const [camera , setCamera] = useState('');
  const [memory , setMemory] = useState('');
  const [description , setDescription ] = useState('');

  // list state
  const [list , setList] = useState(getLocalStorage("mobileList"));

  // cart
  const [cart  , setCart] = useState([]);


   // handle submit form for added

   const handleSubmit = (e)=>{
    e.preventDefault();
    const newList = [...list , {name , cost , color , img , memory , description , camera}];
    setList(newList);
    setMobileListInLocalStorage("mobileList" , newList);
    setName('');
    setCost('');
    setColor('');
    setImg('')
    setCamera('')
    setMemory('');
    setDescription('')

    
 }


 // save in local storage
 function getLocalStorage(value){
  return window.localStorage.getItem(value)? JSON.parse(window.localStorage.getItem("mobileList")) : []
 }

 function setMobileListInLocalStorage(localname , value){
   window.localStorage.setItem(localname , JSON.stringify(value));
 }

 // handle remove
 function handleRemove(index){
   let oldList = [...list];
   let newList = oldList.filter((_,i)=> i !== index);
   setList(newList);
   setMobileListInLocalStorage("mobileList" , newList);
 } 

 // value input context
  const valueInputContext = {
    handleSubmit,
    handleRemove,
    setName,
    setImg,
    setCost,
    setMemory,
    setCamera,
    setColor,
    setDescription,
    description,
    color,
    name,
    cost,
    img,
    camera,
    memory
  }

  
 // cart value context
 const cartValueContext = {
    cart,
    setCart
 }

 

  return (
  <InputContext.Provider value={valueInputContext}>
    <ListContext.Provider value={list}>
      <CartCotext.Provider value={cartValueContext}>
              <Router>
                  <div>
                    <div className="container my-3" >
                        <h1 id="head-text" className="text-center my-4 text-white">Mobile Store</h1>
                        <Navbar/>
                          <Switch>
                              <Route exact path="/" component={AppBody}/>
                              <Route exact path="/about" component={About}/>
                              <Route exact path="/add" component={Add}/>
                              <Route exact path="/buy" component={Buy}/>
                              <Route exact path="/remove" component={RemoveList}/>
                              <Route exact path="/cart" component={Cart}/>
                              <Route exact path="/buy/:index" render={props => (
                              <GetBuy {...props} list={list} />
                              )}/>
                              <Route  component={PageNotFound}/>
                          </Switch>
                          
                    </div>     
                  </div>
              </Router>
          </CartCotext.Provider>
        </ListContext.Provider>
    </InputContext.Provider>
  )
}

export default App;
