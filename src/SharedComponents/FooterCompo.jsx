import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function FooterComponent() {
  return (
    <footer
      style={{
        backgroundColor: "#0d0d0d",
        color: "white",
        padding: "50px 0 20px 0",
        marginTop: "50px",
      }}
    >
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h4 className="fw-bold mb-3">MegaMart</h4>
            <p style={{ opacity: 0.8 }}>
              Your one-stop shop for modern fashion, electronics, and lifestyle
              essentials. Fast delivery and 24/7 support.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white">
                <Facebook />
              </a>
              <a href="#" className="text-white">
                <Instagram />
              </a>
              <a href="#" className="text-white">
                <Twitter />
              </a>
              <a href="#" className="text-white">
                <Linkedin />
              </a>
            </div>
          </Col>

          <Col xs={6} md={2}>
            <h5 className="fw-semibold mb-3">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <h5 className="fw-semibold mb-3">Customer Care</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="fw-semibold mb-3">Get In Touch</h5>
            <p className="mb-1">
              <Mail size={16} className="me-2" /> support@shopsphere.com
            </p>
            <p className="mb-1">
              <Phone size={16} className="me-2" /> +20 123 456 789
            </p>
            <p>
              <MapPin size={16} className="me-2" /> Cairo, Egypt
            </p>
          </Col>
        </Row>
        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
        <p className="text-center mb-0" style={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} MegaMart. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
