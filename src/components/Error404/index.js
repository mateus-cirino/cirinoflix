import React from 'react';
import { ContainerError } from './style.js';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Error404 () {
    return (
        <ContainerError>
            <a href="/">
                <img 
                    className="Logo"
                    src={Logo} 
                    alt="Logo do CirinoFlix" 
                />
            </a>
            <ContainerError.Title>
                Página não encontrada
            </ContainerError.Title>
            <Link to="/" 
                component={Button}
                as='a'>
                    Home
            </Link>
        </ContainerError>
    );
}

export default Error404;