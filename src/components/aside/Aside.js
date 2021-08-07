import React from 'react';
import './aside.css';
const Aside = () => {
	return (
		<section className='aside'>
			<div className='content-aside'>
				<h2>
					Download <span className='watch'>Watch</span> <span className='movies'>Movies</span> app{' '}
					<br />
					and get the bonus
				</h2>
				<p className='aside-content'>
					This application was built with the PWA feature <br /> so that it can be added to the
					homescreen <br /> and can be accessed even when you are offline.
				</p>
				<div className='app-store'>
					<span>
						<img src='/icons/icon_play_store_android.jpg' alt='Android' />
					</span>
					<span>
						<img src='/icons/icon_play_store_apple.jpg' alt='Apple' />
					</span>
				</div>
			</div>
			<div className='image-android'>
				<img src='/images/mobile.jpg' alt='mobile' />
			</div>
		</section>
	);
};

export default Aside;
