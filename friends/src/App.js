import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Navigation from './components/Navigation';
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Switch>
     <Route  exact path='/login' component={Login}/>  
     <PrivateRoute   exact path='/friends' component={Friends}/>
     </Switch>  
    </div>
  );
}

export default App;
