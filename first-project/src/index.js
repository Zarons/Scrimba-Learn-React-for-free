/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from 'react';
import ReactDOM from 'react-dom';
// const page = (
//   <>
//     <div>
//       <img src="react-logo.png"></img>
//       <h1>Fun facts about React </h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on Github</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousand of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   </>
// );

function Header() {
	return (
		<>
			<header>
				<nav className='nav'>
					<div className='nav-logo'>
						<img src='react-logo.png' className='nav-image'></img>
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

function MainContent() {
	return (
		<>
			<h1>Fun facts about React </h1>
			<ul>
				<li>Was first released in 2013</li>
				<li>Was originally created by Jordan Walke</li>
				<li>Has well over 100k stars on Github</li>
				<li>Is maintained by Facebook</li>
				<li>Powers thousand of enterprise apps, including mobile apps</li>
			</ul>
		</>
	);
}

function Footer() {
	return (
		<>
			<footer>
				<small>© 2022 Geryenko Hawsen. All rights reserved.</small>
			</footer>
		</>
	);
}

function Page() {
	return (
		/* ↓↓ this is a react com */
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
}

ReactDOM.render(<Page />, document.getElementById('root'));
