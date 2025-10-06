import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/mainLogo.png";
import style from "../styles/navBar.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

function NavBarComponent() {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/auth");
    }, 1500);
  }

  return (
    <Navbar
      expand="lg"
      className={`${style.Nav} py-3`}
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <img
            src={image}
            alt="MegaMart Logo"
            width="60"
            height="60"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold text-light">MegaMart</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto gap-3 text-center">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/shop")}>Shop</Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
          </Nav>

          <Nav className="d-flex align-items-center gap-3">
            <div style={{ position: "relative", cursor: "pointer" }}>
              <IconContext.Provider value={{ className: style.icon }}>
                <FiShoppingCart
                  size={22}
                  color="white"
                  onClick={() => navigate("cart")}
                />
              </IconContext.Provider>
              {items.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-8px",
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
                  {items.length}
                </span>
              )}
            </div>

            <button
              onClick={logOut}
              style={{
                border: "1px solid #fff",
                borderRadius: "6px",
                padding: "5px 12px",
                color: "#fff",
                background: "transparent",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
