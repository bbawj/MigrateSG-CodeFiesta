import React from "react";
import { Button } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService";
import { useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LoopIcon from "@material-ui/icons/Loop";

export default function WorkQuestion({ id, value, updateInfo }) {
  const values = [30, 50, 80];

  return (
    <div>
      {id === 1 && (
        <div className="grid4">
          <h2 className="gridHeader">What do you intend to work as?</h2>
          <div className="categoryChoice">
            <WorkIcon />
            <Button
              onClick={() => updateInfo("work", 2, 50, { intent: "employee" })}
              variant="contained"
              color="primary"
            >
              EMPLOYEE / EMPLOYER
            </Button>
          </div>
          <div className="categoryChoice">
            <FlightTakeoffIcon />
            <Button
              onClick={() => updateInfo("work", 2, 50)}
              variant="contained"
              color="primary"
            >
              WORK HOLIDAY
            </Button>
          </div>
          <div className="categoryChoice">
            <LocalLaundryServiceIcon />
            <Button
              onClick={() => updateInfo("work", 2, 50)}
              variant="contained"
              color="primary"
            >
              DOMESTIC HELPER
            </Button>
          </div>
          <div className="categoryChoice">
            <ChildFriendlyIcon />
            <Button
              onClick={() => updateInfo("work", 2, 50)}
              variant="contained"
              color="primary"
            >
              CONFINEMENT NANNY
            </Button>
          </div>
        </div>
      )}
      {id === 2 && (
        <div className="grid2">
          <h2 className="gridHeader">
            What kind of profession are you seeking in Singapore?
          </h2>
          <div className="categoryChoice">
            <Button
              onClick={() => updateInfo("work", 3, 80, { intent: "employee" })}
              variant="contained"
              color="primary"
            >
              EXECUTIVE / ENTREPRENEURSHIP
            </Button>
          </div>
          <div className="categoryChoice">
            <Button
              onClick={() =>
                updateInfo("work", 3, 80, {
                  intent: "employee",
                  profession: "skilled",
                })
              }
              variant="contained"
              color="primary"
            >
              SKILLED
            </Button>
          </div>
        </div>
      )}
      {id === 3 && (
        <div className="grid4">
          <h2 className="gridHeader">
            What kind of profession are you seeking in Singapore?
          </h2>
          <div className="categoryChoice">
            <Button
              onClick={() =>
                updateInfo("completed", 0, 100, {
                  intent: "employee",
                  profession: "executive",
                })
              }
              variant="contained"
              color="primary"
            >
              EXECUTIVE
            </Button>
          </div>
          <div className="categoryChoice">
            <Button
              onClick={() =>
                updateInfo("completed", 0, 100, {
                  intent: "employee",
                  profession: "entrepreneur",
                })
              }
              variant="contained"
              color="primary"
            >
              ENTREPRENEUR
            </Button>
          </div>
          <div className="categoryChoiceDesc">
            The Employment Pass is for foreign professionals who: <br />
            <p>
              <ul>
                <li>Have a job offer in Singapore.</li>
                <li>Work in a managerial, executive or specialised job.</li>
                <li>
                  Earn a fixed monthly salary of at least $4,500 (older, more
                  experienced candidates need higher salaries).
                </li>
                <li>
                  Have acceptable qualifications, usually a good university
                  degree, professional qualifications or specialised skills.
                </li>
              </ul>
              The Personalised Employment Pass (PEP) is eligible if you are:
              <ul>
                <li>
                  An overseas foreign professional and your last drawn fixed
                  monthly salary overseas was at least $18,000. Your last drawn
                  salary should have been within 6 months before you apply.{" "}
                </li>
                <li>
                  An Employment Pass holder earning a fixed monthly salary of at
                  least $12,000.
                </li>
              </ul>
            </p>
          </div>
          <div className="categoryChoiceDesc">
            You can apply for an EntrePass if you meet conditions:
            <br />
            <p>
              <ul>
                <li>
                  Have started, or intend to start, a private limited company
                  registered with ACRA that is venture-backed or owns innovative
                  technologies.
                </li>
                <ul>
                  <li style={{ marginLeft: "2em" }}>
                    If registered, the company must be less than 6 months old on
                    the date you apply.
                  </li>
                  <li style={{ marginLeft: "2em" }}>
                    If not registered, you can do so after you know the outcome
                    of your application.
                  </li>
                </ul>
                <li>
                  Meet any of the following innovative criteria as an
                  entrepreneur, innovator or investor listed below. You do not
                  need to meet all of the criteria for each respective profile,
                  but having more qualifications would help your application.
                </li>
              </ul>
            </p>
          </div>
        </div>
      )}

      <div className="questionNav">
        <Button
          onClick={() => {
            if (id === 1) {
              updateInfo("category", 0, 10);
            } else {
              updateInfo("work", id - 1, values[id - 2]);
            }
          }}
          startIcon={<ArrowBackIcon />}
        >
          Go Back
        </Button>
        <Button onClick={() => updateInfo("start")} startIcon={<LoopIcon />}>
          Restart
        </Button>
      </div>
    </div>
  );
}
