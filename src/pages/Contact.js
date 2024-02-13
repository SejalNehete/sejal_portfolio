import React from 'react'
import '../style/Contact.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Roll, Slide } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <>
      <Container fluid className='contact-container'>
        <Row className='row'>
          <Col sm="12" md="6" lg="6" className='contact-col'>
            <Slide direction='left' triggerOnce={true}>
              <h1>Contact Us</h1>
              <div>
                <h4>Phone</h4>
                <h6>9309751045</h6>
              </div>
              <div>
                <h4>Email</h4>
                <h6>sejalnehete01@gmail.com</h6>
              </div>
              <div>
                <h4>Address</h4>
                <h6>At post Jalgaon.</h6>
              </div>
              <div>
                <h4>Follow me</h4>
                <FaFacebook className='social-icons' />
                <FaInstagram className='social-icons' />
                <FaGithub className='social-icons' />
              </div>
            </Slide>
          </Col>
          <Col sm="12" md="6" lg="6">
            <Slide direction='right' triggerOnce={true}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' />
              <Form.Label>Email</Form.Label>
              <Form.Control type='text' />
              <Form.Label>Subject</Form.Label>
              <Form.Control type='text' />
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Slide>
            <Roll>
              <button className='conButton'>Submit</button>
            </Roll>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contact