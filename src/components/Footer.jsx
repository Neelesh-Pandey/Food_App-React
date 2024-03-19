import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-6 mt-36">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Food Delivery App</h2>
          <p className="text-sm">Best taste at your door step</p>
        </div>
        <div className="flex justify-center md:justify-end mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;