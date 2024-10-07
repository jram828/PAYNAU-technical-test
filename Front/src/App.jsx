// import './App.css'
import { Routes, Route} from "react-router-dom";
import People from './components/people/people';
import Details from './components/details/details';
import axios from "axios";
import Register from "./components/register/register";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL; 
console.log(VITE_BASE_URL);
// axios.defaults.baseURL = "http://localhost:3001/person";
function App() {
  
  axios.defaults.baseURL = VITE_BASE_URL;

  return (
    <>
      <Routes>
        <Route path="/" element={ <People/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
