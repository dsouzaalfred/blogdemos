import React from 'react';
import clsx from 'clsx';
import './Alert.css';

const Alert = ({ text, type }) => {
  return (
    <div
      className={clsx('container', {
        'alert-success': type === 'success',
        'alert-error': type === 'error',
        'alert-warning': type === 'warning',
      })}
    >
      {text}
    </div>
  );
};

export default Alert;
