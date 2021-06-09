import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import Game from './components/Game';
import Deck from './helpers/Deck';
import Hand from './helpers/Hand';

const Container = styled.div`

`;

const deck = new Deck();
const playerHand = new Hand();
const dealerHand = new Hand();

function App() {

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: rgb(0, 78, 0);
    }
  `;

  return (
    <div>
      <GlobalStyle />
      <Game
        deck={deck}
        playerHand={playerHand}
        dealerHand={dealerHand}
      />
    </div>
  );
}

export default App;
