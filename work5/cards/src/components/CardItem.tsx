import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export type TItem = {
  title: string;
  srcImg?: string;
};

export const CardItem = ({ title, srcImg }: TItem) => {
  return (
    <Card style={{ width: "18rem" }}>
      {srcImg && <Card.Img variant="top" src={srcImg} />}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
