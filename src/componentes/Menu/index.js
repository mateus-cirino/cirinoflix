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
                as='a'
                className="ButtonLink" 
                href='/'>
                Novo Vídeo
            </Botao>
        </nav>
    );
}

export default Menu; 