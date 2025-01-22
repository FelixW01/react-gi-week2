import { useState, useEffect } from "react";
import './App.css'
import axios from "axios"
import Card from "./components/card"
function App() {
 const [searchInput, setSearchInput] = useState("")
 const [movieId, setMovieId] = useState("");
 const [movieList, setMovieList] = useState([])

 const handleSubmit = async () => {
    console.log(searchInput, '<< searchInput')
    // This is vite's way of doing .ENV
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(searchInput)}&include_adult=false&language=en-US&page=1`;
    try {
    const response = await axios.get(url);
    console.log(response, '<<< Get movie by name');
    if (response.data.results && response.data.results.length > 0) {
      setMovieId(response.data.results[0].id);
    }
  } catch (error) {
    console.error(error);
   }
 }  

 // useEffect tracks and runs this callback whenever movieId changes
 useEffect(() => {
    if (movieId) {
      similarMovies();
    }
 }, [movieId])

 const similarMovies = async () => {
  console.log(movieId)
  const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(movieId)}/similar?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false&language=en-US&page=1`;
  try {
    const response = await axios.get(url);
    console.log(response, '<<< Similar movie by movieID');
    setMovieList(response.data.results)
  } catch (error) {   
    console.error(error);
   }
 }

  useEffect(() => {
    console.log(movieList, '<<<< MovieList');
  }, [movieList]);
  
  return (
    <>
    <h1>Movie Search</h1>
    <div className="inputDiv">
      <input id="searchInput" type="text" placeholder="Search a movie!" onChange={(e) => setSearchInput(e.target.value)} required></input>
      <button id="searchBtn" onClick={handleSubmit}>Search</button>
    </div>
    <Card movieList={movieList} />
    </>
  )
}

export default App
