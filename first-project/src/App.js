import React from 'react';
import './style.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
	return (
		/* ↓↓ this empty tag is a react fragment */
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	);
}
