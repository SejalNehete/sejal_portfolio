import React from 'react'
import '../style/Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";


const Footer = () => {
  return (
    <>
      <Slide direction='left' triggerOnce>={true}
        <Container fluid className='footer-container'>
          <Row>
            <Col sm="12" md="6" lg="3" className='footer-col'>
              <h4>Phone</h4>
              <h6>9309751045</h6>
            </Col>
            <Col sm="12" md="6" lg="3" className='footer-col'>
              <h4>Email</h4>
              <h6>sejalnehete01@gmail.com</h6>
            </Col>
            <Col sm="12" md="6" lg="3" className='footer-col'>
              <h4>Follow me</h4>
              <FaFacebook className='social-icons' />
              <FaInstagram className='social-icons' />
              <FaGithub className='social-icons' />
            </Col>
            <Col sm="12" md="6" lg="3" className='footer-col'>
              <h4>Design and Developed By</h4>
              <h6>Sejal Nehete</h6>
            </Col>
          </Row>
          <div className='footer-line'>
            <h6>  © {new Date().getFullYear()}{" "} All rights reserved.</h6>
          </div>
        </Container>
      </Slide>

    </>
  )
}

export default Footer