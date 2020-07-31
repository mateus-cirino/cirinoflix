import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelForm, DivForm, InputForm, InputTextAreaForm,
} from './styles';

function FormField({
  label,
  type,
  name,
  onChange,
}) {
  return (
    <DivForm>
      <LabelForm>
        {`${label}: `}
      </LabelForm>
      {(type !== 'textarea')
        ? <InputForm type={type} name={name} onChange={onChange} />
        : <InputTextAreaForm name={name} onChange={onChange} />}
    </DivForm>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
