
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/restaurant/')
      .then((response) => (response.json))
      .then((pizzaList) => {
        console.log(pizzaList)
      })
  },[])
  return (
    <div className="App">
      <h1>Welcome to Pizza HUB</h1>
    </div>
  );
}

export default App;
