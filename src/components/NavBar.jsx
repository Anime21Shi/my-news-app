import React, { useState } from 'react'
import {Navbar, Nav, Container, Form, Button, FormControl, Row, Col} from 'react-bootstrap'
// import '../index.css'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${searchQuery}`);
        setSearchQuery("");
    }
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="mb-3" fixed='top' bg='dark' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">ACONEWS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">    
                    <Nav className="me-auto">
                        
                        <NavLink to="/" className={({isActive}) => 
                            isActive? 'text-white bg-black px-3 py-2 rounded-pill mr-3 text-decoration-none': 'text-secondary-emphasis mx-3 mt-1 text-decoration-none'
                        }>                             
                            Home
                        </NavLink>
                        
                        
                        <NavLink to="/news/technology" className={({isActive}) => 
                            isActive? 'text-white bg-black px-3 py-2 rounded-pill mr-3 text-decoration-none': 'text-secondary-emphasis mx-3 mt-1 text-decoration-none'}> 
                            Technology
                        </NavLink>
                        
                        
                        <NavLink to="/news/sports" className={({isActive}) => 
                            isActive? 'text-white bg-black px-3 py-2 rounded-pill mr-3 text-decoration-none': 'text-secondary-emphasis mx-3 mt-1 text-decoration-none'}>    
                            Sports
                        </NavLink>
                            
                        
                        <NavLink to="/news/entertainment" className={({isActive}) => 
                            isActive? 'text-white bg-black px-3 py-2 rounded-pill mr-3 text-decoration-none': 'text-secondary-emphasis mx-3 mt-1 text-decoration-none'}>
                            Entertainment
                        </NavLink>
                        
                        
                        <NavLink to="/news/business" className={({isActive}) => 
                            isActive? 'text-white bg-black px-3 py-2 rounded-pill mr-3 text-decoration-none': 'text-secondary-emphasis mx-3 mt-1 text-decoration-none'}>                                
                            Business
                        </NavLink>
                        <NavLink to="/news/health" className={({isActive}) => 
                            isActive? 'text-white bg-black px-3 py-2 rounded-pill mr-3 text-decoration-none': 'text-secondary-emphasis mx-3 mt-1 text-decoration-none'}>                              
                            Health
                        </NavLink>
                    </Nav>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs="auto">
                                <FormControl
                                    type='text'
                                    placeholder='Explore news...'
                                    className='form-input form-control-lg mt-lg-2 mt-md-2 mt-sm-2 mt-xl-0' 
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                />
                            </Col>
                            <Col xs="auto" className='mt-1'>
                                <Button className='mt-lg-2 ml-2 mt-md-2 mt-sm-2 mt-xl-0 btn-light' onClick={handleSubmit}>Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar