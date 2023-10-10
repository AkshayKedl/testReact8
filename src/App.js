import logo from './logo.svg';
import './App.css';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    ReactGA.initialize("G-XHQX30043B");
  },[])
  return (
    <div className="App">
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

    <div>Sample react app8 for test</div>
    <button onClick={() => ReactGA.event("test_event_proj8")} >Eventcapture</button>
    </div>
  );
}

export default App;
