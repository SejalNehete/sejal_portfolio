import React from 'react'
import '../style/Resume.css'
import { Col, Container, Row } from 'react-bootstrap'
import resumedow from '../assets/Images/SEJAL_NEHETE.pdf'
import { Slide } from 'react-awesome-reveal'

const Resume = () => {
  return (
    <>
      <Container className='container-Resume'>
        <Slide direction='left' triggerOnce={true}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1>Resume</h1>
            <a href={resumedow} download="SEJAL_NEHETE" target='_blank' rel="noreferrer">
              <button className='downloadButton'>📜 Download</button>
            </a>
          </div>
        </Slide>
        <Slide direction='up' triggerOnce={true}>
          <Row className='resume-row'>
            <Col sm="12" md="6" lg="6">
              <h3><strong>Work Experience</strong></h3>
            </Col>
            <Col sm="12" md="6" lg="6">
              <div>
                <h5>Oct-2021 to March-2022</h5>
                <div>
                  <h6> Siddesh Infotech</h6>
                  <p>As a Teacher</p>
                </div>
              </div>
              <div>
                <h5>Jan-22 to June-22</h5>
                <div>
                  <h6>Technoweit</h6>
                  <p>
                    During my tenure as a Junior Developer
                    at Technoweit, I collaborated closely with
                    senior team members to contribute to various projects, including web application
                    development and maintenance tasks. I gained hands-on experience in front-end
                    technologies such as HTML, CSS, and JavaScript, while also delving into back-end
                    frameworks like Node.js. Through participation in code reviews and team discussions,
                    I honed my problem-solving skills and acquired a solid foundation in software development best practices.
                    My time at Technoweit allowed me to grow as a developer and embrace challenges with enthusiasm and determination..</p>
                </div>
              </div>


            </Col>
          </Row>
        </Slide>
        <Slide direction='up' triggerOnce={true}>
          <Row className='resume-row'>
            <Col sm="12" md="6" lg="6">
              <h3><strong>Education</strong></h3>
            </Col>
            <Col sm="12" md="6" lg="6">
              <div>
                <h5>2019-2024</h5>
                <div>
                  <h6>North Maharashtra University || Integrated MCA</h6>
                  <p>CGPA: 9.35 (82%)</p>
                </div>
              </div>
              <div>
                <h5>2018-2019</h5>
                <div>
                  <h6>Maharashtra State Board || HSC</h6>
                  <p>62%</p>
                </div>
              </div>
              <div>
                <h5>2016-2017</h5>
                <div>
                  <h6>Maharashtra State Board || SSC</h6>
                  <p>72%</p>
                </div>
              </div>
            </Col>
          </Row>
        </Slide>

        <Slide direction='up' triggerOnce={true}>
          <Row className='resume-row' style={{ border: 0 }}>
            <Col sm="12" md="6" lg="6">
              <h3><strong>Skills & Expertise</strong></h3>
            </Col>
            <Col sm="12" md="6" lg="6">
              <div>
                <h5>frantend</h5>
                <h6>HTML, CSS, ReactJS, Redux, Bootstrap, Tailwind</h6>
              </div>
              <div>
                <h5>Backend & Databases</h5>
                <h6>NodeJS , Express, GraphQL, MongoDB, MySQL, PostgreSQL, Firebase</h6>
              </div>
            </Col>
          </Row>
        </Slide>
      </Container >
    </>
  )
}

export default Resume