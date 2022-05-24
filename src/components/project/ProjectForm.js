import { useEffect, useState } from "react";

import Input from "../form/Input";
import styles from "./ProjectForm.module.css";
import Select from "../form/Select";
import SubmitBtn from "../form/SubmitBtn";

function ProjectForm({ handleSubmit, btnText}) {
  const [categories, setCategories] = useState([]);
  
  const [project, setProject] = useState({});
  // const [project, setProject] = useState(projectData || {});

  
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault(); // não deixa o form ser enviado no page reload
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }
  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        placeholder="Insira o orçamento total"
        name="budget"
        text="Orçamento do projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />

      <Select
        name="category_id"
        text="Selecione a cateogria"
        handleOnChange={handleCategory}
        options={categories}
        value={project.category ? project.category.id : ''}
      />

      <SubmitBtn text={btnText} />
    </form>
  );
}
export default ProjectForm;
