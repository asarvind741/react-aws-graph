import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Homemain from './containers/Homemain/Homemain';


class App extends Component {
  render() {
    return (
      <div>
      <Layout>
       <Switch>
          <Route path = "/" component = { Homemain } />
       </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
