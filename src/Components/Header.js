import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import "../css/Header.css"


const Header = () => {
    return (
        <div className='header-container'>
            <Container fluid>
                <Row>
                    <Col xs={2} md={5} lg={7}>
                        <h1>Ali Jasim</h1>
                    </Col>

                    <Col className='mt-2 mb-2 p-0'>
                        <Button size="lg" variant='outline-dark' className='text-white' href='#main'>Main</Button>
                    </Col>
                    <Col className='mt-2 mb-2 pr-1'>
                        <Button size="lg" variant='outline-dark' className='text-white' href='#projects'>Projects</Button>
                    </Col>
                    <Col className='mt-2 mb-2 p-0'>
                        <Button size="lg" variant='outline-dark' className='text-white' href='#skills'>Skills</Button>
                    </Col>
                    <Col className='mt-2 mb-2 p-0'>
                        <Button size="lg" variant='outline-dark' className='text-white' href='#contact'>Contact</Button>
                    </Col>

                </Row>




            </Container>
        </div>

    )
}

export default Header