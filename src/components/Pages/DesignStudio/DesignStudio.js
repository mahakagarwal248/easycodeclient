import { useEffect } from "react";

import "./DesignStudio.css";
import Navbar from "../../Navbar";
import Card from "../../sections/Catalogue/Card";

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
    redirectTo: "http://ecomm.easycoder.tech/",
  },
  {
    imageUrl: "/images/unnati.png",
    heading: "Demo 3",
    description: "This one is a service provider app.",
    redirectTo: "https://marvelous-wisp-e66b4b.netlify.app/",
  },
  {
    imageUrl: "/images/stackoverflow.png",
    heading: "Demo 4",
    description: "It is the stackoverflow website clone.",
    redirectTo: "https://a-stackoverflow-clone.netlify.app/",
  },
  {
    imageUrl: "/images/demo1.png",
    heading: "Demo 5",
    description: "It is an Architect's Website.",
    redirectTo: "/demo/architecture-website",
  },
  {
    imageUrl: "/images/demo2.png",
    heading: "Demo 6",
    description: "It has some different kinds of Login Forms.",
    redirectTo: "/demo/login-forms",
  },
];
function DesignStudio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="design-studio-div">
        <h1>Design Studio</h1>
        <div className="s4-cards-div">
          {cardData?.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DesignStudio;
