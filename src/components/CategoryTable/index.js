import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './styles';

function CategoryTable({ categorias }) {
  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <tr>
            <TableContainer.TdNome>Nome</TableContainer.TdNome>
            <TableContainer.TdDescricao>Descrição</TableContainer.TdDescricao>
            <TableContainer.TdCor>Cor</TableContainer.TdCor>
          </tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {
                    categorias.map((categoria) => (
                      <tr key={`${categoria}`}>
                        <TableContainer.TdNome>
                          {categoria.nome}
                        </TableContainer.TdNome>
                        <TableContainer.TdDescricao>
                          {categoria.descricao}
                        </TableContainer.TdDescricao>
                        <TableContainer.TdCor>
                          {categoria.cor}
                        </TableContainer.TdCor>
                      </tr>
                    ))
                }
        </TableContainer.Tbody>
      </TableContainer.Table>
    </TableContainer>
  );
}

CategoryTable.propTypes = {
  categorias: PropTypes.arrayOf(Object).isRequired,
};

export default CategoryTable;
