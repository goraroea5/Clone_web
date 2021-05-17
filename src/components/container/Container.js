import React from 'react';
import styled from 'styled-components';

import Profile from './Profile';
import IndexView from  './indexview/IndexView';
import IndexView2 from  './indexview/IndexView2';
import IndexView3 from  './indexview/IndexView3';

const Container = styled.div`
  width:90%;
  margin:0 auto;
`;

const container = () => {
  return (
    <Container>
      <Profile />
      <IndexView />
      <IndexView2 />
      <IndexView3 />
    </Container>
  )
}

export default container;