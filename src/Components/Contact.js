import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container className="p-3">
      <h1 className="display-5 fw-bold lh-1 mb-3 text-start">
        <span className="text-blue">Hablemos</span>
      </h1>
      <p className="lead text-start">
        Escribinos para <strong>recibir novedades</strong>, enterarte del
        lanzamiento o para preguntar cualquier duda.
      </p>
      <Form className="mt-5" style={{ width: "50%", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            placeholder="Juan Carlos"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Preguntanos lo que necesites..."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
