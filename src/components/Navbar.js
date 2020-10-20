import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-info px-5">
      <a className="navbar-brand " href="#">
        <i className="fab fa-github"></i> {props.title}
      </a>
      <div className=" ">
        <Link to="/" className=" px-2 link" href="#">
          Accueill
        </Link>
        <Link to="/about" className=" px-2 link" href="#">
          A propos
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
