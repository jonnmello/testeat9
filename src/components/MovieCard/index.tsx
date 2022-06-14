import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie;
}

const MovieCard = ( { movie } : Props ) => {
  return (
    <>
      <div className="movie-card">
        <h6>Acessar/movies/{movie.id}</h6>
      </div>
    </>
  );
};

export default MovieCard;