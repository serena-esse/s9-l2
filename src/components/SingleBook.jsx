import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { toHaveStyle } from "@testing-library/jest-dom/matchers";

class SingleBook extends React.Component {
  state = { selected: false };
  render() {
    const { book } = this.props;
    return (
      <Col xs={12} md={6} lg={3} className="my-3" key={book.asin}>
        <Card
          style={{ border: this.state.selected ? "2px solid red" : "1px solid black", height: "100%" }}
          onClick={() => {
            this.setState({ selected: !this.state.selected });
          }}
        >
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
