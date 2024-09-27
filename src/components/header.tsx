import { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu-utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#resume", label: "Resume" },
  ];

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
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href={item.href}>
                  {item.label}
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
                    <a href={item.href} className="block py-2 px-4 hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </a>
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
