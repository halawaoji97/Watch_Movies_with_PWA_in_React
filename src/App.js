import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Details from './pages/Details';
import About from './pages/About';
import UpComing from './pages/UpComing';
import SplashScreen from './pages/SplashScreen';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1500);
	return (
		<>
			{isLoading === true ? (
				<SplashScreen />
			) : (
				<Router>
					<Route exact path='/' component={Homepage} />
					<Route path='/details/:id'>
						<Details />
					</Route>
					<Route path='/upcoming' component={UpComing} />
					<Route path='/about' component={About} />
				</Router>
			)}
		</>
	);
}

export default App;
