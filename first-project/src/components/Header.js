import React from 'react';
import reactLogo from '../images/react-logo.png';

function Header() {
	return (
		<>
			<header>
				<nav>
					<img src={reactLogo} alt='logo'></img>
					<h3>ReactFacts</h3>
					<h4>React Course - Project 1</h4>
				</nav>
			</header>
		</>
	);
}

export default Header;
