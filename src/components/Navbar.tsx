import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AEFounders</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            
            <Link to="/members" className="text-gray-600 hover:text-blue-600 transition-colors">Members</Link>
            <a href="#apply" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link to="/#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Features</Link>
            <Link to="/#community" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Community</Link>
            <Link to="/members" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Members</Link>
            <Link to="/#apply" className="block w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center">
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}