import { News } from "./components/News.tsx";
import { NewsItem } from "./components/NewsItem.tsx";
import { Search } from "./components/Search.tsx";
import { Banner } from "./components/Banner.tsx";
import { Services } from "./components/Services.tsx";
import { Service } from "./components/Service.tsx";
import { Menu } from "./components/Menu.tsx";

const newsIcon = (
  <svg
    fill="#000000"
    height="20px"
    width="20px"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    enableBackground="new 0 0 24 24"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g id="news">
        {" "}
        <polygon points="22,22 4,22 4,24 24,24 24,21 22,21 "></polygon>
        <path d="M18.414,0H4v9h2V2h10v6h6v3h2V5.586L18.414,0z M18,6V2.414L21.586,6H18z"></path>
        <polygon points="5.999,20 5.999,12 4,12 4,15.926 2,12 0.002,12 0.002,20 2,20 2,15.914 4,20 "></polygon>
        <polygon points="12,12 12,20 14,20 15,18 16,20 18,20 18,12 16,12 16,16 15,14 14,16 14,12 "></polygon>
        <polygon points="11,14 11,12 9,12 8,12 7,12 7,20 8,20 9,20 11,20 11,18 9,18 9,17 10,17 10,15 9,15 9,14 "></polygon>
        <path d="M21,12c-1,0-2,1-2,2.5s1,2.5,2,2.5h0.553c0.642,0,0.577,1,0,1H19v2h2.673c0,0,2.327,0,2.327-2.5S22.573,15,21.573,15 c-0.766,0-0.755-1,0-1H24v-2h-2H21z"></path>{" "}
      </g>{" "}
    </g>
  </svg>
);

const news = [
  {
    id: 1,
    name: "news name 1",
    icon: newsIcon,
    href: "#",
  },
  {
    id: 2,
    name: "news name 2",
    icon: newsIcon,
    href: "#",
  },
  {
    id: 3,
    name: "news name 3",
    icon: newsIcon,
    href: "#",
  },
];

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <News>
          {[
            <Menu items={["Сейчас в СМИ", "в Германии", "Рекомендуем"]} />,
            ...news.map((newsItem) => (
              <NewsItem {...newsItem} key={newsItem.id} />
            )),
          ]}
        </News>
        <Search />
        <Banner />
        <Services>
          <Service title="Погода">
            <div>+17</div>
          </Service>
          <Service title="Телепрограмма">
            <ul>
              <li>02:00 ТНТ.Best</li>
              <li>02:15 Джинглики</li>
              <li>02:25 Наедине со всеми</li>
            </ul>
          </Service>
          <Service title="Эфир">
            <div>Управление как исскуство</div>
          </Service>
        </Services>
      </div>
    </>
  );
}

export default App;
