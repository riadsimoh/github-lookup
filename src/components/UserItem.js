import React from 'react';

const UserItem = (props) => {
  const { avatar, login, html_url } = props;

  return (
    <div className="col-sm-4">
      <div className="card text-center">
        <div className="card-body">
          <img className="card-img-top mx-auto" src={avatar} alt="" />
          <div className="card-title">{login}</div>
          <a type="button" href={html_url} className="btn btn-info ">
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
