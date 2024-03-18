import './App.css';
import Cartpages from './pages/Cartpages';
import Homepages from './pages/Homepages';
import Orderpages from './pages/Orderpages';

function App() {
  return (
    <div className="App">
      <Homepages/>
      <Orderpages/>
      <Cartpages/>
    </div>
  );
}

export default App;
