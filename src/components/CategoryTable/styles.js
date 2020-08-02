import styled from 'styled-components';

const TableContainer = styled.div`
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

TableContainer.TdTitulo = styled.td`
    width: 20%;
    border: 1px solid #a9899e;
    padding: 5px;
`;

TableContainer.TdDescricao = styled.td`
    width: 50%;
    border: 1px solid #a9899e;
    padding: 5px;
`;

TableContainer.TdCor = styled.td`
    width: 10%;
    border: 1px solid #a9899e;
    padding: 5px;
`;

TableContainer.TdAcao = styled.td`
    width: 10%;
    border: 1px solid #a9899e;
    padding: 5px;
`;

export default TableContainer;
