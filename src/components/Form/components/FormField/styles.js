import styled from 'styled-components';

export const DivForm = styled.div`
    background: #53585d;
    margin: 20px 0px 20px 0px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    color: #bbbbbc;
`;

export const LabelForm = styled.label`
    color: inherit;
    position: relative;

`;

export const InputForm = styled.input`
    background-color: inherit;
    color: inherit;
    border:none;
    margin: 2px;
    width: 100%;
    &:focus{
        color: white
    }
`;

export const InputTextAreaForm = styled.textarea`
    background-color: inherit;
    color: inherit;
    border:none;
    margin: 2px;
    width: 100%;
    &:focus{
        color: white
    }
`;
