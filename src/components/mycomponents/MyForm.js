import styles from "./MyForm.module.css";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import Select from "./Select";
import { useEffect, useState } from "react";

export default function MyForm() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: { "Contenty-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);




  return (
    <form className={styles.myform}>
      <MyInput
        type="text"
        placeholder="Digite seu nome aqui"
        text="Digite seu nome:"
      />
      <Select name="category_id" text="Selecione uma categoria" categories={categories} />
      <MyButton text="Enviar" />
    </form>
  );
}
