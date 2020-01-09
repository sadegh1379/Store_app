import React from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './component/bootstrap/bootstrap.css';
import Navbar from './component/navbar/Navbar';
import AppBody from './component/appbody/AppBody';
import About from './component/about/About';
import PageNotFound from './component/pagenot/PageNotFound';

function App() {


  return (
    <Router>
        <div>
          <div className="container my-3" >
              <h1 className="text-center mb-3 text-white">Fashion Store</h1>
              <Navbar/>
                 <Switch>
                     <Route exact path="/" component={AppBody}/>
                     <Route exact path="/about" component={About}/>
                     <Route  component={PageNotFound}/>
                 </Switch>
          </div>
        
        </div>
    </Router>
  )
}

export default App;
