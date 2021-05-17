import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components'
import { Wrapper } from './style';

import Iphone from '../../../images/iphone.png'

const TextHeader = styled.div`
  font-family: Roboto, system-ui;
  font-size: 32px;
  font-weight: 300;
  line-height: 37px;
  color: rgb(2, 2, 2);
  margin-bottom: 41px;
`;

const Image = styled.div`
  .background {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    max-width: 455px;
    width: 100%;
    height: 455px;
    background: rgb(245, 241, 228);
    border-top-right-radius: 90px;
    border-bottom-left-radius: 90px;
  }
  img {
    float: right;
    max-width: 231px;
    width: 100%;
    height: 500px;
    object-fit: cover;
    margin-top: 40px;
    vertical-align: middle;
    border-style: none;
  }
`;


const Sequence = styled.div`
  .number__wrapper {
    display: flex;
    align-items: center;
    margin: 10px 0; 
    font-size: 24px;
    font-weight: 300;
  }
  .number {
    display:block;
    width: 48px;
    height:48px;
    line-height: 48px;
    font-size: 32px;
    font-weight: 300;
    font-style: italic;
    color: rgb(190, 168, 86); 
    box-shadow: rgb(94 89 77 / 10%) 0px 5px 20px -2px;
    text-align: center;
    border-radius: 50%;
    margin-right:10px;
  }
`;


const indexView = () => {
  return (
    <Wrapper>
      <Grid container justify="space-between" >
        <Grid item  md={12} lg={4}>
          <div className="background"></div>
          <Image>
            <img src={ Iphone } />
          </Image>
        </Grid>
        <Grid item md={6}>
          <TextHeader>Der arbotena Test - so funktioniert’s</TextHeader>
          <Sequence>
            <div className="number__wrapper">
              <div className="number">1</div>
              <div> Registriere dich auf arbotena.de</div>  
            </div>
            <div className="number__wrapper">
              <div className="number">2</div>
              <div>Logge dich ein</div>  
            </div>
            <div className="number__wrapper">
              <div className="number">3</div>
              <div>Starte jetzt deinen arbotena Test</div>  
            </div>
            <div className="number__wrapper">
              <div className="number">4</div>
              <div> Registriere dich auf arbotena.de</div>  
            </div>
            <div className="number__wrapper">
              <div className="number">5</div>
              <div>Erhalte deine persönliche Auswertung</div>  
            </div>
          </Sequence>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default  indexView;