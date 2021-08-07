import SearchMovieItem from './movieItem/SearchMovieItem';
import './searchMovies.css';

const SearchMovies = ({ searchMovies }) => {
	return (
		<section className='search-movies'>
			<div className='container-search'>
				{searchMovies &&
					searchMovies.map((movie) => <SearchMovieItem movie={movie} key={movie.id} />)}
			</div>
		</section>
	);
};

export default SearchMovies;
