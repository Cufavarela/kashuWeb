import { Container, Row } from "react-bootstrap";
import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import Features from "../Components/Features";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <Container fluid className="mt-5">
      <Row style={{ position: "relative" }}>
        <Hero />
      </Row>
      <Row style={{ position: "relative" }}>
        <Features />
      </Row>
      <Row style={{ position: "relative" }}>
        <AboutUs />
      </Row>
      <Row style={{ position: "relative" }}>
        <Contact />
      </Row>
    </Container>
  );
};

export default Home;
