import Link from 'next/link';
import React from 'react';
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            About Us
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Careers
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Blogs
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Gift Cards
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Magazine
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Contact
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Legal Notice
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Terms & Conditions
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Sitemap
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services</h1>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Car Hire
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Activity Finder
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Tour List
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Flight Finder
          </p>
          <p className="text-gray-800 text-sm hover:text-blue-950 font-medium cursor-pointer">
            Travel Agents
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-gray-600 text-sm">Our Mobile Number</h1>
            <h1 className="text-blue-950 text-base font-bold mt-1">
              +012 765 8273
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-gray-600 text-sm">Our Email</h1>
            <h1 className="text-blue-950 text-base font-bold mt-1">
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      <div className="text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center mt-8 pt-8 w-[80%] mx-auto border-t">
        <p className="text-center md:text-left">
          © [2025] [Travista]. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
