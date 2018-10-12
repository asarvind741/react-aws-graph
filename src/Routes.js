import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import Solution from './containers/Solution/Solution';
import DisplaySolution from './containers/DisplaySolution/DisplaySolution'
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Changepassword from './containers/Changepassword/Changepassword';
import ResetPassword from './containers/Reset-Password/Reset-Password';
import PrivateRoute from './hoc/Auth/Auth';


export default ({childProps}) => {
    return(
       <Switch>
          
          <PrivateRoute path = "/search" component = { Solution } />
          <Route path = "/change-password" 
          render = {(props) => <Changepassword {...props} props={childProps}/> } />
         
          {/* <Route path = "/signup" render={(props) => <Signup {...props} props={childProps} />} /> */}
          <PrivateRoute path = "/home" component = {Dashboard } />
          <Route path = "/solution"  component = { DisplaySolution } />
          <Route path = "/reset-password"  component = { ResetPassword } />
          <Route path = "/" exact render={(props) => <Login {...props} props={childProps} />} />
       </Switch>
    )
};