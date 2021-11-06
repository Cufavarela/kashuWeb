import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import pau from "../Assets/images/Pau.jpeg";
import gaby from "../Assets/images/Gaby.PNG";

function AboutUs() {
  return (
    <>
      <span className="anchor" id="about" />
      <div
        className="
          bg-img-parallax
          cover-container
          d-flex
          w-100
          h-100
          p-4
          mx-auto
          flex-column
          text-center
        "
      >
        <div className="px-4 container text-white">
          <h1 className="display-5 fw-bold lh-1 mb-3">Nosotros</h1>
          <p className="lead">
            Nuestra misión es conectar y educar a las personas con herramientas
            inteligentes para mejorar sus finanzas e incluirlas en el sistema
            financiero, y queremos lograrlo facilitando el acceso a la educación
            y herramientas financieras en todos los países de América Latina.{" "}
          </p>
        </div>
        <Container className="d-flex justify-content-around">
          <Row>
            <Col>
              <Card className="personalCard">
                <Card.Img
                  src={pau}
                  style={{ filter: "grayscale(100%)", width: "auto" }}
                  className="no-display"
                />
                <Card.Body>
                  <Card.Title>Paula Victoria Guelfo</Card.Title>
                  <Card.Text>
                    Consultora financiera e investigadora. Fundadora de la
                    comunidad ‘’Lady Ahorro’’. Se encuentra finalizando la
                    carrera de actuario, y tiene un máster en innovación social.{" "}
                  </Card.Text>
                  <div className="d-flex justify-content-around">
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/paula-guelfo-395007121/"
                    >
                      <i className="bi bi-linkedin icon-button"></i>
                    </a>
                    <a target="blank" href="mailto:pguelfo@growlatam.net">
                      <i className="bi bi-envelope icon-button"></i>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="personalCard">
                <Card.Img
                  src={gaby}
                  style={{ width: "auto" }}
                  className="no-display"
                />
                <Card.Body>
                  <Card.Title>Gabriela Rocha Galviz</Card.Title>
                  <Card.Text>
                    Egresada en finanzas, líder de servicio apasionada por la
                    innovación social. Coordinadora de proyectos en Grupo Nueva
                    Economía.{" "}
                  </Card.Text>
                  <div className="d-flex justify-content-around">
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/gabriela-rocha-galviz-22770a132/"
                    >
                      <i className="bi bi-linkedin icon-button"></i>
                    </a>
                    <a target="blank" href="mailto:grocha@growlatam.net">
                      <i className="bi bi-envelope icon-button"></i>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;
