import React, { useEffect, useState } from "react";
import Cards2 from "./Cards2";
import { Col } from "react-bootstrap";
import bg from "../img/bg/01.jpg";
import yo from "../img/yain_pixel.png";
import study from "../img/aniStudy.gif";
import run from "../img/aniRun.gif";
import work from "../img/aniWork.gif";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 576 && (
        <div
          className="m-0 row align-items-center d-flex"
          style={{
            padding: "16px",
            position: "relative",
            zIndex: 1,
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
          }}
        >
          <div
            xs={10}
            className="d-flex yain"
            style={{
              width: "613px",
              justifyContent: "space-evenly",
              alignItems: "center",
              background: "rgba(245, 245, 245, 0.9)",
            }}
          >
            <div className="text-center">
              <p className="pixel2 mb-1">Yain Godoy</p>
              <p className="silka2">
                Desarrollador Frontend <br /> con interés en UI/UX
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
            <img src={yo} className="yo" alt="Yain Godoy" />
          </div>
        </div>
      )}

      {windowWidth > 576 && (
        <div className="m-0 px-3">
          <div
            className="banner m-0 p-0 row align-items-center d-flex"
            style={{
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
                width: "613px",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div>
                <p className="pixel2 mb-1">Yain Godoy</p>
                <p className="silka2">
                  Desarrollador Frontend <br /> con interés en UI/UX
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
              <img src={yo} className="yo" alt="Yain Godoy" />
            </Col>
            <Col className="col-xs-auto" />
          </div>
        </div>
      )}

      <div
        className="cardSection m-0"
        style={{ background: "#2B2B2B", columnGap: "16px" }}
      >
        <Cards2
          title="SEI"
          txt='Página web de la asignatura "Sistemas Estructurales I" de la Facultad de Arquitectura de la UNL.'
          img={study}
          link="/PortfolioDev-SEI"
        />
        <Cards2
          title="BuenTreino"
          txt="Proyecto colaborativo en proceso. Enfocado a personal trainers permitiendo la administración de grupos, brindando información sobre la percepción del entrenamiento."
          img={run}
          link="/PortfolioDev-BuenTreino"
        />
        <Cards2
          title="Portfolio ARQ"
          txt="Portfolio profesional de Arquitectura donde se condensan mis trabajos desarrollados en los últimos años."
          img={work}
          link="/PortfolioDev-PortfolioArq"
        />
      </div>
    </>
  );
}

export default Home;
