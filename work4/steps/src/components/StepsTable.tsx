import StepsRow from "./StepsRow";
import { FC } from "react";
import { DataTableProps } from "../types/types.ts";

const formatDate = (date: string): string => {
  return date.split("-").reverse().join(".");
};

const sortByDate = (data: { date: string; distance: number }[]) => {
  return data
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const StepsTable: FC<DataTableProps> = ({ data, onDelete, onEdit }) => {
  const sortedData = sortByDate(data);

  return (
    <>
      <div className="w-[30%] self-center">
        <div className="flex justify-between items-center p-2">
          <div>Дата (ДД.ММ.ГГГГ)</div>
          <div>Пройдено км</div>
          <div>Действия</div>
        </div>
        <div className="border border-white p-2 rounded-md">
          {sortedData.map((item, index) => (
            <StepsRow
              item={item}
              key={index}
              formatDate={formatDate}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
};
