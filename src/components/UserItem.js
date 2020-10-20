import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { avatar, login, html_url } = props;
  return (
    <div className="col-sm-4 mb-3">
      <div className="card text-center">
        <div className="card-body">
          <img className="card-img-top mx-auto" src={avatar} alt="" />
          <div className="card-title">{login}</div>
          <Link type="button" to={`users/${login}`} className="btn btn-info ">
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
