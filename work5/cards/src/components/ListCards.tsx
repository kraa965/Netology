import { Row, Col } from "react-bootstrap";
import { CardItem, TItem } from "./CardItem.tsx";

type TList = {
  list: TItem[];
};

const ListCards = ({ list }: TList) => {
  return (
    <Row>
      {list.map((e) => (
        <Col>
          <CardItem title={e.title} srcImg={e.srcImg} />
        </Col>
      ))}
    </Row>
  );
};

export default ListCards;
