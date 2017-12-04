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
        <p className="input__label input__label--large input__label--no-margin">Please enter your username</p>
        <input className={inputTextBoxClass} id="username" type="text" />
      </label>
    </div>
  );
};

FormInput.propTypes = {
  styles: PropTypes.object,
};

FormInput.defaultProps = {
  styles: {},
};

export default FormInput;
