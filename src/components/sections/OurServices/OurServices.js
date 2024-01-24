import BlurLinearIcon from "@mui/icons-material/BlurLinear";
import InsightsIcon from "@mui/icons-material/Insights";
import RecommendIcon from "@mui/icons-material/Recommend";

import "./OurServices.css";

const cardData = [
  {
    icon: <BlurLinearIcon />,
    heading: "Design New Way",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <InsightsIcon />,
    heading: "Better your brand",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <RecommendIcon />,
    heading: "Make a difference",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function OurServices() {
  return (
    <div className="s2" id="services">
      <h4>Our Services</h4>
      <h1>From Idea to Execution</h1>
      <div className="s2d">
        {cardData?.map((item, index) => {
          return (
            <div key={index} className="d1">
              <span
                className="icon"
                style={{
                  background:
                    index === 0
                      ? "#66cc66"
                      : index === 1
                      ? "#ff80aa"
                      : "#80aaff",
                }}
              >
                {item?.icon}
              </span>
              <h3>{item?.heading}</h3>
              <p>{item?.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurServices;
