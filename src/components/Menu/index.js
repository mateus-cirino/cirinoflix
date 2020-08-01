import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Menu.css';
import { ButtonLink } from '../Button/styles';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img
          className="Logo"
          src={Logo}
          alt="Logo do CirinoFlix"
        />
      </Link>
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
