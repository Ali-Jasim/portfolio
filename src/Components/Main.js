import React from 'react'
import '../css/Main.css'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import headshot from '../Images/headshot.png'


const Main = () => {
    return (
        <div className='main-container'>

            <h1 className='title'>Software Engineer</h1>

            <Container className="container d-flex justify-content-center">
                <Row>
                    <Col xs={4}>
                        <img className="headshot" src={headshot}></img>
                    </Col>
                    <Col xs={8}>
                        <p className='description'>Highly skilled problem-solving software engineer adept at analyzing and resolving complex issues. Collaborates effectively, leveraging technical expertise to develop innovative solutions. Adaptable, detail-oriented, and dedicated to delivering high-quality software solutions efficiently.</p>
                    </Col>
                </Row>
            </Container>

            <Container className="container d-flex justify-content-evenly">
                <Row>
                    <Col>
                        <Button href='https://github.com/Ali-Jasim' variant='outline-dark'>
                            <BsGithub size={50} />
                            <h1>GitHub</h1>
                        </Button>
                    </Col>
                    <Col>
                        <Button href='https://www.linkedin.com/in/ali-jasim-74280226a/' variant='outline-dark'>
                            <BsLinkedin size={50} />
                            <h1>Linkedin</h1>
                        </Button>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default Main