import React from 'react';
import './App.css';
import NavBar from './components/home/NavBar'
import SignUp from './components/forms/SignUp'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <NavBar/>
      {/* <Route exact path='/' component={Homepage}/> */}
      <Route exact path= '/signup' component= {SignUp}/>
      {/* <Route exact path='/login' component={Login}/> */}
        
    </div>
  );
}

export default App;
