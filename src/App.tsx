import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Card } from './components/Card';

const Container = styled.div`

`;

function App() {
  return (
    <Container>
      <h1>Blackjack</h1>
        <Card />

    </Container>
  );
}

export default App;
