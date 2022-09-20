import React from "react";
import { Card, Container } from "react-bootstrap";
import "./AboutQuote.css";
const AboutQuote = () => {
  return (
    <Card className="shadow-sm" style={{ border: "none" }}>
      <Card.Body className="d-flex flex-column">
        <img
          src="https://img.icons8.com/ios-filled/344/quote-left.png"
          height={80}
          width={80}
          alt=""
        />
        <h5
          className=" text-dark my-3"
          style={{
            fontSize: `${window.innerWidth > 950 ? "32px" : "25px"}`,
            fontWeight: "bold",
          }}>
          A team is made of skilled people for the company's growth but you can
          become a leader through consistent hard work, experience, and
          dedication for the company's stability & development.
        </h5>
      </Card.Body>
    </Card>
  );
};

export default AboutQuote;
