import React from "react";
import "./Dashboard.css";

export default function Card({ info, idx }) {
  return (
    <div className={`card ${idx === 0 && "cardRequired"}`}>
      <div className="cardTitle">
        <h2>{info.name}</h2>
        {idx === 0 && info.desc}
      </div>
      <div className="cardAction">
        {idx === 0 && <div>Application Guide</div>}
        More Information & Document Checklist
      </div>
    </div>
  );
}
