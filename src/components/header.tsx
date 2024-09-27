import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState, useEffect } from 'react'
import { Menu, Sun, Moon } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#hero">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#projects">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#skills">
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#experience">
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#resume">
                Resume
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <button
          className="p-2 rounded-md hover:bg-muted"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        {isMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-background border-b md:hidden">
            <nav className="container py-2">
              <ul className="space-y-2">
                <li><a href="#hero" className="block py-2 px-4 hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                <li><a href="#projects" className="block py-2 px-4 hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                <li><a href="#skills" className="block py-2 px-4 hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                <li><a href="#experience" className="block py-2 px-4 hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                <li><a href="#resume" className="block py-2 px-4 hover:bg-muted" onClick={() => setIsMenuOpen(false)}>Resume</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
