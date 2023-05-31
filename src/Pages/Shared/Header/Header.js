import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <div >
             <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container >
        <Navbar.Brand className='p-3 me-3' href="/">Moon Hospital & Private Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#doctors">Our Doctors</Nav.Link>
            <Nav.Link href="#diagonstics">Diagonstics Tests</Nav.Link>
            <NavDropdown title="Client Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/registration">Registration</NavDropdown.Item>
              <NavDropdown.Item href="/login">
               Login
              </NavDropdown.Item>
              </NavDropdown>    
          </Nav>
          <Nav>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </div>
    );
};

export default Header;