import React from 'react';
import styled from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import DarkThemeProvider from './DarkThemeProvider';
import DarkThemeToggle from './DarkThemeToggle';
import './App.css';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${(props) => props.theme.theme === 'dark' ? '#2d2d2d' : '#fff'};
  color: ${(props) => props.theme.theme === 'dark' ? '#fff' : '#000'};
`;

const SwitchTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 75px;
`;

const App = () => (
  <ReduxProvider store={store}>
    <DarkThemeProvider>
      <React.Fragment>
        <SwitchTheme>
          <h1>Theme App</h1>
          <DarkThemeToggle />
        </SwitchTheme>
        <Container>
          <h2>Welcome!</h2>
          <h3>Full Stack Web Development</h3>
        </Container>
      </React.Fragment>
    </DarkThemeProvider>
  </ReduxProvider>
);

export default App;
