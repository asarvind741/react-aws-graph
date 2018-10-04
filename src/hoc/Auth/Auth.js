import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Auth } from 'aws-amplify';


const privateRoute = ({ component: Component, ...rest }) => {
    const jwtToken = async() => (await Auth.currentSession()).getIdToken().getJwtToken() ? true: false;

    const returnToSignInPage =() =>{
        try {
             Auth.signOut();
        }
        catch(e){

        }
    }
    return <Route {...rest} render = {props => (
        jwtToken) ?  (
            <Component {...props} />) : 
            <Redirect to ={{
                pathname: '/home',
                state: { from: props.location }
            }} />
            
         }/>

}

export default privateRoute;

