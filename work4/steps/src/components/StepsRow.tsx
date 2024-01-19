import { FC } from "react";

export const StepsRow: FC = ({ item, formatDate, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center self-center">
      <div>{formatDate(item.date)}</div>
      <div>{item.distance}</div>
      <div>
        <button onClick={onEdit}>✎</button>
        <button onClick={onDelete}>✘</button>
      </div>
    </div>
  );
};

export default StepsRow;
