import React, { Component } from 'react';
import {  Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';


class App extends Component {
  render() {
    return (
      <div>
      <Layout>
       <Switch>
         
       </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
