import React from 'react';
import Logo from '../../assets/logo.png';
import './Menu.css';
import { ButtonLink } from '../Button/styles';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img
          className="Logo"
          src={Logo}
          alt="Logo do CirinoFlix"
        />
      </a>
      <ButtonLink
        as="a"
        className="Button"
        href="/"
        newVideo
      >
        Novo Vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
