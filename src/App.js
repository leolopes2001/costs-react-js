import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

import Home from "./components/pages/home/Home";
import Contact from "./components/pages/contact/Contact";
import Company from "./components/pages/company/Company";
import NewProject from "./components/pages/newproject/NewProject";
import Container from "./components/layout/Container";
import Projects from './components/pages/projects/Projects'

import MyPage from './components/pages/mypage/MyPage'

function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}
export default App;
