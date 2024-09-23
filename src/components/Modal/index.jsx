import styles from "./styles.module.scss";

function Modal({ children, header = "", onCloseModal }) {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h2>{header}</h2>
          <div onClick={onCloseModal}>
            <i className="fa fa-times fa-lg"></i>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
