import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import "./GetInTouch.css";

function GetInTouch() {
  const navigate = useNavigate();
  return (
    <div className="s5">
      <div className="s5d">
        <h1>
          Ready to Launch <br />
          your next website?
        </h1>
        <div className="s5d1">
          <button
            className="get-in-touch-btn"
            onClick={() => navigate("/contactus")}
          >
            <MailOutlineIcon className="get-in-touch-mail" />
            Get in touch now!
          </button>
          <p>
            Or, take a peek in our{" "}
            <Link
              to="/design-studio"
              style={{
                fontWeight: "bold",
                color: "#6610f2",
                textDecoration: "underline",
              }}
            >
              design studio
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
