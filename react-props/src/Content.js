import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  return <div>{props.children}</div>;
};

// add type checks here
Content.propTypes = {
  children: PropTypes.element,
};

export default Content;
