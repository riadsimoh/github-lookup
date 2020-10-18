import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <div>
      {' '}
      <nav className="navbar navbar-dark bg-info">
        <div className="container">
          <a className="navbar-brand " href="#">
            <i className="fab fa-github"></i> {props.title}
          </a>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
