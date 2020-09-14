import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return <button onClick={props.handleClick}>{props.buttonText}</button>;
};

// add type checks here
Footer.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Footer;
