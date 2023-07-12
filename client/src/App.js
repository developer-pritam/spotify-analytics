import React, { useState, useEffect } from 'react';
import { token } from './spotify';

import LoginScreen from './components/LoginScreen';
import Profile from './components/Profile';

import styled from 'styled-components';
import { GlobalStyle } from './styles';

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;
`;

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    setAccessToken(token);
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />

      {accessToken ? <Profile /> : <LoginScreen />}
    </AppContainer>
  );
};

export default App;
