import React from "react";
import "./Catalogue.css";

function Card({ data }) {
  const handleRedirect = (path) => {
    window.open(path, "_blank");
  };
  return (
    <div className="s4-card" onClick={() => handleRedirect(data?.redirectTo)}>
      <div className="s4-cards">
        <img className="s4-card-img" src={data?.imageUrl} alt="" />
        <h5 className="s4-card-heading">{data?.heading}</h5>
        <p className="s4-card-p">{data?.description}</p>
      </div>
    </div>
  );
}

export default Card;
