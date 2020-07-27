import React from 'react';

function Botao(props) {
    return (
        <a 
            className={props.nomeDaClasse} 
            href={props.enderecoDoLink}>
            {props.nomeDoLink}
        </a>
    );
}

export default Botao; 