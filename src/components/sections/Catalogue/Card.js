import React from "react";
import "./Catalogue.css";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();
  const handleRedirect = (path) => {
    // window.open(path, "_blank");
    path[0] === "/" ? navigate(path) : window.open(path, "_blank");
    // navigate(path);
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
