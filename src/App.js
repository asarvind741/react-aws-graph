import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Homemain from './containers/Homemain/Homemain';
import Solution from './containers/Solution/Solution';


class App extends React.Component {
  render() {
    return (
      <div>
      <Layout>
       <Switch>
          <Route path = "/" component = {Homemain } exact />
          <Route path = "/search" component = { Solution } exact />
       </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
