import Card from 'react-bootstrap/Card';
import React from 'react';
import { Col, Row, Container, Table } from 'react-bootstrap';
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


function ResponsiveExample() {
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

export default ResponsiveExample;

export {ResponsiveExample, BgColorExample};