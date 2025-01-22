import './Card.css'
import PropTypes from 'prop-types';

function Card({movieList}) {
  console.log(movieList, '<< movieList in component')
  return (
    <>
    {movieList.length > 0 ? 
    <div id="heroDiv">
    {movieList.map((movie => {
      return (
      <div className="card" key={movie.id}>
        <a href={`https://www.themoviedb.org/movie/${movie.id}-${movie.title}?language=en-US`}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={`${movie.title}-poster`}/>
        </a>
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
