import React from 'react';
import { Redirect, Route } from 'react-router-dom';



const privateRoute = ({ component: Component, ...rest }) => {
    
    const jwtToken = localStorage.getItem('jwtToken') ?  true: false;
    return <Route {...rest} render = {props => (
        jwtToken) ?  (
            <Component {...props} />) : 
            <Redirect to ={{
                pathname: '/',
                state: { from: props.location }
            }} />       
         }/>

}

export default privateRoute;

