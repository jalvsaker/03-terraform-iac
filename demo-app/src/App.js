import logo from './logo.svg';
// import './App.css';
import {useState} from "react";

function App() {
  const [hei, setHei] = useState(0);
  
  return (
    <div className="App">
      <button onClick={() => setHei(hei+1)}>{hei}</button>
    </div>
  );
}

export default App;
