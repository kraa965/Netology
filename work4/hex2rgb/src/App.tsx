import Hex2Rgb from "./components/Hex2RGB.tsx";
import { useEffect, useState } from "react";

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `RGB(${r}, ${g}, ${b})`;
};

function App() {
  const [hexColor, setHexColor] = useState("");
  const [output, setOutput] = useState({ message: "", color: "" });

  useEffect(() => {
    if (hexColor.length === 7 && /^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
      const rgb = hexToRgb(hexColor);
      setOutput({ message: rgb, color: hexColor });
    } else if (
      hexColor.length > 7 ||
      (hexColor.length === 7 && !/^#[0-9A-Fa-f]{6}$/.test(hexColor))
    ) {
      setOutput({ message: "Ошибка!", color: "red" });
    } else {
      setOutput({ message: "", color: "" });
    }
  }, [hexColor]);

  const handleHexColor = (e) => {
    setHexColor(e.target.value);
  };

  return (
    <div
      className={`flex w-full h-screen items-center justify-center`}
      style={{ backgroundColor: output.color }}
    >
      <Hex2Rgb
        handleHexColor={handleHexColor}
        hexColor={hexColor}
        output={output}
      />
    </div>
  );
}

export default App;
