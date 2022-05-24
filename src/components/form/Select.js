import styles from "./Select.module.css";

export default function Select({ text, name, handleOnChange, options, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}</label>
      <select
        onChange={handleOnChange}
        name={name}
        id={name}
        value={value || ""}
      >
        <option>Selecione uma opção</option>
        {options.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
}
