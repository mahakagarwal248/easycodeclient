import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./Catalogue.css";
import Card from "./Card";

const cardData = [
  {
    imageUrl: "/images/olp.png",
    heading: "Demo 1",
    description: "It Is an Online Learning Platform.",
    redirectTo: "http://insight-learn.easycoder.tech/",
  },
  {
    imageUrl: "/images/ecomm.png",
    heading: "Demo 2",
    description: "It is an E-Commerce Website.",
    redirectTo: "https://your-shopping-site.netlify.app/",
  },
  {
    imageUrl: "/images/unnati.png",
    heading: "Demo 3",
    description: "This one is a service provider app.",
    redirectTo: "https://marvelous-wisp-e66b4b.netlify.app/",
  },
  {
    imageUrl: "/images/demo1.png",
    heading: "Demo 4",
    description: "It is an Architect's Website.",
    redirectTo: "/demo/architecture-website",
  },
];
function Catalogue() {
  const navigate = useNavigate();

  return (
    <div className="s4" id="catalogue">
      <div className="s4d">
        <h4>Catalogue</h4>
        <h2>Your digital presence should be an unstoppable force</h2>
        <h5>Choose design from our catalogue</h5>
        <div className="s4-cards-div">
          {cardData?.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </div>
      </div>
      <button
        className="catalogue-btn"
        onClick={() => {
          navigate("/design-studio");
        }}
      >
        See More <ArrowRightAltIcon className="arrow" />
      </button>
    </div>
  );
}

export default Catalogue;
