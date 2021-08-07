import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
	const [clickNav, setclickNav] = useState(false);

	const handleClickNav = () => setclickNav(!clickNav);

	return (
		<header className='header'>
			<div className='brand'>
				<Link className='logo' to='/'>
					<img src='/icons/logo-watch-movies.png' alt='Watch Movie' style={{ height: '44px' }} />
				</Link>
			</div>
			<div className='menu-button' onClick={handleClickNav}>
				<button id='hamburgerButton' title='menu' aria-label='menu'>
					<svg
						style={{
							width: '36',
							height: '30',
						}}
						viewBox='0 0 18 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 12H13V10H0V12ZM0 7H10V5H0V7ZM0 0V2H13V0H0ZM18 9.59L14.42 6L18 2.41L16.59 1L11.59 6L16.59 11L18 9.59Z'
							fill='#F4F2F5'
						/>
					</svg>
				</button>
			</div>
			<nav id='navigationDrawer' className={clickNav ? 'navigation open' : 'navigation'}>
				<ul className='nav-list'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/upcoming'>Up Coming</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
