import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import StateCard from './components/StateCard';
import Card1 from './components/Card1';
import Ticket from './components/Ticket';
import Heritage from './components/Heritage';
import Qrcode from './components/Qrcode';
import Description from './components/Description';
function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Card /> */}
      {/* <StateCard /> */}
      {/* <Card1 /> */}
      {/* <Ticket /> */}
      {/* < Heritage /> */}
      {/* <Qrcode /> */}
      <Description />
    </div>
  );
}

export default App;
