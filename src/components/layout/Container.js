import styles from "./Container.module.css";
function Container(props){
  return(
    <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
  )
}
//os elementos filhos que estao encapsulados no Routes vao ser encaixados dentro dessa div

//eu nao quero q essa classe seja propagada para todos containers,so para aqueles q vem com ela em props



//ESSE CONTAINER É UM COMPONENTE ESTRUTURAL QUE VAI NOS AJUDAR A POSICIONAR MELHOR OS ELEMENTOS EM DIVERSAS PARTES DO PROJETO
export default Container