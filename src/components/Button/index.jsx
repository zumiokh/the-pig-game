import { useGame } from "../../contexts/GameContext.jsx";
import styles from "./styles.module.scss";

function Button({ children, onClick = () => {}, alwaysEnabled = false }) {
  const { winner } = useGame();

  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={!alwaysEnabled && winner}
    >
      {children}
    </button>
  );
}

export default Button;
