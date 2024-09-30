import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu-utils";

interface HeaderProps {
  toggleDarkMode: () => void;
}

export default function Header({ toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
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
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={() => handleNavClick(item.to)}
                  asChild
                >
                  <Link to={item.to}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
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
};
