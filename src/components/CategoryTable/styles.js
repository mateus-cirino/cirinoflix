import styled from 'styled-components';

export const TableContainer = styled.div`
    color: white;
`;

TableContainer.Table = styled.table`
    width: 100%;
    border: 1px solid #bbbbbc;
    border-collapse: collapse;
    text-align: center;
`;

TableContainer.Thead = styled.thead`
    width: 100%;
    color: #bbbbbc;
`;

TableContainer.Tbody = styled.tbody`
    width: 100%;
`;

TableContainer.TdNome = styled.td`
    width: 20%;
    border: 1px solid #a9899e;
    padding: 5px;
`;

TableContainer.TdDescricao = styled.td`
    width: 60%;
    border: 1px solid #a9899e;
    padding: 5px;
`;

TableContainer.TdCor = styled.td`
    width: 20%;
    border: 1px solid #a9899e;
    padding: 5px;
`;