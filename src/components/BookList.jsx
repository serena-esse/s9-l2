import React from "react";
import SingleBook from "./SingleBook";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function BookList(props) {
  const books = props.books;

  return (
    <Container fluid>
      <Row>
        {books.map(function (book, index) {
          return <SingleBook key={index} book={book} />;
        })}
      </Row>
    </Container>
  );
}

export default BookList;
