import GameController from "./components/GameController/index.jsx";
import Player from "./components/Player/index.jsx";
import Popup from "./components/Popup/index.jsx";
import Scorebar from "./components/Scorebar/index.jsx";
import { useGame } from "./contexts/GameContext.jsx";

function App() {
  const { winner, players, currentPlayer } = useGame();

  return (
    <>
      <div className="app">
        <GameController />
        <Scorebar />
        {players.map((player, i) => (
          <Player
            key={player.id}
            player={player}
            isActive={currentPlayer === i + 1}
          />
        ))}
      </div>
      {winner !== null && <Popup />}
    </>
  );
}

export default App;
