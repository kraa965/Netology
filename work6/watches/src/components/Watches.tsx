import { useState, useEffect, FC } from "react";
import moment from "moment-timezone";

export const Watches: FC = ({ id, name, timezone, onDelete }) => {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const intervalSecId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalSecId);
    };
  }, []);

  function getCurrentTime() {
    const currentTime = moment()
      .utcOffset(Number(timezone) * 60)
      .format("HH:mm:ss");
    return `${name} (${timezone}): ${currentTime}`;
  }

  return (
    <div className="">
      <div>{time}</div>
      <button className="remove-button" onClick={() => onDelete(id)}>
        ⨯
      </button>
    </div>
  );
};
