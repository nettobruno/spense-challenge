// Dependencies
import React from 'react';

// Components
import MenuHamburguer from '../../components/MenuHamburguer';

// Images


// Styles
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <MenuHamburguer />
      <div className="container">
        <h1>HomePage</h1>
      </div>
    </Container>
  );
}

export default Home;
