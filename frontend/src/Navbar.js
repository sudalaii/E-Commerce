

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import { FaShoppingCart } from "react-icons/fa";
// import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';
import "./App.css";
// import { BsSearch } from 'react-icons/bs';
// import axios from 'axios';
import { IoMdLogOut } from "react-icons/io";

function NavBar() {
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const lg = async () => {
    try {
      // Send the logout request to the server
      // await axios.post("http://localhost:3001/user/logout");

      // Clear session storage or other authentication states
      sessionStorage.removeItem("isUserLogged");
      // localStorage.clear();
      // Adjust if needed

      // Redirect to the homepage or login page after logout
      navigate("/"); // Use navigate to redirect
    } catch (error) {
      // Handle errors, such as logging them or showing an alert
      console.error("Error during logout:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <div className='sticky-top animation'>
      <Navbar expand="lg" style={{ backgroundColor: "white" }}>
        <Container fluid>
          <Link to="/Home" className='nav-link p-1'>
            <Image src="/images/navlogo4.png" fluid style={{ width: "80px", height: "25px" }} />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="#" className='nav-link d-flex justify-content-center align-items-center'>Categories</Link>
              <Link to="/home2" className='nav-link d-flex justify-content-center align-items-center'>Gift with Boat</Link>
            </Nav>
            <Nav className="justify-content-end" activeKey="/home">
              <div className='d-flex justify-content-center align-items-center'>
                <input type="text" placeholder='Search' className="form-control" style={{ width: "300px", height: "40px", borderRadius: '40px', textAlign: 'center', backgroundColor: "#F4F5F7", fontSize: "18px" }} />
              </div>
              <div>
                <Link to="/addtocart" className='nav-link d-flex justify-content-center align-items-center'>
                  <h4><FaShoppingCart /></h4>
                </Link>
              </div>
              <div>
              <button className='m-1' onClick={lg} style={{color:"white",backgroundColor:"red",fontSize:"12px"}} ><IoMdLogOut/><br></br>logout</button>
                
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

