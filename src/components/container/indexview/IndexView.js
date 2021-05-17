import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { Wrapper } from './style';

const Content = styled.div`
  h1 {
    text-align: center;
    line-height: 37px;
    margin-bottom: 39px;
  }
`;


const Card = styled.div`
  padding: 32px;
  h4 {
    font-weight: 300;
    color: rgb(190, 168, 86);
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 18px;
    white-space: pre-line;
  }
  .subtitle {
    font-size: 24px;
    font-weight: 300;
    line-height: 28px;
    margin: 1em 0;
  }
  .description {
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    color: rgb(123, 123, 123);
  }
`;

const IndexView = () => {
  return (
    <Wrapper>
      <Content>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <h1>Unsere Lösungen für dein Wohlbefinden</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={6}>
                <video autoPlay loop width="100%" src= "/video1.mp4" />
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <h4>Individuelle Ernährungsempfehlungen für dich</h4>
                  <div className="subtitle">arbotena Test</div>
                  <p className="description">Spare dir teure wie zeitaufwendige Bluttests. In nur fünf Minuten zum Ergebnis. Auch Alternativen für deinen Speiseplan werden dir angezeigt.</p>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
            <Grid container>
              <Grid item xs={6}>
                <video autoPlay loop width="100%" src= "/video1.mp4" />
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <h4>Individuelle Ernährungsempfehlungen für dich</h4>
                  <div className="subtitle">arbotena Test</div>
                  <p className="description">Spare dir teure wie zeitaufwendige Bluttests. In nur fünf Minuten zum Ergebnis. Auch Alternativen für deinen Speiseplan werden dir angezeigt.</p>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </Wrapper>
  )
}

export default IndexView;