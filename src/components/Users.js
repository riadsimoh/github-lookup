import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const Users = (props) => {
  const { users, loading } = props;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="container">
        <div className="row justify-content-around mt-5">
          {users.map((user) => (
            <UserItem
              key={user.id}
              login={user.login}
              avatar={user.avatar_url}
              html_url={user.html_url}
            />
          ))}
        </div>
      </div>
    );
  }
};
Users.protoTypes = {
  users: PropTypes.array.isRequired,
  laoding: PropTypes.bool.isRequired,
};

export default Users;
