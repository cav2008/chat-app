import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './form-input.scss';

const FormInput = (props) => {
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

  return (
    <label htmlFor="input" className={inputContainerClass}>
      {/* ... is a es6 spread syntax, lets you put everything in input into the element. */}
      <input className={inputTextBoxClass} id="input" type="text" {...props.input} />
    </label>
  );
};

FormInput.propTypes = {
  styles: PropTypes.object,
  input: PropTypes.object,
};

FormInput.defaultProps = {
  styles: {},
  input: null,
};

export default FormInput;
