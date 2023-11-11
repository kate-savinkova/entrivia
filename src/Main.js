import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Main.css';

function BgColorExample() {
  return (
    <Container>
      <Row>
        <Col>
          <Card >
            <Card.Body>
              <Card.Title>Назначено</Card.Title>
              <Card.Text>10 задач</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Завершены</Card.Title>
              <Card.Text>2 задачи</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>В процессе</Card.Title>
              <Card.Text>4 задачи</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Ожидают начала</Card.Title>
              <Card.Text>4 задачи</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BgColorExample;