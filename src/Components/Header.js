import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "../css/Header.css"


const Header = () => {
    return (
        <div className='header-container'>
            <Navbar variant='dark' expand='md'>
                <Navbar.Brand href='#main'><h1 className='mx-3'>Ali jasim</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-target='#basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link className='px-5' href='#main'><h4>Home</h4></Nav.Link>
                        <Nav.Link className='px-5' href='#projects'><h4>Projects</h4></Nav.Link>
                        <Nav.Link className='px-5' href='#skills'><h4>Skills</h4></Nav.Link>
                        <Nav.Link className='px-5' href='#contact'><h4>Contact</h4></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >

    )
}

export default Header