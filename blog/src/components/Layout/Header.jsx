import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="bg-white  py-4 fixed top-0 left-0 right-0 z-50 mb-56">
      <div className="ml-4 mx-auto flex justify-between items-center px-6">
        {/* Blog Logo */}
        <div className="bg-cyan-400 text-xl font-semibold text-white ">
          <Link to="/" className="hover:text-gray-600 ">
            Inspire
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-black font-semibold hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-black font-semibold hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-black font-semibold hover:text-gray-300">Contact</Link>
          <SignedIn>
        
          <Link to="/login" className="text-black font-semibold hover:text-gray-300">SignIn</Link>
      </SignedIn>
      <SignedOut>
        
          <Link to="/signup" className="text-black font-semibold hover:text-gray-300">SignUp</Link>
      </SignedOut>
        </nav>
      </div>
    </header>
  );
};

export default Header;
