import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/Logo.png'

const Navbar = styled.div`
  width: 90%;
  height:115px;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

const Menu = styled.ul`
    list-style-type: none;
    li {
      display: inline;
      margin: 10px;
    }
`;


const navbar = () => {
  return (
    <Navbar>
      <div>
        <img src={ Logo } />
      </div>
      <Menu>
        <li>Start</li>
        <li>Über arbotena</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Video</li>
        <li>FAQ</li>
        <li>Einloggen</li>
        <li>Register</li>
      </Menu>
    </Navbar>
  )
}

export default navbar;