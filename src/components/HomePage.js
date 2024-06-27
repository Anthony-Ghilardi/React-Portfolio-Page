import React from "react";
import '../App.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HomePage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1>Hello my name is Anthony Ghilardi</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <img src={require("../assets/photo-of-me.jpg")} className="img-style" alt="Anthony Ghilardi"></img>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <p>
            Welcome to my personal portfolio where you can explore my projects
            and learn more about me!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
