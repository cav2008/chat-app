import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './form-input.scss';

const FormInput = (props) => {
  const inputTextBoxClass = cx(
    'input__textbox',
    'input__textbox--extra-margin',
    { 'input__textbox--center': props.styles.center },
  );

  return (
    <div className="input">
      <label htmlFor="username" className="input__container">
        <p className="input__label input__label--large input__label--no-margin">
          Please enter your username
        </p>
        {/* ... is a es6 spread syntax, lets you put everything in input into the element. */}
        <input className={inputTextBoxClass} id="username" type="text" {...props.input} />
      </label>
    </div>
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
