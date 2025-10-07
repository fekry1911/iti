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
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { WishContext } from "../context/wishContext";

function NavBarComponent() {
  const { items } = useContext(CartContext);
  const { allWishitems } = useContext(WishContext);

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
            <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
            <Nav.Link onClick={() => navigate("about")}>About</Nav.Link>
          </Nav>

          <Nav className="d-flex align-items-center gap-3">
            <div
              style={{
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                onClick={() => navigate("cart")}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  height: "38px",
                  width: "38px",
                  borderRadius: "50%",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                <FaShoppingCart color="#2c3e50" size={18} />
              </div>

              {items.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-6px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {items.length}
                </span>
              )}
            </div>
            <div
              style={{
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                onClick={() => navigate("cart")}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  height: "38px",
                  width: "38px",
                  borderRadius: "50%",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                <FaHeart color="#e74c3c" size={18} />
              </div>

              {allWishitems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-4px",
                    right: "-6px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {allWishitems.length}
                </span>
              )}
            </div>

            <button
              onClick={logOut}
              style={{
                border: "1.5px solid #fff",
                borderRadius: "8px",
                padding: "6px 16px",
                color: "#fff",
                background: "transparent",
                cursor: "pointer",
                fontWeight: "500",
                letterSpacing: "0.5px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#2c3e50";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#fff";
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
