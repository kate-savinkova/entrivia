import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col, Row, Container, Table, Stack, ListGroup } from 'react-bootstrap';
import './Main.css';
import message from './images/message.svg';
import person_1 from './images/people/person_1.svg';
import person_2 from './images/people/person_2.svg';
import person_3 from './images/people/person_3.svg';
import person_4 from './images/people/person_4.svg';
import person_5 from './images/people/person_5.svg';
import person_6 from './images/people/person_6.svg';
import person_7 from './images/people/person_7.svg';
import person_8 from './images/people/person_8.svg';

function LastActivity() {
  return (
    <Container>
      <Row>
        <Col md="12">
            <Card>
              <Card.Title>Timeline</Card.Title>
              <ListGroup defaultActiveKey="#link1" className="timeline">
                <ListGroup.Item action href="#link1" className="event" data-date="12:30 - 1:00pm">
                  <h3>Registration</h3>
                  <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" className="event" data-date="2:30 - 4:00pm">
                  <h3>Registration</h3>
                  <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                </ListGroup.Item>
                <ListGroup.Item action href="#link3" className="event" data-date="5:00 - 8:00pm">
                  <h3>Registration</h3>
                  <p>Get here on time, it's first come first serve. Be late, get turned away.</p>
                </ListGroup.Item>
              </ListGroup>
            </Card>
        </Col>
      </Row>
    </Container>
  )
}

function StatusCards() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Card >
        <Card.Body>
          <Card.Title>Назначено</Card.Title>
          <Card.Text>10 задач</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Завершены</Card.Title>
          <Card.Text>2 задачи</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>В процессе</Card.Title>
          <Card.Text>4 задачи</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Ожидают начала</Card.Title>
          <Card.Text>4 задачи</Card.Text>
        </Card.Body>
      </Card>
    </Stack>
  );
}


function PeopleTable() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Фото</th>
          <th>ФИО</th>
          <th>Процент</th>
          <th>Выполнено</th>
          <th>Осталось</th>
          <th>Связаться</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={person_1} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Дерягин Никита Владимирович</td>
          <td>1</td>
          <td>4</td>
          <td>2</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
        <tr>
          <td><img src={person_2} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Петрошев Валерий Павлович</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
        <tr>
          <td><img src={person_3} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Евдокимов Давид Тихонович</td>
          <td>1</td>
          <td>5</td>
          <td>5</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
        <tr>
          <td><img src={person_4} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Андреев Гордий Данилович</td>
          <td>1</td>
          <td>9</td>
          <td>1</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
        <tr>
          <td><img src={person_5} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Бобылёв Ипполит Альбертович</td>
          <td>1</td>
          <td>3</td>
          <td>5</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
        <tr>
          <td><img src={person_6} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Беляева Евгения Антоновна</td>
          <td>1</td>
          <td>4</td>
          <td>5</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
        <tr>
          <td><img src={person_7} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Иванов Адам Федорович</td>
          <td>1</td>
          <td>1</td>
          <td>5</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
        <tr>
          <td><img src={person_8} alt='' style={{width: '30px', height: '30px'}}/></td>
          <td>Николаев Азарий Платонович</td>
          <td>1</td>
          <td>2</td>
          <td>7</td>
          <td><img src={message} alt='' style={{width: '20px', height: '15px'}}/></td>
        </tr>
      </tbody>
    </Table>
  );
}

function MainPage() {
  return (
    <Container>
      <Row>
        <Col xs="auto">
          <Row>
            <StatusCards />
          </Row>
          <Row>
          </Row>
          <Row>
            <PeopleTable />
          </Row>
        </Col>
        <Col>
          <LastActivity />
        </Col>
      </Row>
    </Container>
  )
}

export {StatusCards, PeopleTable, MainPage};