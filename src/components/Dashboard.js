import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

const cardDetails = {
  entre: [
    {
      name: "EntrePass",
      desc: "The EntrePass allows eligible foreign entrepreneurs to start and operate a business in Singapore that is venture-backed or possesses innovative technologies.",
    },
    { name: "S-Pass" },
    { name: "Personalised Employment Pass" },
    { name: "Work Permit Foreign Worker" },
  ],
  exec: [
    {
      name: "Employment Pass",
      desc: "The Employment Pass allows foreign professionals, managers and executives to work in Singapore. Candidates need to earn at least $4,500 a month and have acceptable qualifications.",
    },
    { name: "S-Pass" },
    { name: "Personalised Employment Pass" },
    { name: "EntrePass" },
  ],
};

export default function Dashboard() {
  const [cards, setCards] = useState("");
  const history = useHistory();
  console.log(cards);
  useEffect(() => {
    const questionInfo = JSON.parse(localStorage.getItem("questionInfo"));
    if (questionInfo) {
      switch (questionInfo.profession) {
        case "entrepreneur":
          setCards("entre");
          break;
        case "executive":
          setCards("exec");
          break;
        default:
          break;
      }
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
              the {cards && cardDetails[cards][0].name}
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
      {cards && (
        <div className="cardGrid">
          <Card idx={0} info={cardDetails[cards][0]} />
          <h2>Others</h2>
          {cardDetails[cards].map((card, idx) => {
            if (idx === 0) return null;
            return <Card key={card.name} idx={idx} info={card} />;
          })}
        </div>
      )}
    </div>
  );
}
