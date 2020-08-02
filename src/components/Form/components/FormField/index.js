import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelForm, DivForm, InputForm,
} from './styles';

function FormField({
  label,
  type,
  name,
  value,
  onChange,
}) {
  const isTextArea = type === 'textarea';
  const as = isTextArea ? 'textarea' : 'input';
  return (
    <DivForm>
      <LabelForm>
        {`${label}: `}
      </LabelForm>
      <InputForm as={as} type={type} name={name} value={value} onChange={onChange} />
    </DivForm>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
