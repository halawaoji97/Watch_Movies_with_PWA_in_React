import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import API_ENDPOINTS from '../globals/api-endpoint';
import NowPlayingMovies from '../components/movieList/NowPlayingMovies';
import TopRated from '../components/movieList/TopRated';
import Aside from '../components/aside/Aside';
import Footer from '../components/footer/Footer';
import Offline from '../utils/Offline';

export default function Homepage() {
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

	function handleOfflineStatus() {
		setOfflineStatus(!navigator.onLine);
	}

	const fetchNowPlaying = async () => {
		const { data } = await axios.get(API_ENDPOINTS.NOW_PLAYING);
		setNowPlayingMovies(data.results);
	};

	const fetchTopRated = async () => {
		const { data } = await axios.get(API_ENDPOINTS.TOP_RATED);
		setTopRatedMovies(data.results);
	};

	useEffect(() => {
		fetchNowPlaying();
	}, []);

	useEffect(() => {
		fetchTopRated();
	}, []);

	useEffect(() => {
		handleOfflineStatus();
		window.addEventListener('online', handleOfflineStatus);
		window.addEventListener('offline', handleOfflineStatus);

		return () => {
			window.removeEventListener('online', handleOfflineStatus);
			window.removeEventListener('offline', handleOfflineStatus);
		};
	}, [offlineStatus]);

	return (
		<>
			{offlineStatus && <Offline />}
			<Header />
			<Hero />
			<NowPlayingMovies nowPlayingMovies={nowPlayingMovies} />
			<TopRated topRatedMovies={topRatedMovies} />
			<Aside />
			<Footer />
		</>
	);
}
