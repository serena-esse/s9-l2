import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class SingleBook extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <Col xs={12} md={6} lg={3} className="my-3" key={book.asin}>
        <Card style={{ height: "100%" }}>
          <Card.Img variant="top" src={book.img} style={{ height: "15rem", objectFit: "contain" }} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}€</Card.Text>
            <Button variant="dark">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
