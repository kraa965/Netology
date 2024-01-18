import { FC } from "react";

const Hex2Rgb: FC = ({ handleHexColor, hexColor, output }) => {
  return (
    <div className={`flex flex-col w-36`}>
      <input
        className="border"
        type="text"
        value={hexColor}
        onChange={handleHexColor}
        placeholder="#000000"
        maxLength="7"
      ></input>
      <div
        className={`bg-[#1d2834] opacity-50 text-white flex justify-center mt-2`}
      >
        {output.message}
      </div>
    </div>
  );
};

export default Hex2Rgb;
