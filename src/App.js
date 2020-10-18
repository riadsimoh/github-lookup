import React from 'react';
import { Component } from 'react';
import Nav from './components/Navbar';
import Users from './components/Users';
import axios from 'axios';
import Search from './components/Search';
import Alert from './components/Alert';

import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
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
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Nav title="Github lookup" />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearFun={this.clearFun}
          showClear={users.length > 0 ? true : false}
          alertFun={this.alertFun}
        />
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
