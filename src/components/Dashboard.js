import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

export default function Dashboard() {
  const [cards, setCards] = useState([]);
  const history = useHistory();
  console.log(cards);
  useEffect(() => {
    const questionInfo = JSON.parse(localStorage.getItem("questionInfo"));
    if (questionInfo && questionInfo.profession === "entrepreneur") {
      setCards([0, 1, 2, 3]);
    }
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboardHeroImage">
        <div className="heroImageText">
          <div className="headerLogo"></div>
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
        <div className="heroImageBoard">
          <h2>You've filled up the questionnaire.</h2>
          <div>
            <p>
              Based on your questionnaire results, we suggest that you apply for
              the
            </p>
            <Button
              onClick={() => {
                localStorage.setItem(
                  "questionInfo",
                  JSON.stringify({ type: "start", id: 0, value: 0 })
                );
                history.push("/question");
              }}
              variant="contained"
              color="primary"
            >
              Retake
            </Button>
          </div>
        </div>
      </div>
      <h2>Suggested</h2>
      {!(cards.length === 0) && (
        <div className="cardGrid">
          <Card key={cards[0]} id={cards[0]} />
          <h2>Others</h2>
          {cards.map((card, idx) => {
            if (idx === 0) return null;
            return <Card key={card} id={card} />;
          })}
        </div>
      )}
    </div>
  );
}
