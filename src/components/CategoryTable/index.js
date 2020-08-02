import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './styles';
import Edit from '../../assets/edit.png';
import Delete from '../../assets/delete.png';

function CategoryTable({ categorias, edicao, exclusao }) {
  return (
    <TableContainer>
      <TableContainer.Table>
        <TableContainer.Thead>
          <tr>
            <TableContainer.TdTitulo>Título</TableContainer.TdTitulo>
            <TableContainer.TdDescricao>Descrição</TableContainer.TdDescricao>
            <TableContainer.TdCor>Cor</TableContainer.TdCor>
            <TableContainer.TdAcao>Editar</TableContainer.TdAcao>
            <TableContainer.TdAcao>Deletar</TableContainer.TdAcao>
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
                        <TableContainer.TdAcao>
                          <img
                            src={Edit}
                            alt="Icone para edição"
                            onClick={() => {
                              edicao(categoria);
                            }}
                          />
                        </TableContainer.TdAcao>
                        <TableContainer.TdAcao>
                          <img
                            src={Delete}
                            alt="Icone para exclusão"
                            onClick={() => {
                              exclusao(categoria);
                            }}
                          />
                        </TableContainer.TdAcao>
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
  edicao: PropTypes.func.isRequired,
  exclusao: PropTypes.func.isRequired,
};

export default CategoryTable;
