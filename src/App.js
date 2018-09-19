import React, { Component } from 'react';
import { Route, Switch, Link, NavLink} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Header from './components/Navigation/Header/Header';


class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <Header />
       <Switch>

       </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
