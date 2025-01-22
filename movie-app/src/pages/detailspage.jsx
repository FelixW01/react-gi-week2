import '../App.css'
import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/navbar'

function DetailsPage() {
    const location = useLocation();
    const movie = location.state?.movie;
    console.log("Movie Data in DetailsPage:", movie);

  return (
    <>
    <Navbar />
    <div className="info-card">
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title}-poster`} className="card-image"/>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
    </div>
    </>
  )
}

export default DetailsPage
