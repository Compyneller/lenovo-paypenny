import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-01.png";
import medium from "../../assets/icons8-medium-100.png";
import pinterest from "../../assets/icons8-pinterest-100.png";
import instagram from "../../assets/icons8-instagram-100.png";
import reddit from "../../assets/icons8-reddit-100.png";
import tumblr from "../../assets/icons8-tumblr-100.png";
import facebook from "../../assets/icons8-facebook-100.png";
import twitter from "../../assets/icons8-twitter-100.png";
const FooterBottom = () => {
  return (
    <>
      <Row className="g-1">
        <Col
          sm={12}
          lg={3}
          className="d-flex flex-column justify-content-start">
          <h5 className="section__sub__heading text-light my-2">LEGAL</h5>{" "}
          <br />
          <Link
            onClick={() => window.scroll(0, 0)}
            className="text-light my-2 "
            style={{ textDecoration: "none" }}
            to="/tc">
            Terms & Conditions
          </Link>
          <Link
            onClick={() => window.scroll(0, 0)}
            className="text-light my-2 "
            style={{ textDecoration: "none" }}
            to="/pp">
            Privacy Policy
          </Link>
        </Col>
        <Col sm={12} lg={9}>
          <Row className="g-3 ">
            <Col
              xs={4}
              sm={4}
              md={6}
              lg={3}
              className="d-flex flex-column justify-content-start">
              <h5 className="section__sub__heading text-light my-2">COMPANY</h5>
              <br />
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/about">
                About
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/blog">
                Blog
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/career">
                Career
              </Link>
            </Col>
            <Col
              xs={4}
              sm={4}
              md={6}
              lg={3}
              className="d-flex flex-column justify-content-start">
              <h5 className="section__sub__heading text-light my-2">
                BUSINESS
              </h5>
              <br />
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/how-to-use">
                How to use
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/rate-fees">
                Rate & Fees
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/security">
                Security
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/reviews">
                Reviews
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/refer">
                Refer Friend
              </Link>
            </Col>
            <Col
              xs={4}
              sm={4}
              md={6}
              lg={3}
              className="d-flex flex-column justify-content-start">
              <h5 className="section__sub__heading text-light my-2">SUPPORT</h5>
              <br />
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/help">
                Help
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/contact-us">
                Contact Us
              </Link>
              <Link
                onClick={() => window.scroll(0, 0)}
                className="text-light my-2 "
                style={{ textDecoration: "none" }}
                to="/faq">
                FAQ
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              className="d-flex flex-column justify-content-start">
              <h5 className="section__sub__heading text-light my-2">CONNECT</h5>
              <br />

              <Row className="g-3">
                <Col xs={2} sm={3} md={3} lg={3}>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/www.paypenny.org/">
                    <img src={facebook} alt="" className="w-100" />
                  </a>
                </Col>
                <Col xs={2} sm={3} md={3} lg={3}>
                  <a
                    target="_blank"
                    href="https://in.pinterest.com/Paypennyca/">
                    <img src={pinterest} alt="" className="w-100" />
                  </a>
                </Col>
                <Col xs={2} sm={3} md={3} lg={3}>
                  <a
                    target="_blank"
                    href="https://www.reddit.com/user/paypenny-io">
                    <img src={reddit} alt="" className="w-100" />
                  </a>
                </Col>
                <Col xs={2} sm={3} md={3} lg={3}>
                  <a
                    target="_blank"
                    href="https://www.tumblr.com/blog/paypenny">
                    <img src={tumblr} alt="" className="w-100" />
                  </a>
                </Col>
                <Col xs={2} sm={3} md={3} lg={3}>
                  <a
                    target="_blank"
                    href="https://instagram.com/paypennyca?igshid=YmMyMTA2M2Y=">
                    <img src={instagram} alt="" className="w-100" />
                  </a>
                </Col>
                <Col xs={2} sm={3} md={3} lg={3}>
                  <a
                    target="_blank"
                    href="https://twitter.com/payPENNY2?s=20&t=4Im5hEodXE-dLog1P9eO-g">
                    <img src={twitter} alt="" className="w-100" />
                  </a>
                </Col>
                <Col xs={2} sm={3} md={3} lg={3}>
                  <a target="_blank" href="https://medium.com/@admin_17494">
                    <img src={medium} alt="" className="w-100" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <div className="w-100 text-center">
        <h5 className="section__sub__heading text-light my-1">
          © paypenny all Rights Reserved. The Brand PayPenny belongs to Trackon
          Canada Private Limited registered in Alberta,Canada.
        </h5>
      </div>
    </>
  );
};

export default FooterBottom;
