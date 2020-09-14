import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div>
      <div>{props.cardHeader}</div>
      <div>{props.cardBody}</div>
      <div>{props.cardFooter}</div>
    </div>
  );
};

// add type checks here
Card.propTypes = {
  cardHeader: PropTypes.element,
  cardBody: PropTypes.element,
  cardFooter: PropTypes.element,
};

export default Card;
