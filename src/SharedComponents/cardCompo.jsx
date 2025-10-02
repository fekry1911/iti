import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "../styles/card.module.css";

function CardComponent({ item }) {
  return (
    <Card
      className={style.card}
      style={{
        maxWidth: "300px",
        maxHeight: "400px",
        marginBottom: "10px",
      }}
    >
      <Card.Img
        variant="top"
        style={{ maxHeight: "200px", objectFit: "cover" }}
        src={item.images[0]}
      />
      <Card.Body className="p-2 ">
        <Card.Text className="clamp-2">{item.description}</Card.Text>
        <Card.Title className="clamp-1">{item.title}</Card.Title>
        <Card.Text>{item.price}USD</Card.Text>
        <Card.Text>EGP86,500.00</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
