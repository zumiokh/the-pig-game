import { useGame } from "../../contexts/GameContext.jsx";
import styles from "./styles.module.scss";

function Scorebar() {
  const { players } = useGame();
  return (
    <div className={styles.scorebar}>
      {players.map((player) => (
        <div key={player.id} className={styles.card}>
          <span>{player.name} total</span>
          <span>{player.total}</span>
        </div>
      ))}
    </div>
  );
}

export default Scorebar;
