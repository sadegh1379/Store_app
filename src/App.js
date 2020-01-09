import React , { useState } from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {InputContext} from './Context';
import './component/bootstrap/bootstrap.css';
import Navbar from './component/navbar/Navbar';
import AppBody from './component/appbody/AppBody';
import About from './component/about/About';
import PageNotFound from './component/pagenot/PageNotFound';
import Add from './component/add/Add';

function App() {
  
  // state inputs
  const [name ,setName] = useState('')
  const [cost , setCost] = useState(0);



  const valueInputContext = {
    setName,
    setCost
  }
  return (
  <InputContext.Provider value={valueInputContext}>
          <Router>
              <div>
                <div className="container my-3" >
                    <h1 className="text-center mb-3 text-white">Fashion Store</h1>
                    <Navbar/>
                      <Switch>
                          <Route exact path="/" component={AppBody}/>
                          <Route exact path="/about" component={About}/>
                          <Route exact path="/add" component={Add}/>
                          <Route  component={PageNotFound}/>
                      </Switch>
                      
                </div>
              
              </div>
          </Router>
    </InputContext.Provider>
  )
}

export default App;
