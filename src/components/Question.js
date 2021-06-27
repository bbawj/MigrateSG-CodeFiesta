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
import WorkQuestion from "./WorkQuestion";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LoopIcon from "@material-ui/icons/Loop";

export default function Question() {
  const [question, setQuestion] = useState({});
  const [prevQn, setPrevQn] = useState({});
  const history = useHistory();

  useEffect(() => {
    const questionInfo = JSON.parse(localStorage.getItem("questionInfo"));
    if (questionInfo) {
      setQuestion(questionInfo);
    }
    if (questionInfo.type === "completed") {
      history.push("/dashboard");
    }
  }, []);

  function updateQuestionInfo(type, id, value, rest) {
    setQuestion({ type: type, id: id, value: value, ...rest });
    localStorage.setItem(
      "questionInfo",
      JSON.stringify({ type: type, id: id, value: value, ...rest })
    );
    if (type === "completed") {
      history.push("/dashboard");
    }
  }

  return (
    <div>
      <Header />
      <div className="questionHeader">
        <h2>Completion Progress: {question.value || 0}%</h2>
        <LinearProgress variant="determinate" value={question.value || 0} />
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
                <Button
                  onClick={() => updateQuestionInfo("work", 1, 30)}
                  variant="contained"
                  color="primary"
                >
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
        {question.type === "work" && (
          <WorkQuestion id={question.id} updateInfo={updateQuestionInfo} />
        )}
      </div>
      {(question.type === "start" || question.type === "category") && (
        <div className="questionNav">
          <Button
            onClick={() => updateQuestionInfo("start", 0, 0)}
            startIcon={<ArrowBackIcon />}
          >
            Go Back
          </Button>
          <Button
            onClick={() => updateQuestionInfo("start", 0, 0)}
            startIcon={<LoopIcon />}
          >
            Restart
          </Button>
        </div>
      )}
    </div>
  );
}
