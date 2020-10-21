import React from 'react';
import { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.search === '') {
      this.props.alertFun('Vous devez entrer un pseudo', 'text-danger');
    } else {
      this.props.searchUsers(this.state.search);
    }
  };
  clearUsers = () => {
    this.props.clearFun();
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group p-3 w-50 mx-auto ">
            <input
              className="form-control"
              name="search"
              placeholder="Entrer le pseudo d'un utilisateur Github"
              onChange={this.onChange}
              value={search}
            />
            <button type="submit" className="btn btn-secondary  btn-block mt-3">
              {' '}
              Rechercher{' '}
            </button>
            {this.props.showClear ? (
              <button
                class="btn btn-danger btn-block mt-3"
                onClick={this.clearUsers}
              >
                Recommancer
              </button>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
