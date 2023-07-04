import React, { useState } from 'react';
import './Patient-landing.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Carousel, Col, Row, Button, Container, Modal, Offcanvas } from 'react-bootstrap';
import { FaHospital, FaStethoscope, FaPhone } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PatientLandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div>
      <header className="bg-lightgreen text-white text-center py-5 newcls" >
        <Container>
          <h1 className="display-4">Welcome to Maven Health</h1>
          <p className="lead">Transforming healthcare one step at a time</p>
        </Container>
      </header>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../resources/images/carosal1.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Quality Care</h3>
            <p>We prioritize providing high-quality care and ensuring the well-being of our patients.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../resources/images/carosal2.jpg')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Expert Doctors</h3>
            <p>Our team of experienced doctors and specialists are dedicated to delivering top-notch healthcare services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../resources/images/pexels-karolina-grabowska-4386466.jpg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>24/7 Support</h3>
            <p>We provide round-the-clock support to assist you with any inquiries or concerns you may have.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Us</h2>
              <p>
                Maven Health is a revolutionary healthcare platform that aims to provide accessible and affordable healthcare solutions to people all around the world.
              </p>
              <Button variant="primary" className="btn-lightgreen">
                Learn More
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={require('../resources/images/young-handsome-physician-medical-robe-with-stethoscope.jpg')}
                alt="About Us"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-lightgreen py-5">
        <Container>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <FaHospital size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Quality Care</h5>
                  <p className="card-text">
                    We prioritize providing high-quality care and ensuring the well-being of our patients.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <FaStethoscope size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Expert Doctors</h5>
                  <p className="card-text">
                    Our team of experienced doctors and specialists are dedicated to delivering top-notch healthcare services.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <FaPhone size={40} className="text-primary mb-3" />
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">
                    We provide round-the-clock support to assist you with any inquiries or concerns you may have.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Contact Us</h2>
              <p>
                Have any questions or inquiries? Feel free to reach out to our support team.
              </p>
              <Button variant="primary" onClick={handleContactClick}>
                Contact Us
              </Button>
            </Col>
            <Col md={6}>
              <img
                src={require('../resources/images/landingpage.jpg')}
                alt="Contact Us"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-lightgreen text-black text-center py-4">
        <Container>
          <p>&copy; {new Date().getFullYear()} Maven Health. All rights reserved.</p>
        </Container>
      </footer>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill out the contact form below:</p>
          {/* Add your contact form here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Button variant="link" onClick={handleOffcanvasToggle}>
                Home
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="link" onClick={handleOffcanvasToggle}>
                About Us
              </Button>
            </li>
            <li className="nav-item">
              <Button variant="link" onClick={handleOffcanvasToggle}>
                Contact Us
              </Button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <ToastContainer /> {/* Toastify container for notifications */}
    </div>
  );
}

export default PatientLandingPage;
