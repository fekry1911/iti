import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import image from "../assets/images/mainLogo.png";
import style from "../styles/navBar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";

function NavBarComponent() {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: " #ffffffff",
          borderBottom: "1px solid  #7f5eff",
        }}
      >
        <Container>
          <Nav className="me-auto d-flex">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="text-center justify-content-center align-items-center m-0 p-0">
            <Navbar.Brand className={`${style.Navbar_Brand} mx-4`}>
              MegaMart
            </Navbar.Brand>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                1
              </div>
              <IconContext.Provider value={{ className: style.icon }}>
                <div>
                  <FiShoppingCart />
                </div>
              </IconContext.Provider>
            </div>
          </Nav>

          <Nav className="ms-auto d-flex">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#logout">LogOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
