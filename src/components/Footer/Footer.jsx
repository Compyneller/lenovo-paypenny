import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import AllSocialLinks from "./AllSocialLinks";
import FooterCard from "./FooterCard";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";
import GetItOnAppStore from "../GetItOnAppStore";
import GetItOnPlayStore from "../GetItOnPlayStore";
const Footer = () => {
  return (
    <>
      <div className="footer__content py-5">
        <Container>
          <FooterBottom />
        </Container>
      </div>
      {/* </div> */}
    </>
  );
};

export default Footer;
