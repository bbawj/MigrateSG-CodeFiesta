import { Button } from "@material-ui/core";
import { StarTwoTone } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <div className="heroImage">
        <div className="heroImageText">
          <h2>
            Migrate<span style={{ color: "var(--primary)" }}>SG</span>
          </h2>
          <div>
            <p>Guides</p>
            <p>Contact</p>
            <p>About</p>
            <Button
              onClick={() => history.push("/login")}
              style={{ color: "white" }}
              color="primary"
              variant="contained"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
      <div className="homeTextContainer">
        <div className="homeText">
          <h3>Don't know where to begin?</h3>
          <p>
            Find out how to achieve your desired goal by taking our
            questionnaire and let us guide you step-by-step on how to move to
            Singapore!
          </p>
          <Button
            onClick={() => {
              const check = localStorage.getItem("questionInfo");
              if (!check) {
                localStorage.setItem(
                  "questionInfo",
                  JSON.stringify({ type: "start", id: 0, value: 0 })
                );
              }
              history.push("/question");
            }}
            variant="contained"
            style={{ color: "white", marginTop: "0.5em" }}
            color="primary"
          >
            Take Questionnaire
          </Button>
        </div>
        <div className="homeTextImage"></div>
      </div>
    </div>
  );
}
