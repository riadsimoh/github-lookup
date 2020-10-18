import React from 'react';

const Alert = (props) => {
  return props.alert != null ? (
    <div>
      <p className={`text-center pt-3 ${props.alert.textColor}`}>
        <i className="fas fa-info-circle"></i> {props.alert.message}
      </p>
    </div>
  ) : null;
};

export default Alert;
