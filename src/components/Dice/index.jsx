import styles from "./styles.module.scss";

const dotsConfig = {
  1: [4],
  2: [2, 6],
  3: [2, 4, 6],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 1, 2, 6, 7, 8],
};

function Dice({ diceNum }) {
  const dots = dotsConfig[diceNum] || [];

  return (
    <div className={styles.dicebg}>
      <div className={styles.dice}>
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className={`${styles.cell} ${
              dots.includes(index) ? styles.dot : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Dice;
