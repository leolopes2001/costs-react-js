import { Link } from "react-router-dom";
import currency from "../../img/costs_logo.png";
import styles from "./NavBar.module.css";
import Container from "../layout/Container";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Container>
        <Link to="/">
          <img src={currency} alt="Costs"></img>
        </Link>

        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.item}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={styles.item}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="/company" className={styles.item}>
              Empresa
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.item}>
              Contato
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default NavBar;
