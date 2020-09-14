import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return <h3>{props.title}</h3>;
};

// add type checks here
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
