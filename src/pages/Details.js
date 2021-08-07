import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Aside from '../components/aside/Aside';
import Footer from '../components/footer/Footer';
import DetailMovie from '../components/detailMovies/DetailMovie';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../utils/useTitle';
import '../components/detailMovies/detail-movies.css';
import Offline from '../utils/Offline';

const Details = () => {
	const location = useLocation();
	useTitle('Detail');
	const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

	function handleOfflineStatus() {
		setOfflineStatus(!navigator.onLine);
	}

	useEffect(() => {
		handleOfflineStatus();
		window.addEventListener('online', handleOfflineStatus);
		window.addEventListener('offline', handleOfflineStatus);

		return () => {
			window.removeEventListener('online', handleOfflineStatus);
			window.removeEventListener('offline', handleOfflineStatus);
		};
	}, [offlineStatus]);

	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<>
			{offlineStatus && <Offline />}
			<Header />
			<section className='container-detail'>
				<DetailMovie location={location.state} />
			</section>
			<Aside />
			<Footer />
		</>
	);
};

export default Details;
