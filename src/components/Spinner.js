import React from 'react';
import spinner from './images/spinner.gif';

const Spinner = () => {
  return (
    <div className="">
      <img
        className="d-block mx-auto w-75"
        src={spinner}
        alt="spinner loading"
      />
    </div>
  );
};

export default Spinner;
