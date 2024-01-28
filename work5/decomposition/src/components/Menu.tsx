import { MenuItem } from "./MenuItem";
import { MenuInterface } from "../interface/interface.ts";

export const Menu = ({ items }: MenuInterface) => {
  return (
    <ul className="flex gap-2 text-blue-400">
      {items.map((item, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </ul>
  );
};
