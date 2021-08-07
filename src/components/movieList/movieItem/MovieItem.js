import { Link } from 'react-router-dom';
import CONFIG from '../../../globals/config';

const MovieItem = ({ movie }) => {
	return (
		<div className='movie-item'>
			<Link
				style={{ textDecoration: 'none' }}
				className='card'
				to={{ pathname: `/details/${movie.id}`, state: movie }}
			>
				<div className='body-card'>
					<img
						className='lazyload'
						src={CONFIG.BASE_IMAGE_URL + movie.poster_path}
						alt={movie.title}
					/>
				</div>
				<div className='footer-card'>
					<h3 className='name-movie'>{movie.title}</h3>
					<span className='rating'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z'
								fill='#FFDD00'
							/>
						</svg>
						{movie.vote_average}
					</span>
					<p className='release-date'>{movie.release_date}</p>
				</div>
			</Link>
		</div>
	);
};

export default MovieItem;
