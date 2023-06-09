import React from 'react'
import '../css/Projects.css'
import routing_gif from '../Images/Routing_gif.gif'
import lunarlander_gif from '../Images/youtube-video-gif.gif'
import robot_gif from '../Images/robot_gif.gif'
import { BsGithub } from 'react-icons/bs';
import { Container, Row, Card, Button, Col } from 'react-bootstrap'

const Projects = () => {
    return (
        <Container id='projects' fluid className='projects-container'>
            <Row>
                <h1 className='title'>Projects</h1>
            </Row>

            <Row>
                <Container className='projects d-flex justify-content-center flex-wrap'>
                    <Row>
                        <Col>
                            <Card className='card'>
                                <Card.Img className='card-image' variant="top" src={routing_gif} />
                                <Card.Body>
                                    <Card.Title>rl-routing</Card.Title>
                                    <Card.Text>
                                        Implementation of a Reinforcement Learning environment that simulated random congestion in routers while delivering packets
                                    </Card.Text>
                                    <Button href="https://github.com/Ali-Jasim/rl-routing" className='btn-github' size="lg" variant="dark">
                                        <p>Source Code <BsGithub style={{ height: "20px" }} /></p>

                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card'>
                                <Card.Img className='card-image' variant="top" src={lunarlander_gif} />
                                <Card.Body>
                                    <Card.Title>Double Duelling Q Network</Card.Title>
                                    <Card.Text>
                                        Enhanced with deep learning, Q learning is applied to the Lunar Lander task to learn an optimal policy by estimating the Q-values of different state-action pairs using a neural network.                                    </Card.Text>
                                    <Button href="https://github.com/Ali-Jasim/DoubleDuellingDeepQNetwork" className='btn-github' size="lg" variant="dark">
                                        <p>Source Code <BsGithub style={{ height: "20px" }} /></p>

                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card'>
                                <Card.Img className='card-image' variant="top" src={robot_gif} />
                                <Card.Body>
                                    <Card.Title>Turtle-bot</Card.Title>
                                    <Card.Text>
                                        Computer vision using OpenCV is employed to enable the TurtleBot to navigate and interact with its environment, leveraging visual perception for solving tasks and making informed decisions.
                                    </Card.Text>
                                    <Button href="https://github.com/Ali-Jasim/turtle-bot" className='btn-github' size="lg" variant="dark">
                                        <p>Source Code <BsGithub style={{ height: "20px" }} /></p>

                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

            </Row>

            <Row>

            </Row>
        </Container>
    )
}

export default Projects