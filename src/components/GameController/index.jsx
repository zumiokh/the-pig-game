import { useState } from "react";
import { useGame } from "../../contexts/GameContext.jsx";
import Button from "../Button/index.jsx";
import Dice from "../Dice/index.jsx";
import styles from "./styles.module.scss";

function GameController() {
  const { diceNum, rollDice, switchPlayer, holdScore, reset } = useGame();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleHoldScore() {
    holdScore();
    switchPlayer();
  }

  return (
    <div className={styles.gamecontroller}>
      <div className={styles.btngrp}>
        <Button onClick={reset} alwaysEnable={true}>
          <i className="fa-solid fa-rotate-left"></i>
        </Button>
        <Button onClick={() => setIsModalOpen(true)}>rules</Button>
      </div>
      <Dice diceNum={diceNum} />
      <div className={styles.btngrp}>
        <Button onClick={rollDice}>Roll</Button>
        <Button onClick={handleHoldScore}>Hold</Button>
      </div>
      {isModalOpen && <div className={styles.modal}>test</div>}
    </div>
  );
}

export default GameController;
