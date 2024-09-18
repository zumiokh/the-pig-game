import { useGame } from "../../contexts/GameContext.jsx";
import Button from "../Button/index.jsx";
import styles from "./styles.module.scss";

function Popup() {
  const { winner, reset } = useGame();

  return (
    <div className={styles.popup}>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <p>{winner.name} wins</p>
        <Button onClick={reset} alwaysEnabled={true}>
          new game
        </Button>
      </div>
    </div>
  );
}

export default Popup;
