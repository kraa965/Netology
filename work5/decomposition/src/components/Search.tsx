import { Menu } from "./Menu.tsx";

export const Search = () => {
  return (
    <div className="flex flex-col items-center ">
      <form className="">
        <Menu
          items={[
            "Видео",
            "Картинки",
            "Новости",
            "Карты",
            "Маркет",
            "Переводчик",
            "Эфир",
            "еще",
          ]}
        />
        <div className={"flex"}>
          <input className="border border-amber-300 w-full" />
          <button className="bg-amber-300">Найти</button>
        </div>
      </form>
    </div>
  );
};
