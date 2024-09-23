import { useGame } from "../../contexts/GameContext.jsx";
import Button from "../Button/index.jsx";
import Dice from "../Dice/index.jsx";
import styles from "./styles.module.scss";

function GameController({ onToggelModal }) {
  const { diceNum, rollDice, switchPlayer, holdScore, reset } = useGame();

  function handleHoldScore() {
    holdScore();
    switchPlayer();
  }

  return (
    <>
      <div className={styles.gamecontroller}>
        <div className={styles.btngrp}>
          <Button onClick={reset} alwaysEnable={true}>
            <i className="fa-solid fa-rotate-left"></i>
          </Button>
          <Button onClick={onToggelModal}>rules</Button>
        </div>
        <Dice diceNum={diceNum} />
        <div className={styles.btngrp}>
          <Button onClick={rollDice}>Roll</Button>
          <Button onClick={handleHoldScore}>Hold</Button>
        </div>
      </div>
    </>
  );
}

export default GameController;
