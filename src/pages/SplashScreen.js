import Logo from '../images/logo-watch-movies.png';

const SplashScreen = () => {
	return (
		<section className='splash-screen'>
			<div className='spalsh-screen-container'>
				<img src={Logo} alt='Watch Movies for free' className='splash-screen-logo' />
			</div>
		</section>
	);
};

export default SplashScreen;
