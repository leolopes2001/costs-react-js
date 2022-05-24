import styles from "./MyPage.module.css";
import MyForm from "../../mycomponents/MyForm"
import LinkButton from "../../button/LinkButton";


export default function MyPage() {
  return (
    <section className={styles.mypage}>
      <h1>Essa é minha pagina</h1>
      <p>É uma pagina de testes</p>
      <MyForm />
      <LinkButton to="/" text="Voltar para Home" />
    </section>
  );
}
