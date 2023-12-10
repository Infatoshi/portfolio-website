import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm <span className="purple">Elliot Arledge </span>
            from <span className="purple"> Edmonton, Alberta.</span>
            <br />
            I am currently studying Computer Science full-time at MacEwan University
            <br />
            I have created a couple popular courses on FreeCodeCamp.org.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Growing my YouTube Channel
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In the pursuit of understanding the nature of computation and the universe!"{" "}
          </p>
          <footer className="blockquote-footer">Elliot</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
