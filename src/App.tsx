import './App.css'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import ProjectList from './components/Projects/ProjectList'
import ProjectPage from './components/Projects/ProjectPage'
import Skills from './components/Skills'
import Resume from './components/Resume'
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
		<Router>
			<div className={`App ${isDarkMode ? 'dark' : ''}`}>
				<Navbar toggleDarkMode={toggleDarkMode} />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={
							<>
								<Hero />
								<Experience />
								<ProjectList />
								<Skills />
								<Resume />
							</>
						} />
						<Route path="/projects/:projectName" element={<ProjectPage />} />
					</Routes>
				<Footer />
				</main>
			</div>
		</Router>
	)
}

export default App
