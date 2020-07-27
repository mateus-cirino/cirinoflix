import React from 'react';
import Logo from '../../assets/logo.png';
import '../Menu/Menu.css'
import Botao from '../Botao';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img 
                    className="Logo"
                    src={Logo} 
                    alt="Logo do site CirinoFlix" 
                />
            </a>
            <Botao
                nomeDaClasse="ButtonLink"
                enderecoDoLink="/"
                nomeDoLink="Novo Vídeo"
            />
        </nav>
    );
}

export default Menu; 