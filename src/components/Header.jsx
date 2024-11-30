import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="top-header">
                <div className="row justify-content-between align-items-center row-gap-4">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="header-left column-gap-4 d-flex row-gap-4">
                            <a className="address" href="#">
                                <i className="fa-solid fa-location-dot"></i>
                                <span>589 5th Ave, NY 10024, USA</span>
                            </a>
                            <a className="email" href="mailto:info@skillgrodemo.com">
                                <i className="fa-regular fa-envelope"></i>
                                <span>info@skillgrodemo.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="header-right d-flex justify-content-end align-items-center">
                            <ul className="d-flex align-items-center mb-0 column-gap-4 row-gap-4">
                                <li className="contact">
                                    <a href="tel:+1235998989">
                                        <i className="fa-solid fa-phone-volume"></i>
                                        <span>Call us: +123 599 8989</span>
                                    </a>
                                </li>
                                <li className="social d-flex align-items-center">
                                    <span>Follow Us On :</span>
                                    <ul className="d-flex align-items-center column-gap-3 ms-3">
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-navigation position-relative">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <div className="logo">
                            <a href="#">
                                <img src="../src/assets/images/logo/logo.png" alt="Logo" />
                            </a>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-3 col-lg-10 col-md-10 col-sm-10 col-10">
                        <Navbar expand="lg" className="navbar">
                            <Container>
                                <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
                                    <span className="navbar-toggler-icon"></span>
                                </Navbar.Toggle>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Nav.Link className="nav-link px-3" href="#home">
                                                Home
                                            </Nav.Link>
                                        </li>

                                        <Dropdown>
                                            <Dropdown.Toggle className='nav-link'>
                                                <span className='me-2'>Courses</span>
                                                <i className="fa-solid fa-angle-down align-middle"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">All Courses</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-2">Course Details</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    
                                        <Dropdown>
                                            <Dropdown.Toggle className='nav-link'>
                                                <span className='me-2'>Pages</span>
                                                <i className="fa-solid fa-angle-down align-middle"></i>
                                            </Dropdown.Toggle>
                                            
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">About Page</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-2">All Instructor</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-3">Instructor Details</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-4">All Events</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-5">Event Details</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-6">Student Login</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-7">Student Reg</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-8">404 Page</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-9">Contact</Dropdown.Item>
                                                <hr />
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle className='nav-link'>
                                                <span className='me-2'>Shop</span>
                                                <i className="fa-solid fa-angle-down align-middle"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Shop Page</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle className='nav-link'>
                                                <span className='me-2'>Blog</span>
                                                <i className="fa-solid fa-angle-down align-middle"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Latest Blog Grid</Dropdown.Item>
                                                <hr />
                                                <Dropdown.Item href="#/action-2">Blog Details</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                    <div className="col-xxl-6 col-xl-4">
                        <div className="search d-flex align-items-center ps-5">
                            <div className="input-group rounded-pill">
                                <a href="#" className="input-group-text rounded-start-pill d-flex align-items-center column-gap-2" style={{ backgroundColor: 'white' }}>
                                    <i className="fa-solid fa-border-all"></i>
                                    <span>Categories</span>
                                    <i className="fa-solid fa-angle-down" style={{ fontSize: '12px' }}></i>
                                </a>
                                <input type="text" className="form-control rounded-end-pill" />
                                <a href="#" className="input-group-text1 rounded-circle">
                                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                                </a>
                            </div>

                            <div className="btn-like">
                                <a className="btn position-relative rounded-circle p-0" href="#">
                                    <i className="fa-regular fa-heart" style={{ fontSize: '20px' }}></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle p-0" style={{ backgroundColor: '#FFC224', height: '22px', width: '22px', lineHeight: '22px' }}>
                                        0
                                    </span>
                                </a>
                            </div>

                            <div className="btn-cart pe-4">
                                <a className="btn position-relative rounded-circle p-0" href="#">
                                    <i className="fa-solid fa-basket-shopping" style={{ fontSize: '20px' }}></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle p-0" style={{ backgroundColor: '#FFC224', height: '22px', width: '22px', lineHeight: '22px' }}>
                                        0
                                    </span>
                                </a>
                            </div>

                            <a className="btn-1" href="#">
                                <span>Log in</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;