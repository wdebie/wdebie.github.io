import './App.css'
import { Header } from './components/header'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Resume } from './components/Resume'
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
      </main>
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <a href="mailto:debiewillem@outlook.com" className="flex items-center hover:text-primary mb-2">
                  <Mail size={18} className="mr-2" />
                  debiewillem@outlook.com
                </a>
                <a href="tel:+32496921462" className="flex items-center hover:text-primary">
                  <Phone size={18} className="mr-2" />
                  +32 496 92 14 62
                </a>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">Social</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/wdebie" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/willem-de-bie-0703a8301/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <p className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  Balen, Belgium
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center w-full max-w-3xl">
              <p className="text-sm text-muted-foreground">
                © 2024 Willem De Bie. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
