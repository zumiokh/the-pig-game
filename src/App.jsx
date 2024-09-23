import { useEffect, useState } from "react";
import GameController from "./components/GameController/index.jsx";
import Modal from "./components/Modal/index.jsx";
import Player from "./components/Player/index.jsx";
import Popup from "./components/Popup/index.jsx";
import Scorebar from "./components/Scorebar/index.jsx";
import { useGame } from "./contexts/GameContext.jsx";
import Markdown from "react-markdown";

function App() {
  const { winner, players, currentPlayer } = useGame();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rules, setRules] = useState("");

  useEffect(() => {
    fetch("./rules.md")
      .then((res) => res.text())
      .then((text) => setRules(text));
  }, []);

  return (
    <>
      <div className="app">
        <GameController onToggelModal={() => setIsModalOpen(true)} />
        <Scorebar />
        {players.map((player, i) => (
          <Player
            key={player.id}
            player={player}
            isActive={currentPlayer === i + 1}
            color={i % 2 === 0 ? "transparent" : "#2f4858"}
          />
        ))}
      </div>
      {winner !== null && <Popup />}
      {isModalOpen && (
        <Modal header="Game Rules" onCloseModal={() => setIsModalOpen(false)}>
          <Markdown>{rules}</Markdown>
        </Modal>
      )}
    </>
  );
}

export default App;
