import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Navbar, Container } from "react-bootstrap";
import Cards from "./components/Cards";
import Cards2 from "./components/Cards2";
import sei from "./img/seiXS_2.png";
import buenTreino from "./img/buenTreinoXS_2.png";
import arq from "./img/arqXS_2.png";
import yo from "./img/yain_pixel.png";
import bg from "./img/bg/01.jpg";
import study from "./img/aniStudy.gif";
import run from "./img/aniRun.gif";
import work from "./img/aniWork.gif";
function App() {
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Navbar className="nav" data-bs-theme="dark">
        <Container style={{ justifyContent: "center" }}>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        </Container>
      </Navbar>

      <div className="m-0 px-3" style={{ position: "relative" }}>
        <article
          className="banner m-0 p-0 row align-items-center d-flex"
          style={{
            position: "relative",
            zIndex: 1,
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Col className="col-xs-auto" />
          <Col
            className="d-flex yain"
            style={{
              Width: "613px",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div className="">
              <p className="pixel2 mb-1">Yain Godoy</p>
              <p className="silka2 ">
                Desarrollador Frontend <br /> con interes en UI/UX
              </p>
              <div className="icon">
                <a
                  href="https://www.linkedin.com/in/yain-andres-godoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <a
                  href="https://github.com/yain09"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <a
                  href="https://drive.google.com/file/d/1mqqPbyRAKe6YSbgztZ2ZPfK2HAp_rlwU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>
            <img src={yo} className="yo" alt="" />
          </Col>
          <Col className="col-xs-auto" />
        </article>
      </div>

      <div
        className="cardSection m-0"
        style={{ background: "#2B2B2B", columnGap: "16px" }}
      >
        <Cards2
          title="SEI"
          txt='Pagina web de la asignatura "Sistemas Estructurales I" de la Facultad de Arquitectura de la UNL.'
          img={study}
          link="#link1"
        />
        <Cards2
          title="BuenTreino"
          txt="Proyecto colaborativo en proceso. Enfocado a personal trainers permitiendo la administración de grupos, brindando información sobre la percepción del entrenamiento."
          img={run}
          link="#link2"
        />
        <Cards2
          title="Portfolio ARQ"
          txt="Portfolio profesional de Arquitectura donde se condensan mis trabajos desarrollados en los ultimos años"
          img={work}
          link="#link3"
        />
      </div>
    </>
  );
}

export default App;
