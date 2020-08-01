import React from 'react';
import { Link } from 'react-router-dom';
import FooterBase from './styles';
import Logo from '../../assets/logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo do CirinoFlix" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <div>
        <p>Links úteis</p>
        <Link to="/cadastro/categoria">Cadastrar uma categoria</Link>
      </div>
    </FooterBase>
  );
}

export default Footer;
