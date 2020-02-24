import React from 'react';
import PropTypes from 'prop-types';

const LabelItem = ({ label }) => {
  const { id, name } = label;

  return (
    <li>
      <a href='#!'>{name}</a>
    </li>
  );
};

LabelItem.propTypes = {
  label: PropTypes.object.isRequired
};

export default LabelItem;
