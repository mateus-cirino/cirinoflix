import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './styles';
import Edit from '../../assets/edit.png';
import Delete from '../../assets/delete.png';

function CategoryTable({ categorias }) {
  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <tr>
            <TableContainer.TdTitulo>Título</TableContainer.TdTitulo>
            <TableContainer.TdDescricao>Descrição</TableContainer.TdDescricao>
            <TableContainer.TdCor>Cor</TableContainer.TdCor>
            <TableContainer.TdEditar>Editar</TableContainer.TdEditar>
            <TableContainer.TdDeletar>Deletar</TableContainer.TdDeletar>
          </tr>
        </TableContainer.Thead>
        <TableContainer.Tbody>
          {
                    categorias.map((categoria) => (
                      <tr key={`${categoria.id}`}>
                        <TableContainer.TdTitulo>
                          {categoria.titulo}
                        </TableContainer.TdTitulo>
                        <TableContainer.TdDescricao>
                          {categoria.descricao}
                        </TableContainer.TdDescricao>
                        <TableContainer.TdCor>
                          {categoria.cor}
                        </TableContainer.TdCor>
                        <TableContainer.TdEditar>
                          <img src={Edit} alt="Icone para edição" />
                        </TableContainer.TdEditar>
                        <TableContainer.TdDeletar>
                          <img src={Delete} alt="Icone para exclusão" />
                        </TableContainer.TdDeletar>
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
