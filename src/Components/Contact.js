import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import emailConfig from "../Assets/EmailConfig";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        form.current,
        emailConfig.USER_ID
      )
      .then(
        (result) => {
          alert("Correo enviado correctamente");
          form.current.reset();
        },
        (error) => {
          alert("Ocurrio un error, intente nuevamente");
        }
      );
  };

  return (
    <>
      <span className="anchor" id="contact" />
      <Container className="p-3">
        <h1 className="display-5 fw-bold lh-1 mb-3 text-start">
          <span className="text-blue">Hablemos</span>
        </h1>
        <p className="lead text-start">
          Escribinos para <strong>recibir novedades</strong>, enterarte del
          lanzamiento o para preguntar cualquier duda.
        </p>
        <Form ref={form} className="mt-5 contact-form" onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              placeholder="Juan Carlos"
              name="user_name"
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@ejemplo.com"
              name="user_email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Preguntanos lo que necesites..."
              name="message"
              type="text"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
