import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import Header from "./Header";
import "./Question.css";
import { Button } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";

export default function Question() {
  const [question, setQuestion] = useState({});
  const history = useHistory();

  console.log("rendered");

  useEffect(() => {
    const questionInfo = JSON.parse(localStorage.getItem("questionInfo"));
    if (questionInfo) {
      setQuestion(questionInfo);
    }
  }, []);

  function updateQuestionInfo(type, id, value) {
    setQuestion({ type: type, id: id, value: value });
    localStorage.setItem(
      "questionInfo",
      JSON.stringify({ type: type, id: id, value: value })
    );
  }

  return (
    <div>
      <Header />
      <div className="questionHeader">
        <h2>Completion Progress: {question.value}%</h2>
        <LinearProgress variant="determinate" value={question.value} />
      </div>
      <div className="questionContent">
        {question.type === "start" && (
          <div>
            <h2>Are you a returning Singapore Citizen/PR?</h2>
            <div className="startButton">
              <Button variant="contained" color="primary">
                Yes
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => updateQuestionInfo("category", 0, 10)}
              >
                No
              </Button>
            </div>
          </div>
        )}
        {question.type === "category" && (
          <div>
            <h2>Why are you moving to Singapore?</h2>
            <div className="categorySelect">
              <div className="categoryChoice">
                <WorkIcon />
                <Button variant="contained" color="primary">
                  WORK
                </Button>
              </div>
              <div className="categoryChoice">
                <SchoolIcon />
                <Button variant="contained" color="primary">
                  STUDY
                </Button>
              </div>
              <div className="categoryChoice">
                <PersonIcon />
                <Button variant="contained" color="primary">
                  RELATIONSHIP
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
