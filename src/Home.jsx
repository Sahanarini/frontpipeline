import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, {useRef} from 'react'
function Home() {
    return (
        <div>
            <Navbar expand="lg" className="bg-light text-light">
                
                <Container>
                    <Navbar.Brand href="#home">Taxi Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/create">Book taxi</Nav.Link>
                            <Nav.Link href="/customerreg">Customer Register</Nav.Link>   
                            <Nav.Link href="/viewemp">cutomer details</Nav.Link>
                            <Nav.Link href="/View">Booking history</Nav.Link>
                            <Nav.Link href="/View"></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                   </Container>
            </Navbar>
            <div class="container-fluid bg-dark">
                <div class="row bg-dark text-light">
                    <img src="3.jpg" class="img-fluid" alt="food"></img>
                    <div class="centered font2 text-light">Taxi Booking System</div>
                </div>
            </div>
            <div class="container-fluid p-3 bg-white">
                <div class="row bg-dark text-light">
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                        <img src="2.jpg" class="img-fluid" alt="food"></img>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                        <h5>Taxi! whenever and Whereever</h5>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis recusandae architecto maxime
                            dolore at numquam et dolor quibusdam ex sint quis odit repudiandae atque, est provident dolorum
                            amet ipsa facilis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis recusandae
                            architecto maxime
                            dolore at numquam et dolor quibusdam ex sint quis odit repudiandae atque, est provident dolorum
                            amet ipsa facilis?
                        </p>
                    </div>
                </div>
            </div>
            <footer>
                <div class="container-fluid bg-dark">
                    <div class="row bg-dark text-light">
                        <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                            <a href="#" class="nav-link p-3"> <i class="fa-solid fa-location-dot "></i> madurai, tamilNadu</a>
                            <a href="#" class="nav-link p-3"> <i class="fa-solid fa-phone"></i> 75627569856</a>
                            <a href="#" class="nav-link p-3"> <i class="fa-solid fa-envelope"></i> drivinglicenseservice@gmail.com</a>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 p-5">
                            <h5>About</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis recusandae architecto maxime
                                dolore at numquam et dolor quibusdam ex sint quis odit repudiandae atque, est provident dolorum
                                amet ipsa facilis?</p>
                            <a href="#" class="nav-link p-3"> <i class="fa-brands fa-twitter"></i> &nbsp;
                                <i class="fa-brands fa-facebook"></i> &nbsp;
                                <i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Home
