import { MenuInterface } from "../interface/interface.ts";

export const MenuItem = ({ item }: MenuInterface) => {
  return (
    <li className="flex flex-col items-center justify-center">
      <a href="#">{item}</a>
    </li>
  );
};
