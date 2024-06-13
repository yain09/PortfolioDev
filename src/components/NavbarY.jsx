import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import home from "../img/home.png";
function NavbarY({ showImage = true }) {
  return (
    <Navbar className="nav" data-bs-theme="dark">
      <div className="d-flex align-items-start" style={{ marginLeft: "20px" }}>
        {showImage && (
          <Link to={"/PortfolioDev"}>
            <img src={home} alt="" style={{ marginRight: "16px" }} />
          </Link>
        )}
        <Link
          to={"/PortfolioDev"}
          className="pixel m-0"
          style={{
            paddingTop: "5px",
            color: "white",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          {!showImage && ("portfolio dev.")} {showImage && ( " volver al home "

          )}
        </Link>
      </div>
    </Navbar>
  );
}
export default NavbarY;
