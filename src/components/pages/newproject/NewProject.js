import ProjectForm from "../../project/ProjectForm";
import styles from "./NewProject.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";


function NewProject() {
  /*Permite fazer redirecte quando fazer opost */

  const navigate = useNavigate();

  function createPost(project) {
    //initialize cost and services

    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        //redirect
        navigate('/projects', {message: "Projeto criado com sucesso"})
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.divProjetos}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}
export default NewProject;
/* é possivel mandar metodos por meio de propriedades*/