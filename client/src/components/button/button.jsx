import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './button.scss';

const Button = (props) => {
  const btnClass = cx(
    'btn',
    { 'btn--float-right': props.styles.floatRight },
  );

  return (
    <button className={btnClass}>{props.text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object,
};

Button.defaultProps = {
  text: '',
  styles: {},
};

export default Button;
