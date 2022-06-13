import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
	return (
		/* ↓↓ this empty tag is a react fragment */
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
