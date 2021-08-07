import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
	return (
		<footer>
			<div className='brand'>
				<Link className='logo' to='/'>
					<img src='/icons/logo-watch-movies.png' alt='Watch Movie' style={{ height: '44px' }} />
				</Link>
				<p className='brand-tagline'>
					Displaying movies of all genres from
					<Link to='https://www.themoviedb.org/' target='_blank' rel='noopener noreferrer'>
						TMDB
					</Link>
				</p>
			</div>
			<div className='support'>
				<h6>Support</h6>
				<ul>
					<li>
						<Link to='#'>Privacy & Policy</Link>
					</li>
					<li>
						<Link to='#'>Term & Conditions</Link>
					</li>
					<li>
						<Link to='#'>Support System</Link>
					</li>
				</ul>
			</div>
			<div className='our-services'>
				<h6>Our Services</h6>
				<ul>
					<li>
						<Link to='#'>About us</Link>
					</li>
					<li>
						<Link to='#'>Carrer</Link>
					</li>
					<li>
						<Link to='#'>Developer</Link>
					</li>
				</ul>
			</div>
			<div className='contact'>
				<h6>Contact Us</h6>
				<ul>
					<li>
						<Link to='#'>
							<i className='fab fa-instagram'></i>
						</Link>
					</li>
					<li>
						<Link to='#'>
							<i className='fab fa-facebook-f'></i>
						</Link>
					</li>
					<li>
						<Link to='mailto:support@watchmovies.com'>
							<i className='far fa-envelope'></i>
						</Link>
					</li>
				</ul>
			</div>
			<div className='copyright'>
				<p>
					&copy; Copyright 2021 | by{' '}
					<Link
						to='https://www.instagram.com/halawa_oji'
						target='=_blank'
						rel='noopener noreferrer'
					>
						Halawa Oji
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
