import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/Skills.css'

import python_logo from '../Images/python-logo.png'
import java_logo from '../Images/java_logo.png'
import c_logo from '../Images/c++_logo.png'
import javascript_logo from '../Images/javascript_logo.png'
import nodejs_logo from '../Images/nodejs_logo.png'
import react_logo from '../Images/react_logo.png'
import pytorch_logo from '../Images/pytorch_logo.png'
import opencv_logo from '../Images/opencv_logo.png'
import tensorflow_logo from '../Images/tensorflow_logo.png'
import mongodb_logo from '../Images/mongodb_logo.png'
import postgres_logo from '../Images/postgres_logo.png'


const Skills = () => {
    return (
        <Container id='skills' fluid className='skills-container'>
            <h1 className='title'>Skills</h1>

            <Container>
                <Row>
                    <Col>
                        <img className='logos' src={python_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={java_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={c_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={javascript_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={nodejs_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={react_logo}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img className='logos' src={pytorch_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={opencv_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={tensorflow_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={mongodb_logo}></img>
                    </Col>
                    <Col>
                        <img className='logos' src={postgres_logo}></img>
                    </Col>
                </Row>
            </Container>

        </Container>

    )
}

export default Skills