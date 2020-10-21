import React, { Component, Fragment } from 'react';
import Spinner from './Spinner.js';
import { Link } from 'react-router-dom';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    console.log(this.props);
    console.log('hi');
  }
  render() {
    const {
      login,
      avatar_url,
      html_url,
      location,
      bio,
      name,
      public_repos,
      followers,
      following,
    } = this.props.user;
    const { loading } = this.props.loading;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Fragment>
          <Link to="/" className="btn btn-dark mt-3">
            Retour
          </Link>
        </Fragment>
        <div>
          <i
            className="fab fa-github-alt d-block text-center pb-5 "
            style={{ fontSize: '120px' }}
          ></i>
        </div>
        <div className="card text-center py-3 w-75 mx-auto">
          <div className="row mx-auto">
            <div className="col-sm-5 mx-auto ">
              <img
                className="card-img-top d-block mx-auto"
                src={avatar_url}
                alt="avatar github"
              />
              <div class="card-body">
                <h5 className="card-title">{login}</h5>
                <p className="card-title">
                  <div>
                    {location && (
                      <Fragment>
                        <b>Location: </b>
                        {location}
                      </Fragment>
                    )}
                  </div>
                </p>
              </div>
            </div>
            <div className="col-sm-5 mx-auto text-center">
              {bio && (
                <Fragment>
                  <h5>Bio</h5>
                  <p>{bio}</p>{' '}
                </Fragment>
              )}

              <p>
                {name ? <strong>{`Nom d'utilisateur: ${name}`}</strong> : null}
              </p>

              <a href={html_url} className="btn btn-secondary  ">
                Visiter Profile Github
              </a>
            </div>
          </div>
        </div>
        <div className="row mx-auto my-5">
          <div className="col-sm-6 mx-auto text-center ">
            <div className="badge badge-pill badge-success p-2 mx-2">
              Abonnés {followers}
            </div>
            <div className="badge badge-pill badge-danger p-2 mx-2">
              Repos-publique {public_repos}
            </div>
            <div className="badge badge-pill badge-primary p-2 mx-2">
              Abonnements {following}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
