import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import DashBoard from "../components/home/DashBoard";


const PrivateRoute = ({ component: Component, ...props}) => {
    return (
        <Route  
        {...props}
        render={() => {
            if(localStorage.getItem("token")) {
                return <DashBoard {...props}/>;
            } else {
                return <Redirect to="/login" />;
            }
        }}
         />
    );
};

export default PrivateRoute;