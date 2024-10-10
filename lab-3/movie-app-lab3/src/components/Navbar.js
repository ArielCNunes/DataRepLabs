// Importing components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Functional component 'NavigationBar' to render a dark-themed navigation bar
const NavigationBar = () => {
  return (
    // Navbar component with dark background
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Brand logo linked to the home page */}
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;