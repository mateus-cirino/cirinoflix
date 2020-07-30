import React from 'react';
import { LabelForm, DivForm, InputForm, InputTextAreaForm } from './styles.js';

function FormField({
    label,
    type,
    name,
    onChange
}) {
    return (
        <DivForm>
        <LabelForm>
            {`${label}: `}
        </LabelForm>
        {(type !== 'textarea') 
            ? <InputForm type={type} name={name} onChange={onChange}/>
            : <InputTextAreaForm name={name} onChange={onChange}/>}
        </DivForm>
    );
}

export default FormField;