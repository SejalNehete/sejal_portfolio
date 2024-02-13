import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import "../style/Project.css"
import portfolio from "../assets/Images/gradient-interview-portfolio-template_23-2149220443.jpg"
import carDekho from "../assets/Images/pexels-photo-7144172.jpg"
import Admission from "../assets/Images/Admission-management-system-benefits.jpg"
import { Slide, Zoom } from 'react-awesome-reveal'

const Project = () => {
  return (
    <div>
      <Container className='projects' >
        <Slide direction='left' triggerOnce={true}>
          <h1>Projects</h1>
        </Slide>
        <Row className='Project-row'>
          <Col sm="12" md="6" lg="6" className='project-col'>
            <Slide direction='up' triggerOnce={true}>
              <h2>Portfolio Builder </h2>
              <p>Developed a dynamic web
                application using the MERN stack to
                help users create professional
                portfolios.
                Implemented a wide range of
                customizable templates to cater to
                various industries and personal
                styles.
                Enabled users to easily add, edit, and
                delete portfolio sections, projects,
                and descriptions.
                Incorporated responsive design
                principles to ensure optimal user
                experience across different devices.</p>
            </Slide>
          </Col>

          <Col sm="12" md="6" lg="6">
            <Zoom triggerOnce={true}>
              <Image src={portfolio} className='project-image' />
            </Zoom>
          </Col>
        </Row>
        <Row className='Project-row'  >
          <Col sm="12" md="6" lg="6" className='project-col'>
            <Slide direction='up' triggerOnce={true}>
              <h2>Cardekho Replika</h2>
              <p>Cardekho Replika is a cutting-edge project built using React, aiming to replicate the user experience of Cardekho's platform. Utilizing React's powerful frontend capabilities, the project showcases advanced features such as dynamic filtering, responsive design, and seamless navigation. With a focus on user-centric design principles, Cardekho Replika sets a new standard for immersive and intuitive automotive browsing experiences.
              </p>
            </Slide>

          </Col>
          <Col sm="12" md="6" lg="6">
            <Zoom triggerOnce={true}>
              <Image src={carDekho} className='project-image' />
            </Zoom>

          </Col>
        </Row>
        <Row className='Project-row'>
          <Col sm="12" md="6" lg="6" className='project-col'>
            <Slide direction='up' triggerOnce={true}>
              <h2>Student Admission System</h2>
              <p>The development of a
                comprehensive student
                management system using MERN
                stack
                Facilitating seamless student
                admissions, fee management, and
                certificate generation with
                downloadable options, enhancing
                administrative efficiency and user
                experience</p>
            </Slide>
          </Col>
          <Col sm="12" md="6" lg="6">
            <Zoom triggerOnce={true}>
              <Image src={Admission} className='project-image' />
            </Zoom>
          </Col>
        </Row>



      </Container>
    </div >
  )
}

export default Project