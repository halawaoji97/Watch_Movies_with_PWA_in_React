import axios from 'axios';
import { useEffect, useState } from 'react';
import Aside from '../components/aside/Aside';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import UpComingMovies from '../components/movieList/UpComingMovies';
import API_ENDPOINT from '../globals/api-endpoint';
import Offline from '../utils/Offline';
import { useTitle } from '../utils/useTitle';

const UpComing = () => {
	useTitle('Up Coming Movies');
	const [upComingMovies, setUpComingMovies] = useState([]);
	const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

	function handleOfflineStatus() {
		setOfflineStatus(!navigator.onLine);
	}
	const fetchUpcoming = async () => {
		const { data } = await axios.get(API_ENDPOINT.UP_COMING);
		setUpComingMovies(data.results);
	};

	useEffect(() => {
		fetchUpcoming();
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
			<UpComingMovies upComingMovies={upComingMovies} />
			<Aside />
			<Footer />
		</>
	);
};

export default UpComing;
