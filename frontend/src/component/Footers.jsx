import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footers = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="additional-info">
        <h2>Why Choose Currency Converter: ExchangeRate?</h2>
        <p>Detailed explanations on advantages or instructions for use.</p>
        <p>
          Quickly and easily calculate foreign exchange rates with this free
          currency converter.
        </p>

        <footer>
          <Container>
            <Row>
              <Col className="text-center py-3">
                <p>Thank you for visiting...</p>
                <p>
                  CurrencyExchange (no) &copy; {currentYear} :{" "}
                  <a href="mailto:katreaniket3@gmail.com">
                    katreaniket3@gmail.com
                  </a>{" "}
                  {" Follow me for more: "}
                  <a
                    href="https://www.instagram.com/annie_jb_/"
                    style={{ textDecoration: "None" }}
                    target="_blank"
                  >
                    {"   "} || {"   "}
                    <FaInstagram style={{ fontSize: "14px" }} />
                    {"   "}
                  </a>{" "}
                  <a
                    href="https://www.linkedin.com/in/aniket-katre-752465149/"
                    style={{ textDecoration: "None" }}
                    target="_blank"
                  >
                    {"   "} || {"   "}
                    <FaLinkedin style={{ fontSize: "14px" }} />
                    {"   "}
                  </a>{" "}
                  <a
                    href="https://github.com/AniketKatre/"
                    style={{ textDecoration: "None" }}
                    target="_blank"
                  >
                    {"   "} || {"   "}
                    <FaGithub style={{ fontSize: "14px" }} />
                    {"   "}
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </section>
    </>
  );
};

export default Footers;
