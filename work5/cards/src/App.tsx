import "./App.css";
import ListCards from "./components/ListCards.tsx";

const listCard = [
  {
    title: "заголовок",
    srcImg:
      "https://259506.selcdn.ru/sites-static/site790524/ec325978-7cf5-4a48-b0ca-15add5237de6/ec325978-7cf5-4a48-b0ca-15add5237de6-6505301.png",
  },
  { title: "заголовок" },
];

function App() {
  return <ListCards list={listCard} />;
}

export default App;
