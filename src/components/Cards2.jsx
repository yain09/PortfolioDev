import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cards({ title, txt, img, link, bg, none }) {
  const [color, setColor] = useState(bg || "#22A381");

  const handleMasInfoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="dev d-flex" style={{ backgroundColor: bg }}>
      <img
        src={img}
        alt={title}
        className="img-fluid"
        style={{
          width: "50%",
          placeSelf: "center",
          aspectRatio: "1/1",
          maxWidth: "250px",
        }}
      />
      <div
        className="d-flex flex-column"
        style={{ justifyContent: "space-evenly" }}
      >
        <h5 className="pixel">{title}</h5>
        <p className="silka" style={{ textWrap: "stable" }}>
          {txt}
        </p>
        {!none && (
          <Link to={link} onClick={handleMasInfoClick}>
            <button title="Mas info" aria-label="Mas info" className="button">
              <span className=""> Más info </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}