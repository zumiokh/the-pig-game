import { useGame } from "../../contexts/GameContext.jsx";
import styles from "./styles.module.scss";

function Player({ player, isActive, color = "transparent" }) {
  const { currentPlayer, currentScore } = useGame();
  const isPlaterActive = currentPlayer === player.id;

  return (
    <div
      className={`${styles.player} ${
        isPlaterActive ? "" : styles.hidden_on_shrink
      }`}
      style={{ backgroundColor: color }}
    >
      {!isActive && <div className={styles.overlay}></div>}

      <div className={styles.playername}>{player.name} </div>

      <div className={`${styles.score_total}`}>
        <p>total score</p>
        <p className={styles.scoreval}>{player.total}</p>
      </div>

      <div className={styles.score}>
        <p>current score</p>
        <p className={styles.scoreval}>{isActive ? currentScore : 0}</p>
      </div>
    </div>
  );
}

export default Player;
