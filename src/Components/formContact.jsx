import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <Form className="p-5">
      <Form.Group
        className="mb-5 d-lg-flex justify-content-between gap-3"
        controlId="formBasicEmail"
      >
        <Form.Control
          type="text"
          placeholder="Your Name"
          className="flex-fill mb-3"
        />
        <Form.Control
          type="text"
          placeholder="Your Email"
          className="flex-fill mb-3"
        />
        <Form.Control
          type="number"
          placeholder="Your Phone"
          className="flex-fill mb-3"
        />
      </Form.Group>
      <Form.Control
        placeholder="Your Message"
        className="mb-5"
        as="textarea"
        rows={10}
      />

      <div className="w-100" style={{ justifyContent: "end", display: "flex" }}>
        <Button variant="danger" type="submit">
          Send Message
        </Button>
      </div>
    </Form>
  );
}

export default BasicExample;
