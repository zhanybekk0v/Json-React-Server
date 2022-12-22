import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to='/'>

            <Navbar.Brand >Home</Navbar.Brand>
          </Link>
          <Link to='/add'>

            <Navbar.Brand >add-product</Navbar.Brand>
          </Link>
          <Link to='/contacts'>

            <Navbar.Brand >contacts</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>


    </>
  );
}

export default Header;