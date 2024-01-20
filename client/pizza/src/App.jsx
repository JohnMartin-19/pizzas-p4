import { useEffect,useState } from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavBar from './NavBar';
import Restaurants from './Restaurants';
import Pizza from'./Pizza';
import Home from './Home';

function App() {
  const [ setPage] = useState('/')

 useEffect(()=>{
  fetch("http://127.0.0.1:8000/api/restaurant/")
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
      <NavBar onChange={setPage} />
      <br />
      <Routes>
        <Route path="/Pizza" element={<Pizza heading='Available Pizzas' text='Below are our Pizza Varieties'  />} />
        <Route path="/Restaurants" element={<Restaurants heading='Below are our Restaurants'/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
