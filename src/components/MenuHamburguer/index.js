import React from 'react';
import { Container } from './styles';

function MenuHamburguer() {
  return (
    <Container>
      <input id="menu-hamburguer" type="checkbox" />
      <label htmlFor="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer" />
        </div>
      </label>
      
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>

        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </Container>
  );
}

export default MenuHamburguer;
