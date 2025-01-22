import { useState, useEffect } from "react";
import '../App.css'
import axios from "axios"
import Card from "../components/card/Card"


function HomePage() {
 const [searchInput, setSearchInput] = useState("")
 const [movieList, setMovieList] = useState([])


 // Axios get to search movie ID for the similar movies API from user input on submit
 const handleSubmit = async () => {
    // This is vite's way of doing .ENV
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(searchInput)}&include_adult=false&language=en-US&page=1`;
    try {
    const response = await axios.get(url);
    if (response.data.results && response.data.results.length > 0) {
      setMovieList(response.data.results)
    }
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

export default HomePage
