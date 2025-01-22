import { useState } from "react";
import './App.css'
import axios from "axios"

function App() {
 const [searchInput, setSearchInput] = useState("")

 const handleSubmit = async () => {
    console.log(searchInput, '<< searchInput')
    // This is vite's way of doing .ENV
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(searchInput)}&include_adult=false&language=en-US&page=1`;
    try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
   }
 }  

  return (
    <>
    <h1>Movie-DB</h1>
    <input id="searchInput" type="text" placeholder="Search a movie!" onChange={(e) => setSearchInput(e.target.value)} required></input>
    <button id="searchBtn" onClick={handleSubmit}>Search</button>
    </>
  )
}

export default App
