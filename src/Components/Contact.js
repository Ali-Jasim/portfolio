import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../css/Contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const submit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_6ua9typ', 'template_dn4xeuu', form.current, 'RGFxt44Gy-Fi69WKk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <Container id='contact' fluid className='contact-container'>
            <h1 className='title'>Contact</h1>

            <Container className="form-container d-flex justify-content-center">
                <Row>
                    <Col>
                        <Form ref={form} onSubmit={submit}>
                            <Form.Group className="form-text mb-3">
                                <Form.Label className='text-white'>Name</Form.Label>
                                <Form.Control name="user_name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white'>Email address</Form.Label>
                                <Form.Control name="user_email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className='text-white' >Message</Form.Label>
                                <Form.Control name="message" as="textarea" placeholder="Message" rows={3} />
                            </Form.Group>
                            <Button variant='dark' type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>

        </Container>
    )
}

export default Contact