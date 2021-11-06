import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FeatureItem from "./FeatureItem";
import { activeFeatures } from "../Assets/constants/activeFeatures";

function Features() {
  return (
    <>
      <span className="anchor" id="features" />

      <Container className="p-5">
        <div className="text-start">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            <span className="text-blue">¿Cómo funciona?</span>
          </h1>
          <p className="lead">
            <strong>Kashú</strong> Kashú es una app para aprender a mejorar tu
            economía, jugando. Además, te damos todas las herramientas para que
            puedas aplicar lo aprendido, y que realmente puedas tener mas
            ahorros y ¡empezar a hacerlos crecer!
          </p>
        </div>
        <Row>
          {activeFeatures.map((item) => {
            return (
              <Col xs={12} md={3}>
                <FeatureItem {...item} key={item.title} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Features;
