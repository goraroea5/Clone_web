import React from 'react';
import styled from 'styled-components'

import { Grid } from '@material-ui/core';
import ProfileImg from '../../images/ProfileImg.png';

const Wrapper = styled.div`
  padding: 46px 0;
  max-width: 1440px;
  margin: 0px auto;
  h1 {
    font-size: 40px;
    font-weight: 300;
    line-height: 47px;
    margin: 0px;
    color: rgb(28, 30, 33);
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;


const profile = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={6}>
          <img src={ ProfileImg } alt="" />
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <h1>
              Gesundheit ganzheitlich betrachten <br />
              Dr. med. Hans-Joachim Petersohn</h1>
          </Grid>
          <Grid item xs={12}>
            <p>
              Wir haben Dr. med. Hans-Joachim Petersohn für euch interviewt. Er ist Leiter des Gesundheitsinstitus „Salutomed“ und verfolgt den Ansatz einer ganzheitlichen Therapie: Statt nur Symptome zu behandeln, möchte er die Ursachen von gesundheitlichen Beschwerden ergründen. Die Ernährung spielt hier oft eine entscheidene Rolle. Ergänzend hat Dr. med. Petersohn Vitalstoffpräparate entwickelt, die der Körper nicht immer im ausreichenden Maße über die Ernährung aufnimmt. Welche das sind, lest ihr im Interview
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
    
  )
}

export default profile;