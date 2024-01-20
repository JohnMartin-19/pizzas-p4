import { useEffect } from 'react';
import './App.css';

function App() {
 useEffect(()=>{
  fetch("http://127.0.0.1:8000/api/pizza/")
    .then(function(response){response.json()
    .then(function(data) {
        console.log(data);
    });
  })
  .catch(function(error) {
    console.log('Fetch Error:', error);
  });
  },[])
  return (
    <div className="App">
      <h1>Welcome to Pizza HUB</h1>
    </div>
  );
}

export default App;
