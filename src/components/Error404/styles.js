import styled from 'styled-components';

const ContainerError = styled.div`
    height: 100vh;
    background-color: #141414;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: -94px;  
                        /* 
                        somente para corrigir os 94px adicionados na variavel
                        bodyPaddingTop (Desktop) no src/components/Menu/Menu.css
                        */
    @media (max-width: 800px) {
        margin-top: -40px; 
                        /* 
                        somente para corrigir os 40px adicionados na variavel
                        bodyPaddingTop (Mobile) no src/components/Menu/Menu.css
                        */
    }
`;

ContainerError.Title = styled.h1`
    color: white;
    font-size: 1.3em;
`;

export default ContainerError;
