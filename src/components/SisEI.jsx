import React, { useEffect, useState } from "react";
import Cards2 from "./Cards2";
import { Col } from "react-bootstrap";
import bg from "../img/bg/sei_01.webp";
import bg2 from "../img/bg/sei_02.webp";
import run from "../img/aniRun.gif";
import study from "../img/aniStudy.gif";
import work from "../img/aniWork.gif";

function SisEI() {
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
  const [linkto, setLinkto] = useState("https://yain09.github.io/SEI/");
  const [color, setColor] = useState("#FF137E");
  const [title, setTitle] = useState("SEI");
  const [txt, setTxt] = useState(
    'Página web de la asignatura "Sistemas Estructurales I" de la Facultad de Arquitectura, Diseño y Urbanismo de la Universidad Nacional del Litoral.'
  );
  const [txt2, setTxt2] =
    useState('Desarrollada con las tecnologías: React Js, Bootstrap 5, GoogleSheet como base de datos y GitHub como versionador.');
    
  return (
    <>
       {windowWidth < 576 && (
        <>
          <article
            className="maxed2 m-0 row align-items-center d-flex"
            style={{
              position: "relative",
              zIndex: 1,
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          />
          <div className="textbg2 d-flex flex-column" style={{ justifyContent: "space-between" }}>
              <div>
                <h3 className="pixel2 mt-0" style={{ color: color }}>
                  {title}
                </h3>
                <p
                  className="silka2"
                  style={{
                    textWrap: "pretty",
                    textAlign: "justify",
                    fontSize: "12px",
                  }}
                >
                  {txt}
                  <br />
                  {txt2}
                </p>
                </div>
                <a
                  className="ir"
                  href={linkto}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{alignSelf:"self-end"}}
                >
                  Ver Proyecto
                </a>
          </div>
        </>
      )}
      {windowWidth > 576 && (
        <div className="m-0 px-3">
          <article
            className="maxed m-0 row align-items-center d-flex"
            style={{
              position: "relative",
              zIndex: 1,
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <Col
              className="d-flex"
              sm={8}
              md={6}
              lg={4}
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div className="textbg d-flex flex-column" style={{ justifyContent: "space-between" }}>
              <div>
                <h3 className="pixel2 mt-0" style={{ color: color }}>
                  {title}
                </h3>
                <p
                  className="silka2"
                  style={{
                    textWrap: "pretty",
                    textAlign: "justify",
                    fontSize: "12px",
                  }}
                >
                  {txt}
                  <br />
                  {txt2}
                </p>
                </div>
                <a
                  className="ir"
                  href={linkto}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Proyecto
                </a>
              </div>
            </Col>
          </article>
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
          none
          bg="rgba(245, 245, 245, 0.2)"
        />
        <Cards2
          title="BuenTreino"
          txt="Proyecto colaborativo en proceso. Enfocado a personal trainers permitiendo la administración de grupos, brindando información sobre la percepción del entrenamiento."
          img={run}
          link="/PortfolioDev-BuenTreino"
        />
        <Cards2
          title="Portfolio ARQ"
          txt="Portfolio profesional de Arquitectura donde se condensan mis trabajos desarrollados en los últimos años"
          img={work}
          link="/PortfolioDev-PortfolioArq"
        />
      </div>
    </>
  );
}

export default SisEI;
