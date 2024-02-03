import './App.css';
import { DataComponent } from './components/DataComponent.tsx';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <DataComponent url="http://localhost:7070/data" title="Data Component" />
      <DataComponent url="http://localhost:7070/error" title="Error Component" />
      <DataComponent url="http://localhost:7070/loading" title="Loading Component" />
    </div>
  );
}

export default App;
