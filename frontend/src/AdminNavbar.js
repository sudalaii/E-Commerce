import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
function AdminNavbar() {
    return (<>
        <div className=' sticky-top '>

        <Navbar expand="lg" style={{ backgroundColor: "white" }} >
          <Container fluid>
            <Link to="/admin" className='nav-link'><Image src="/images/admin.webp" fluid style={{ width: "200px", height: "45px" }} />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}

                navbarScroll
              >
                <div className='d-flex '>
                <Link to="/details" className='nav-link d-flex justify-content-center align-items-center 'style={{color :"blue" ,fontSize:"20px"}}>userdetails</Link>
                <Link to="/product" className='nav-link  d-flex justify-content-center align-items-center ' style={{color :"blue" ,fontSize:"20px"}}>product details</Link>
</div>

              </Nav>

              

            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    </>)
}
export default AdminNavbar;

