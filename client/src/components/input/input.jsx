import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './input.scss';

const Input = (props) => {
  const inputContainerClass = cx(
    'input__container',
    { 'input__container--short-width': props.styles.shortWidth },
    { 'input__container--inline-block': props.styles.inlineBlock },
  );

  const inputTextBoxClass = cx(
    'input__textbox',
    'input__textbox--extra-margin',
    { 'input__textbox--center': props.styles.center },
    { 'input__textbox--no-margin': props.styles.noMargin },
  );

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && props.callback) {
      props.callback();
    }
  };

  return (
    <label htmlFor="input" className={inputContainerClass}>
      {/* ... is a es6 spread syntax, lets you put everything in input into the element. */}
      <input
        className={inputTextBoxClass}
        id="input"
        type="text"
        onKeyPress={handleKeyPress}
        autoComplete="off"
        {...props.input}
      />
    </label>
  );
};

Input.propTypes = {
  styles: PropTypes.object,
  input: PropTypes.object,
  callback: PropTypes.func,
};

Input.defaultProps = {
  styles: {},
  input: null,
  callback: null,
};

export default Input;
