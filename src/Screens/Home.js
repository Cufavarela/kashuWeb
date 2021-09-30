import { useRef } from "react";
import { Container, Row } from "react-bootstrap";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import Features from "../Components/Features";
import Hero from "../Components/Hero";

const Home = () => {
  const topHome = useRef();
  const features = useRef();
  const contact = useRef();

  return (
    <Container fluid className="mt-5">
      <Row>
        <Hero ref={topHome} />
      </Row>
      <Row>
        <Features ref={features} />
      </Row>
      <Row>
        <AboutUs />
      </Row>
      <Row>
        <Contact ref={contact} />
      </Row>
    </Container>
  );
};

export default Home;
