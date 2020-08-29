import React from 'react';

import './styles/Alert.css';

function Alert(props) {
  if (props.success) {
    return (
      <div className="success">
        <h3>{props.message} <span className="icon-before"></span></h3>
      </div>
    );
  }
  return (
    <div className="error">
      <h3>{props.message} 👎</h3>
    </div>
  );
}

export default Alert;
