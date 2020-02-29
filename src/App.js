import React from 'react';
import './App.css';
import NavBar from './components/home/NavBar'
import SignUp from './components/forms/SignUp'
import Login from  './components/forms/Login'
import { Route } from 'react-router-dom'
import Homepage from './components/home/HomePage'
import DashBoard from './components/home/DashBoard';
import ArticleCard from './components/article/ArticleCard';
import LogOut from './components/Logout';
import NewBoard from './components/forms/NewBoard'
import NewArticle from './components/forms/NewArticle'
import BoardList from './components/board/BoardList'


function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path='/' component={Homepage}/>
      <Route exact path= '/signup' component= {SignUp}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/dashboard' component={DashBoard}/>  
      <Route exact path ='/article' component={ArticleCard}/>
      <Route exact path = '/logout' component={LogOut}/>
      <Route exact path = '/newboard' component={NewBoard}/>
      <Route exact path = '/newarticle' component={NewArticle}/>
      <Route exact path = '/boardlist' component={BoardList}/>
    </div>
  );
}

export default App;
