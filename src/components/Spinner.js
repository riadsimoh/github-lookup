import React from 'react';
import spinner from './images/spinner.gif';

const Spinner = () => {
  return (
    <div>
      <img className="d-block mx-auto" src={spinner} alt="spinner loading" />
    </div>
  );
};

export default Spinner;
