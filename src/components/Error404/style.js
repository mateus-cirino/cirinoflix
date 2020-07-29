import styled from 'styled-components';

export const ContainerError = styled.div`
    height: 100vh;
    background-color: #141414;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: -94px; /* 
                        somente para corrigir os 94px adicionados na variavel
                        bodyPaddingTop no src/components/Menu/Menu.css
                        */
`;

ContainerError.Title = styled.h1`
    color: white;
    font-size: 1.3em;
`;