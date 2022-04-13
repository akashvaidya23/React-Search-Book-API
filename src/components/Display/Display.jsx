import styles from "./Display.module.css";
const Display = ({ value }) => {
  return <div className={styles.main}>{value}</div>;
};

export default Display;
