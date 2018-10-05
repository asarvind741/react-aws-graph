import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Homemain from './containers/Homemain/Homemain';
import Solution from './containers/Solution/Solution';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Changepassword from './containers/Changepassword/Changepassword';
import PrivateRoute from './hoc/Auth/Auth';


export default ({childProps}) => {
    return(
       <Switch>
          
          <PrivateRoute path = "/search" component = { Solution } exact/>
          <Route path = "/changePassword" 
          render = {(props) => <Changepassword {...props} props={childProps}/> } />
         
          {/* <Route path = "/signup" render={(props) => <Signup {...props} props={childProps} />} /> */}
         
          <Route path = "/home" component = {Homemain } exact/>
          <Route path = "/" render={(props) => <Login {...props} props={childProps} />} />
          
       </Switch>
    )
};