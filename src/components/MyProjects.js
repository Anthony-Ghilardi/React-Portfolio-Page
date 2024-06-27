import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

export default function MyProjects() {
  const cardStyle = {
    width: "36rem",
    maxHeight: "600px",
    overflow: "hidden"
  };

  const imgStyle = {
    height: "300px",
    width: "100%",
    objectFit: "fill"
  };

  return (
    <Container className="mx-auto">
      <Row className="justify-content-center">
        <Col xs="auto">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={require("../assets/Hungry-Hunrgy-DinosaurSC.png")} style={imgStyle} />
            <Card.Body>
              <Card.Title>Hungry Hungry Dinosaur</Card.Title>
              <Card.Text>
                JavaScript browser game where you eat pieces of meat to increase your score!
              </Card.Text>
              <Button href="https://anthony-ghilardi.github.io/Milestone-Project-1/" variant="primary">What's your highest Score?</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="auto">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={require("../assets/Rest-RantSC.png")} style={imgStyle} />
            <Card.Body>
              <Card.Title>Rest Rant</Card.Title>
              <Card.Text>
                A JavaScript restaurant review app that allows a user to add and review any restaurant of their choice!
              </Card.Text>
              <Button href="https://rest-rant-code.up.railway.app/" variant="primary">Review a restaurant now!</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Uncomment these lines to add more cards when ready */}
      {/* <Row className="justify-content-center">
        <Col xs="auto">1 of 3</Col>
        <Col xs="auto">2 of 2</Col>
      </Row> */}
    </Container>
  );
}
