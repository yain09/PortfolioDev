import React from "react";

export default function Cards({ title, txt, img, link }) {
  return (
    <div className="dev d-flex flex-column">
      {img && <img src={img} alt={title} style={{ placeSelf: "center", width: "25%" }} className="img-fluid" />}
      <div>
        <h5 className="pixel">{title}</h5>
        <p className="silka">{txt}</p>
      </div>
      <a href={link}>
        <button title="Mas info" aria-label="Mas info" className="button">
          <span className=""> Más info </span>
        </button>
      </a>
    </div>
  );
}
