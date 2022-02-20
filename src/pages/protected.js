import React from "react";
import Container from "../components/Container";
import protectedRoute from "../components/protectedRoute";

function Protected() {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default protectedRoute(Protected);
