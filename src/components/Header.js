import React from 'react';
import Logo from '../assets/img/logo-2.png';
import Topo from '../assets/styles/HeaderStyle';
const Header = () => {
  return (
    <Topo>
      <img src={Logo} alt="Nordeste livros" />
      <h1>Nordeste Livros</h1>
    </Topo>
  );
};

export default Header;
