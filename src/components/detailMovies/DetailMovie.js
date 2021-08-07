import { useLocation } from 'react-router-dom';
import CONFIG from '../../globals/config';

function DetailMovie() {
	const location = useLocation();
	const { poster_path, title, vote_average, release_date, vote_count, popularity, overview } =
		location.state;

	return (
		<div className='detail-movie-item'>
			<div className='body-card'>
				<img className='movie-poster' src={CONFIG.BASE_IMAGE_URL + poster_path} alt={title} />
			</div>
			<div className='movie-info'>
				<div className='movie-vote'>
					<ul>
						<li>
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
								<title>Rating</title>
							</svg>
							{vote_average}
						</li>

						<li>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM9 9L13.34 4.66L12 10H21V12L18 19H9V9ZM1 9H5V21H1V9Z'
									fill='#FFDD00'
								/>
								<title>Vote count</title>
							</svg>
							{vote_count}
						</li>

						<li>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z'
									fill='#FFDD00'
								/>
								<title>Popularity</title>
							</svg>
							{popularity}
						</li>
					</ul>
				</div>
				<h2 className='movie-title'>{title}</h2>
				<p className='movie-overview'>{overview}</p>
				<div className='description'>
					<p className='movie-release-date'>Release date : {release_date}</p>
				</div>
				<div className='footer-card-detail'>
					<div className='playButtonContainer'>
						<button className='play' id='play'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9.5 16.5L16.5 12L9.5 7.5V16.5Z'
									fill='#202437'
								/>
							</svg>
							PLAY
						</button>
					</div>
					<div className='likeButtonContainer' id='likeButtonContainer'></div>
				</div>
			</div>
		</div>
	);
}

export default DetailMovie;
