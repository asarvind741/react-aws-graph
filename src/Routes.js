import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Homemain from './containers/Homemain/Homemain';
import Solution from './containers/Solution/Solution';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';

export default ({childProps}) => {
    return(
       <Switch>
          <Route path = "/" component = {Homemain } exact props={childProps}/>
          <Route path = "/search" component = { Solution } exact props={childProps}/>
          <Route path = "/signup" render={(props) => <Signup {...props} props={childProps} />} />
          <Route path = "/signin" render={(props) => <Login {...props} props={childProps} />} />
          
       </Switch>
    )
};