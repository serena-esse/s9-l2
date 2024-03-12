import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MyFooter() {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col>
            <h5>Contatti</h5>
            <ul className="list-unstyled">
              <li>Telefono: 123-456-7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </Col>
          <Col>
            <h5>Link utili</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Prodotti</a>
              </li>
              <li>
                <a href="#">Servizi</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">© 2024 Nome della tua azienda. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
