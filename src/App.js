import React, { Fragment } from 'react';
import { Component } from 'react';
import Nav from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';
import Search from './components/Search';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import User from './components/User';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
  };

  componentDidMount() {
    //   const res = await axios.get(
    //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    //   );
    //   this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (text) => {
    this.setState({ loading: true, alert: null });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ user: res.data, loading: false });
  };
  alertFun = (message, textColor) => {
    this.setState({
      alert: {
        textColor: textColor,
        message: message,
      },
    });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  clearFun = () => {
    this.setState({ users: [] });
  };

  render() {
    const { users, loading, user } = this.state;

    return (
      <Router>
        <Nav title="Github lookup" />
        <div className="App container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route
              path="/"
              exact
              render={() => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearFun={this.clearFun}
                    showClear={users.length > 0 ? true : false}
                    alertFun={this.alertFun}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route
              path="/users/:login"
              label="riad"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
