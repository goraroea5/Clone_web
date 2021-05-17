import React from 'react';
import { Grid } from '@material-ui/core';
import { Wrapper } from './style';
import styled from 'styled-components';

import Pic from '../../../images/Pic1.png'

const Content = styled.div`
  h1 {
    font-weight: 300;
    white-space: pre-line;
    color: rgb(2, 2, 2);
    line-height: 46px;
    font-size: 40px;
    padding-bottom: 8px;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    color: rgb(28, 30, 33);
    padding-bottom: 32px;
    position: relative;
  }

  img {
    object-fit: cover;
    z-index: 1;
    max-width: 564px;
    width: 100%;
    height: 100%;
  }
`;

const IndexView2 = () => {
  return (
    <Wrapper>
      <Content>
        <Grid container justify="space-between">
          <Grid item xs={12} md={6} >
            <h1>
              Habe ich eine Nahrungsmittelunverträglichkeit?
            </h1>
            <p>Was kann ich dagegen tun?</p>
            <p>
            Magen-Darm-Beschwerden, Kopfschmerzen, Hautprobleme? Dahinter kann die Ernährung – und eine Nahrungsmittelunverträglichkeit – stecken. Mit arbotena, dem digitalen Schnell-Test, kannst du prüfen, ob das vielleicht auch bei dir der Fall ist. Der arbotena-Test analysiert datenbasiert Symptome von Menschen und kann dadurch Rückschlüsse auf Unverträglichkeiten von Nahrungsmitteln ziehen. Das Ganze funktioniert mithilfe eines digitalen Anamnesebogens. Innerhalb von wenigen Minuten erhältst du dein persönliches Ergebnis.
            </p>
          </Grid>
          <Grid item xs={12} md={5}>
            <img src={Pic} />
          </Grid>
        </Grid>
      </Content>
    </Wrapper>
  )
}

export default IndexView2;
