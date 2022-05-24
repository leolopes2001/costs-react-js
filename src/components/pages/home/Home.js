import pig from "../../../img/savings.svg";
import styles from "./Home.module.css";
import LinkButton from "../../button/LinkButton";

function Home() {
  return (
    <section className={styles.divHome}>
      <h1>
        Bem vidno ao <span>Costs</span>
      </h1>
      <p>Comece a gerenciar ps seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar projeto" />
      <LinkButton to="/mypage" text="Ir Para MyPAGE " />
      <img src={pig} />
    </section>
  );
}

export default Home;
