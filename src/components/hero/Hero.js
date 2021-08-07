import axios from 'axios';
import React, { useState } from 'react';
import API_ENDPOINT from '../../globals/api-endpoint';
import SearchMovies from '../movieList/SearchMovies';
import './hero.css';

export default function Hero() {
	const [searchMovies, setSearchMovies] = useState([]);
	const [keywordSearch, setKeywordSearch] = useState('');

	const fetchSearch = async () => {
		window.scrollTo({
			top: 500,
			behavior: 'smooth',
		});
		const { data } = await axios.get(`${API_ENDPOINT.SEARCH}&query=${keywordSearch}`);
		setSearchMovies(data.results);
	};

	return (
		<>
			<section className='hero'>
				<div className='content-hero'>
					<h1>Watch online for free.</h1>
					<p>
						Take your time to watch any movies
						<br />
						and enjoy it with your family
					</p>
					<div className='search-app'>
						<input
							type='search'
							onChange={(e) => setKeywordSearch(e.target.value)}
							name='search'
							id='search-movies-input'
							placeholder='Search'
						/>
						<button id='btn-search' onClick={fetchSearch}>
							Search
						</button>
					</div>
				</div>
			</section>
			{searchMovies && <SearchMovies searchMovies={searchMovies} />}
		</>
	);
}
