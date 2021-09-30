import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import playStore from "../Assets/images/DownloadPlayStore.png";
import appStore from "../Assets/images/DownloadAppStore.png";
import cellphone from "../Assets/images/cellphone.png";

export default function Hero() {
  return (
    <>
      <span className="anchor" id="hero" />
      <div className="bg-hero">
        <Container className="px-4 py-5">
          <Row className="align-items-center g-5 py-5">
            <Col className="text-start">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                <span className="text-blue">Kashú</span>
              </h1>
              <h3>Lo que tu dinero necesita</h3>
              <p className="lead">
                Kashú es una plataforma <strong>completamente gratuita</strong>{" "}
                que te permitirá de forma segura y centralizada aprender sobre
                finanzas con contenido diseñado por expertos que te permitirá
                poner tu dinero en acción.
              </p>
              <p className="lead">Aprendé. Planificá. Ejecutá.</p>
              <p className="lead">Próximamente disponible en...</p>
              <div className="mt-4">
                <img
                  alt="downloads"
                  src={playStore}
                  className="img-fluid pointer"
                  loading="lazy"
                  width="100px"
                />
                <img
                  alt="downloads"
                  src={appStore}
                  className="img-fluid pointer"
                  loading="lazy"
                  width="100px"
                />
              </div>
            </Col>
            <Col>
              <img
                src={cellphone}
                className="d-block mx-lg-auto img-fluid"
                alt="Cellphone whit logo"
                width="350"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
