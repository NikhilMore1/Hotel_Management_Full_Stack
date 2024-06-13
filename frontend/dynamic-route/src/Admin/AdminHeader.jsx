import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function AdminHeader() {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#home"><b>ADMIN DASHBOARD</b></Navbar.Brand>&nbsp
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/Home' className='nav-link'><b><i>Home</i></b></Link>&nbsp
                   <Link to='/allBookings' className='nav-link'><i><b>Bookings</b></i></Link>&nbsp
                    <Link to='/addHotels' className='nav-link'><i><b>Add Hotels</b></i></Link>&nbsp
                    {/* <Link to='/Bookings' className='nav-link'><i><b>Bookings</b></i></Link> */}
                    <Link to='/allUsers' className='nav-link'><i><b>Users</b></i></Link>&nbsp
                    <Link to='/Information' className='nav-link'><i><b>About us</b></i></Link>&nbsp
                </Nav>
                <Nav>
                    <NavDropdown title="Select Role" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Registration">Admin</NavDropdown.Item>
                        <NavDropdown.Item href="/user">User</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
     );
}

export default AdminHeader;