import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto text-center mt-5">
      <h2>Githup lookup</h2>
      <p>
        C'est une application React qui vous permet de trouver les utilisateurs
        de githup ainsi leur repos.{' '}
      </p>
      <h4>Riadh SI MOH</h4>
      <a href="https://linkedin.com/in/riad-si-moh">
        {' '}
        <i className=" p-2 fab fa-linkedin fa-2x "></i>
      </a>
      <a href="https://github.com/riadsimoh">
        <i className="p-2 fab fa-github fa-2x"></i>
      </a>
    </div>
  );
};

export default About;
