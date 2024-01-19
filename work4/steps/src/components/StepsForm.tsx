import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { InputFormProps } from "../types/types.ts";

export const StepsForm: FC<InputFormProps> = ({ data, onSubmit }) => {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");

  useEffect(() => {
    // Обновляем состояние при изменении внешних данных
    if (data) {
      setDate(data.date);
      setDistance(data.distance.toString());
    }
  }, [data]);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) >= 0) {
      setDistance(value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (date && distance) {
      onSubmit(date, parseFloat(distance));
      setDate("");
      setDistance("");
    }
  };

  return (
    <>
      <form
        className="flex justify-between items-center w-[20%] self-center"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="flex flex-col">
            <span className="">Дата (ДД.ММ.ГГГГ)</span>
            <input
              type="date"
              className="w-36"
              name="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </label>
        </div>
        <div className="flex flex-col">
          <label className="">
            <span className="flex flex-col">Пройдено км</span>
            <input
              type="text"
              className=""
              name="distance"
              value={distance}
              onChange={handleDistanceChange}
              pattern="\d+(\.\d+)?"
              required
            />
          </label>
        </div>
        <div className="flex flex-col mt-5">
          <button type="submit" className="form-control">
            OK
          </button>
        </div>
      </form>
    </>
  );
};

export default StepsForm;
