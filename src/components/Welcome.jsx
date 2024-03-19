import React from "react";
import { Alert } from "react-bootstrap";

const Welcome = () => (
  <Alert variant="info" className="text-center" style={{ backgroundColor: "#007bff", color: "#ffffff" }}>
    <h1 style={{ margin: "0" }}>Benvenuti in EpiBooks!</h1>
  </Alert>
);

export default Welcome;
