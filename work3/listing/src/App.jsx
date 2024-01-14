import './App.css';
import dataCustoms from './data/etsy.json';
import { Listing } from './components/Listing.jsx';

function App() {
  return (
    <>
      <Listing dataCustoms={dataCustoms} />
    </>
  );
}

export default App;
