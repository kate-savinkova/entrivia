import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';

function NavBar() {
  return (
    <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-false"
          aria-labelledby="offcanvasNavbar-expand-false"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Главная</Nav.Link>
              <Nav.Link href="#action2">Задачи</Nav.Link>
              <Nav.Link href="#action2">Сотрудники</Nav.Link>
              <Nav.Link href="#action2">Карта</Nav.Link>
              <Nav.Link href="#action2">Отчеты</Nav.Link>
              <Nav.Link href="#action2">Аккаунт</Nav.Link>
              <Nav.Link href="#action2">Уведомления</Nav.Link>
              <Nav.Link href="#action2">Настройки</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export { NavBar };