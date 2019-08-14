import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {

  render() { 
    return ( 
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path ="/" component={Shop} />
              <Route path ="/cart" component={Cart} />
            </Switch>
        </div>
      </Router>
     );
  }
}
 
export default App ;
