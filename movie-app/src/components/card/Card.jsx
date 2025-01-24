import './card.css'
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


function Card({movieList}) {
  const navigate = useNavigate();
  return (
    <>
    {movieList.length > 0 ? 
    <div id="heroDiv">
    {/* Iterate through movieList prop, creates a new array with .map and render cards dynamically */}
    {movieList.map((movie => {
      return (
      <div className="card" key={movie.id} onClick={() => { navigate('/details', { state: { movie } });
}}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={`${movie.title}-poster`}/>
        <div className="card-body">
          <p className="card-title">{movie.title}</p>
          <p className="card-text"><small>Release Date: {movie.release_date}</small></p>
          <p className="card-text">{movie.overview}</p>
        </div>
    </div> 
      );
    }))}
    </div>
    : null}
    </>
  )
}

// Strict mode keeps on telling me my props aren't validated, this validates the prop types and gets rid of the red lines.
Card.propTypes = {
  movieList: PropTypes.array.isRequired, 
};

export default Card
