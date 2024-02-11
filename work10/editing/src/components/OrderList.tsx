import { DataState } from "../models/models";
import Item from "./Item";
import { useSelector } from "react-redux";

function OrderList() {
  const data = useSelector((state: DataState) => state.data.data);

  console.log(data);

  return (
    <ul className="order_list">
      {data.map((el) => (
        <Item element={el} key={el.id} />
      ))}
    </ul>
  );
}

export default OrderList;
