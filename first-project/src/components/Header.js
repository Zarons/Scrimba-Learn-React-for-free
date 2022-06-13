import React from 'react';
import reactLogo from '../images/react-logo.png';

function Header() {
	return (
		<>
			<header>
				<nav className='nav'>
					<div className='nav-logo'>
						<img src={reactLogo} className='nav-image'></img>
						<p>&nbsp;ReactFacts</p>
					</div>

					<ul className='nav-items'>
						<li>Pricing</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
