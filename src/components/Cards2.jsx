import React from "react";

export default function Cards({ title, txt, img, link }) {
  return (
    <div className="dev d-flex">
      {img && (
        <img
          src={img}
          alt={title}
          className="img-fluid"
          style={{ width: "50%", placeSelf: "center", aspectRatio: "1/1" }}
        />
      )}
      <div className="d-flex flex-column" style={{justifyContent:"space-evenly"}}>
        <h5 className="pixel">{title}</h5>
        <p className="silka">{txt}</p>

        <a href={link}>
          <button title="Mas info" aria-label="Mas info" className="button">
            <span className=""> Más info </span>
          </button>
        </a>
      </div>
    </div>
  );
}
