import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

import Layout from '../components/Layout';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={() => <Home db={this.props.db} service={this.props.service} login={this.props.login}></Home>} />
            <Route exact path="/login" component={() => <Login login={this.props.login} firebase={this.props.service} />} />
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
