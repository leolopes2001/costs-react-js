import styles from "./SubmitBtn.module.css"

export default function SubmitBtn({text}){
    return <button className={styles.btn}>{text}</button>
}