import React from 'react';
import './App.css';
import NavBar from './components/home/NavBar'
import SignUp from './components/forms/SignUp'
import Login from  './components/forms/Login'
import { Route } from 'react-router-dom'
import Homepage from './components/home/HomePage'
import DashBoard from './components/home/DashBoard';
import ArticleCard from './components/article/ArticleCard';


function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path='/' component={Homepage}/>
      <Route exact path= '/signup' component= {SignUp}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/dashboard' component={DashBoard}/>  
      <Route exact path ='/article' component={ArticleCard}/>
    </div>
  );
}

export default App;
