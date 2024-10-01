import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const navLinkStyle = cva(
  "inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
);

interface NavbarProps {
  toggleDarkMode: () => void;
}

export default function Navbar({ toggleDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const menuItems = [
    { to: "/#hero", label: "Home" },
    { to: "/#experience", label: "Experience" },
    { to: "/#projects", label: "Projects" },
    { to: "/#skills", label: "Skills" },
    { to: "/#resume", label: "Resume" },
  ];

  const handleNavClick = (to: string) => {
    if (location.pathname === '/') {
      const element = document.querySelector(to.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className={twMerge(navLinkStyle())}
                  onClick={() => handleNavClick(item.to)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="p-2 rounded-md hover:bg-muted"
          onClick={handleToggleDarkMode}
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        {isMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-background border-b md:hidden">
            <nav className="container py-2">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="block py-2 px-4 hover:bg-muted"
                      onClick={() => handleNavClick(item.to)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}