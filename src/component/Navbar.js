import '../style/nav.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link }  from 'react-router-dom';

function NavBar (){
    return (
      <div className="container-nav">
        <Navbar collapseOnSelect expand="lg" className="nav-bar" fixed="top">
          <Container fluid>
            <Navbar.Brand className="logo text-white">UWM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" bg="light">
              <Nav className="me-auto myNav">
                <NavLink id="nav-menu" to='/'>Home</NavLink>
                <NavLink id="nav-menu">About</NavLink>
                <Nav.Link id="nav-menu" >Contact us</Nav.Link>
                <Nav.Link id="nav-menu">Waste Disposal Guidlines</Nav.Link>
              </Nav>
              <Nav>
                <NavLink id="nav-menu" to='/Login'>Log in</NavLink>
                <button className="my-btn my-btn-primary btn-lg round" >Register </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
export default NavBar;