import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#6E9320] text-white p-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
        <div className="w-full lg:w-1/3 mb-8">
          <h2 className="text-lg font-semibold">Nasumbi Limited</h2>
          <p className="text-sm">Your trusted source for quality crops, poultry, and livestock in Machakos, Kenya.</p>
        </div>
        <div className="w-full lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <p>Email: <a href="mailto:karenloti45@gmail.com">nasumbilimited@gmail.com</a></p>
          <p>Phone: +254 726538215</p>
          <p>Location: Machakos, Kenya</p>
        </div>
        <div className="w-full lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Nasumbi Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
