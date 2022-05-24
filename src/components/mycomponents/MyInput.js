import styles from "./MyInput.module.css";

export default function MyInput({ text,type,placeholder }) {
  return (
      <div className={styles.myinput}>
          <label>{text}</label>
          <input type={type} placeholder={placeholder} />
      </div>
  );
}
