import React from "react";
import "./Dashboard.css";

export default function Card({ id }) {
  const cardDetails = {
    0: {
      name: "EntrePass",
      desc: "The EntrePass allows eligible foreign entrepreneurs to start and operate a business in Singapore that is venture-backed or possesses innovative technologies.",
    },
    1: { name: "S-Pass" },
    2: { name: "Personalised Employment Pass" },
    3: { name: "Work Permit Foregin Worker" },
  };
  return (
    <div className={`card ${id === 0 && "cardRequired"}`}>
      <div className="cardTitle">
        <h2>{cardDetails[id].name}</h2>
        {id === 0 && cardDetails[id].desc}
      </div>
      <div className="cardAction">
        {id === 0 && <div>Application Guide</div>}
        More Information & Document Checklist
      </div>
    </div>
  );
}
