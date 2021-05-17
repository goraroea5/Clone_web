import React from 'react';
import styled from 'styled-components';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import Navbar from './Navbar'


const Header = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: rgb(199, 173, 74);
  .image__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    z-index: -1;
    position: absolute;
    inset: 0px;
    background-size: cover;
    object-fit: cover;
    transition: opacity 0.3s ease 0s;
    opacity: 1;
  }
  h2 {
    font-size: 48px;
    font-weight: 300;
    line-height: 56px;
    color: rgb(255, 255, 255);
    white-space: pre-line;
    max-width: 516px;
    margin-top: 0;
    margin-bottom: .5em;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    color: rgb(255, 255, 255);
    max-width: 516px;
    margin-top: 0;
    margin-bottom: .5em;
  }
`;

const Content = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: 90px;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  color: rgb(190, 168, 86);
  background: rgb(28, 30, 33);
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  height: 50px;
  padding-left: 32px;
  padding-right: 32px;
  outline: none;
  transition: transform 100ms ease-in 0s;
  position: relative;
`;

const Button2 = styled.button`
    font-size: 20px;
    line-height: 23px;
    font-weight: 300;
    background-color: transparent;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 3px;
    cursor: pointer;
    transition: transform 300ms ease-in 0s;
    color: rgb(255, 255, 255);
    padding: 8px 20px 11px;
    margin: 0px 0px 0px 18px;
    width: auto;
    height:50px;
    max-width: 310px;
`;


const header = () => {
  return (
    <Header>
      <Navbar />
      <Content>
        <h2>
          Welche Nahrungsmittel verträgst du nicht? <br />
          Wir helfen dir dabei,<br />
          es rauszufinden.
        </h2>
        <p>
          Erfahre hier mit dem digitalen Schnelltest, welche Lebensmittel du künftig meiden solltest und mit welchen Alternativen dein Speiseplan abwechslungsreich bleibt.
        </p>
        <Button>Für Quick Check registrieren</Button> <Button2 > <PlayCircleOutlineIcon /> arbotena Video-Anleitung</Button2>
      </Content>
    </Header>
  )
}

export default header;