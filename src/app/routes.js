import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import Headermain from "../header";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Container, Row, Col } from 'react-bootstrap'

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup className="routes">
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location} className="routes">
        <Route exact path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <Container>
        <Row>
          <Col lg="3" md="3" sm="3">
            <Headermain />
            <Socialicons />
          </Col>
          <Col>
            <AnimatedRoutes />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppRoutes;
