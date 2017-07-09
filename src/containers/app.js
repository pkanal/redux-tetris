// @flow
import React from 'react';
import { connect } from 'react-redux';

import Grid from './grid';
import './app.css';
import { GAME_STATES } from '../constants';
import { startGame } from '../actions';

const App = ({
  gameState,
  startGame,
}) => {
  return (
    <div className='container'>
      <Grid />
      { gameState === GAME_STATES.NOT_STARTED && <div className='start-game-overlay'><button onClick={ startGame }>Start!</button></div> }
    </div>
  );
}

const mapStateToProps = state => ({
  gameState: state.gameState,
});

const actions = {
  startGame
};

export default connect(mapStateToProps, actions)(App);
