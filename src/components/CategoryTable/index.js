import React from 'react';
import {TableContainer} from './styles.js'

function CategoryTable({categorias}) {
    return(
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
                    categorias.map((categoria, index) => {
                        return (
                            <tr key={`${categoria}${index}`}>
                                <TableContainer.TdNome>{categoria.nome}</TableContainer.TdNome>
                                <TableContainer.TdDescricao>{categoria.descricao}</TableContainer.TdDescricao>
                                <TableContainer.TdCor>{categoria.cor}</TableContainer.TdCor>
                            </tr>
                        );
                    })
                }
            </TableContainer.Tbody>
        </TableContainer.Table>
        </TableContainer>
    );
}

export default CategoryTable;