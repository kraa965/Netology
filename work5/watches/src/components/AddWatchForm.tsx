import { FC, useState } from "react";
import { WatchData } from "../interface/interface.ts";
import { Watches } from "./Watches.tsx";

export const AddWatchForm: FC = () => {
  const [clocks, setClocks] = useState<WatchData[]>([]);
  const [name, setName] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  const addWatch = () => {
    const newClock: WatchData = {
      id: Date.now().toString(),
      name,
      timezone,
    };
    setClocks((prevClocks) => [...prevClocks, newClock]);
    setName("");
    setTimezone("");
  };

  const removeWatch = (id: string) => {
    setClocks((prevClocks) => prevClocks.filter((clock) => clock.id !== id));
  };
  return (
    <div>
      <div className="">
        <label>
          Название
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Временная зона
          <input
            type="text"
            placeholder="Timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />
        </label>
        <button className="" onClick={addWatch}>
          Добавить
        </button>
      </div>
      <div className="">
        {clocks.map((clock) => (
          <Watches key={clock.id} {...clock} onDelete={removeWatch} />
        ))}
      </div>
    </div>
  );
};
