import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-6 relative bottom-0 left-0 w-full ">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} My Blog. All Rights Reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://facebook.com"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
