import styles from "./MyButton.module.css";

export default function MyButton({ text, }) {
  return <button className={styles.btn}>{text}</button>;
}
