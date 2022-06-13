import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
	return (
		/* ↓↓ this is a react fragment */
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
