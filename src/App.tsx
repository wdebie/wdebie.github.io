import './App.css'
import { useEffect, useState } from 'react';
import Header from './components/header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Resume } from './components/Resume'
import Footer from './components/Footer';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setIsDarkMode(savedTheme === 'dark');
			document.body.classList.toggle('dark', savedTheme === 'dark');
		}
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode(prevMode => {
			const newMode = !prevMode;
			localStorage.setItem('theme', newMode ? 'dark' : 'light');
			document.body.classList.toggle('dark', newMode);
			return newMode;
		});
	};

	return (
		<div className={`App ${isDarkMode ? 'dark' : ''}`}>
			<Header toggleDarkMode={toggleDarkMode} />
			<main className="flex-grow">
				<Hero />
				<Experience />
				<Projects />
				<Skills />
				<Resume />
				<Footer />
			</main>
		</div>
	)
}

export default App
