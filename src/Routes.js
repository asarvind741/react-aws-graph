import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Homemain from './containers/Homemain/Homemain';
import Solution from './containers/Solution/Solution';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import PrivateRoute from './hoc/Auth/Auth';

export default ({childProps}) => {
    return(
       <Switch>
          <Route path = "/home" component = {Homemain } exact props={childProps}/>
          <PrivateRoute path = "/search" component = { Solution } exact props={childProps}/>
          {/* <Route path = "/signup" render={(props) => <Signup {...props} props={childProps} />} /> */}
          <Route path = "/" render={(props) => <Login {...props} props={childProps} />} />
          
       </Switch>
    )
};