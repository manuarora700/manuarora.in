import styles from "./Loader.module.css";
export default function Loader({ show }) {
  return show ? <div className={styles.loader}></div> : null;
}
