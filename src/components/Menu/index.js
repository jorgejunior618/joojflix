import React from 'react';

import ButtonLink from '../ButtonLink';

import Logo from '../../assets/logo.png';
import './menu.css';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="JoojFlix logo"/>
        </a>

        <ButtonLink className="ButtonLink" href="/">
          Novo vídeo
        </ButtonLink>
      </nav>
    </header>
  );
}

export default Menu;
