import { News } from "./components/News.tsx";
import { NewsItem } from "./components/NewsItem.tsx";
import { Search } from "./components/Search.tsx";
import { Banner } from "./components/Banner.tsx";
import { Services } from "./components/Services.tsx";
import { Service } from "./components/Service.tsx";
import { Menu } from "./components/Menu.tsx";

const news = [
  {
    id: 1,
    name: "news name 1",
    icon: "icon 1",
    href: "#",
  },
  {
    id: 2,
    name: "news name 2",
    icon: "icon 2",
    href: "#",
  },
  {
    id: 3,
    name: "news name 3",
    icon: "icon 3",
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
            <div>Service content 1</div>
          </Service>
          <Service title="Телепрограмма">
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </Service>
          <Service title="Service 3">
            <div>Content service 3</div>
          </Service>
        </Services>
      </div>
    </>
  );
}

export default App;
