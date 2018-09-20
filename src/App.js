import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Level1 from './containers/Leval1/Leval1';
import Homemain from './containers/Homemain/Homemain';


class App extends Component {
  render() {
    return (
      <div>
      <Layout>
       <Switch>
         <Route path = "/level1" component = { Level1 } />
          <Route path = "/" component = { Homemain } />
       </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
