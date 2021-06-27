import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

export default function Header() {
  const history = useHistory();
  return (
    <div className="header">
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
  );
}
