import React, { useRef, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../style/Home.css'
import { Link } from 'react-router-dom'
import lottie from 'lottie-web';
import { Roll, Slide } from "react-awesome-reveal";


const Home = () => {

  const Profile = useRef(null);
  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: Profile.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/Images/Animation-707625901282.json")
    })

    return () => instance.destroy();
  }, [])

  return (
    <>
      <Container className='home'>
        <Row className='row' >
          <Col sm="12" md="6" lg="6">
            <div className='profile-image' ref={Profile}></div>
          </Col>
          <Col sm="12" md="6" lg="6" className='home-info'>
            <Slide direction='right' triggerOnce={true}>
              <h1>Hello, I'am Sejal Nehete</h1>
            </Slide>
            <Slide direction='right' triggerOnce={true} delay={10}>
              <h3>A Bit About Me</h3>
            </Slide>
            <Slide direction='down' triggerOnce={true} delay={200}>
              <p>
                I am a passionate and dedicated individual with a keen interest in technology and creativity. With a background in web development and design, I strive to create captivating digital experiences that leave a lasting impact. Through innovative solutions and attention to detail, I aim to bring visions to life and exceed expectations.</p>
            </Slide>
            <Roll triggerOnce={true}>
              <Row className='box'>

                <Link to="/resume" className='box1 box2'>Resume</Link>
                <Link to="/project" className='box1 box3'>Projects</Link>
                <Link to="/contact" className='box1 box4'>Contact</Link>
              </Row>
            </Roll>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home