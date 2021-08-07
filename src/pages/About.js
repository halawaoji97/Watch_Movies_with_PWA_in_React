import Aside from '../components/aside/Aside';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import AboutApp from '../components/about/About';
import { useTitle } from '../utils/useTitle';
import { useEffect, useState } from 'react';
import Offline from '../utils/Offline';

const About = () => {
	useTitle('About');
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
	return (
		<>
			{offlineStatus && <Offline />}
			<Header />
			<AboutApp />
			<Aside />
			<Footer />
		</>
	);
};

export default About;
