import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Demo Videos', path: '/demo-videos' },
    { name: 'AI Assistant', path: '/ai-assistant' },
    { name: 'Speak to an Expert', path: '/contact', highlight: true },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-dark-800/80 backdrop-blur-lg border-b border-glass-light fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-neon-blue" />
              <span className="ml-2 text-xl font-bold text-white">Sension AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-neon-blue border-b-2 border-neon-blue neon-glow'
                    : item.highlight
                    ? 'bg-glass-light text-neon-blue px-4 py-2 rounded-lg hover:bg-glass-dark transition-colors duration-200 border border-neon-blue neon-border'
                    : 'text-gray-300 hover:text-neon-blue'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-blue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-neon-blue bg-glass-light'
                    : item.highlight
                    ? 'bg-glass-light text-neon-blue border border-neon-blue'
                    : 'text-gray-300 hover:text-neon-blue hover:bg-glass-light'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;