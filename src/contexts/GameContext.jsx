import { createContext, useContext, useReducer } from "react";
import { MAX_SCORE } from "../config.js";

const GameContext = createContext();

const actionTypes = {
  SCORED: "game/scored",
  SWITCH_PLAYER: "game/switch",
  HOLD: "game/hold",
  ENDS: "game/ends",
  RESTART: "game/restart",
  UPDATE_DICE: "game/update-dice",
};

const initailState = {
  diceNum: 1,
  currentScore: 0,
  currentPlayer: 1,
  winner: null,
  players: [
    {
      id: 1,
      name: "player 1",
      total: 0,
    },
    {
      id: 2,
      name: "player 2",
      total: 0,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.UPDATE_DICE:
      return { ...state, diceNum: action.payload };
    case actionTypes.SCORED:
      return { ...state, currentScore: state.currentScore + action.payload };
    case actionTypes.SWITCH_PLAYER:
      return { ...state, currentScore: 0, currentPlayer: action.payload };
    case actionTypes.HOLD:
      return { ...state, players: action.payload };
    case actionTypes.ENDS:
      return { ...state, winner: action.payload };
    case actionTypes.RESTART:
      return { ...initailState };
    default:
      throw new Error("Error unknown action type");
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initailState);
  const { diceNum, winner, players, currentPlayer, currentScore } = state;

  function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    dispatch({ type: actionTypes.UPDATE_DICE, payload: diceResult });

    if (diceResult === 1) {
      switchPlayer();
      return;
    }

    dispatch({ type: actionTypes.SCORED, payload: diceResult });
  }

  function switchPlayer() {
    const nextPlayerIndex = (currentPlayer % players.length) + 1;
    dispatch({ type: actionTypes.SWITCH_PLAYER, payload: nextPlayerIndex });
  }

  function holdScore() {
    const updatePlayers = players.map((player) => {
      if (player.id === currentPlayer) {
        if (player.total + currentScore >= MAX_SCORE)
          dispatch({ type: actionTypes.ENDS, payload: player });

        return { ...player, total: player.total + currentScore };
      }

      return player;
    });

    dispatch({ type: actionTypes.HOLD, payload: updatePlayers });
  }

  function reset() {
    dispatch({ type: actionTypes.RESTART });
  }

  return (
    <GameContext.Provider
      value={{
        diceNum,
        winner,
        players,
        currentPlayer,
        currentScore,
        rollDice,
        switchPlayer,
        holdScore,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const value = useContext(GameContext);
  if (value === undefined)
    throw new Error("GameContext must be used within GameProvier");
  return value;
}

export { GameProvider, useGame };
