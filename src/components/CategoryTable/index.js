import React from 'react';
import {TableContainer} from './style.js'

function CategoryTable({categorias}) {
    return(
        <TableContainer>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Cor</th>
                </tr>
            </thead>
            <tbody>
                {
                    categorias.map((categoria, index) => {
                        return (
                            <tr key={`${categoria}${index}`}>
                                <td>{categoria.nome}</td>
                                <td>{categoria.descricao}</td>
                                <td>{categoria.cor}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        </TableContainer>
    );
}

export default CategoryTable;