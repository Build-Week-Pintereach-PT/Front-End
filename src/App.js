import React from 'react';
import './App.css';
import NavBar from './components/home/NavBar'
import SignUp from './components/forms/SignUp'
import Login from  './components/forms/Login'
import { Route, withRouter } from 'react-router-dom'
import DashBoard from './components/home/DashBoard';
import ArticleCard from './components/article/ArticleCard';
import LogOut from './components/Logout';
import NewBoard from './components/forms/NewBoard'
import NewArticle from './components/forms/NewArticle'
import BoardList from './components/board/BoardList'
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div>
      <NavBar/>
      <h1>Welcome to Pintereach!</h1>
      <Route exact path= '/signup' component= {SignUp}/>
      <Route exact path='/login' component={Login}/>
      <PrivateRoute exact path='/dashboard' component={DashBoard}/>  
      <Route exact path ='/article' component={ArticleCard}/>
      <Route exact path = '/logout' component={LogOut}/>
      <Route exact path = '/newboard' component={NewBoard}/>
      <Route exact path = '/newarticle' component={NewArticle}/>
      <Route exact path = '/boardlist' component={BoardList}/>
    </div>
  );
}

export default withRouter(App);
