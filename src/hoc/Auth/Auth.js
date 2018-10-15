import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Spinner from '../../components/Navigation/UI/Spinner/Spinner';


const privateRoute = ({ component: Component, ...rest }) => {
    const jwtToken = async() => (await Auth.currentSession()).getIdToken().getJwtToken() ? true: false;

    console.log("jwt token", jwtToken);
    if(!jwtToken){
        return <Spinner />
    }
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

