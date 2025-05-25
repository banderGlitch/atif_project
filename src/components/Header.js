"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const navItems = [
  { label: "Product", url: "/" },
  { label: "Methodology", url: "/" },
  { label: "Pricing", url: "/" },
  { label: "About Us", url: "/about-us" },
  { label: "Resources", url: "/" },
  { label: "Contact Us", url: "/" },
];

const Header = () => {
  const [navDrawer, setNavDrawer] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white max-sm:shadow-md">
      <div className="mx-auto w-full max-w-7xl px-4 space-y-5">
        <nav className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="relative h-8 md:h-10 w-auto">
            <a href="/">
              <Image
                src="/images/logo.png"
                alt="Clybourne"
                width={120}
                height={40}
                className="object-contain h-full w-auto"
              />
            </a>
          </div>

          {/* Hamburger Button (visible on screens ≤ 1023px) */}
          {mounted && (
            <button
              className="flex flex-col justify-center items-center lg:hidden group focus:outline-none"
              aria-label="Toggle navigation menu"
              onClick={() => setNavDrawer(!navDrawer)}
            >
              <span
                className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ease-in-out ${navDrawer ? "rotate-45 translate-y-2" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ease-in-out my-1 ${navDrawer ? "opacity-0" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black rounded transition-all duration-300 ease-in-out ${navDrawer ? "-rotate-45 -translate-y-2" : ""
                  }`}
              ></span>
            </button>
          )}

          {/* Desktop Navigation (visible on screens ≥ 1024px) */}
          <ul className="hidden lg:flex flex-wrap items-center space-x-2 lg:space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="text-gray-700 hover:text-gray-400 px-3 py-1 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="border border-zinc-700 px-4 py-2">
                Login/Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer (only for screens < 1024px) */}
      {mounted && (
        <div
          className={`fixed top-0 right-0 w-[100%] max-w-xs p-8 bg-white rounded-l-lg shadow-2xl z-[100] transition-transform duration-300 ease-in-out lg:hidden ${navDrawer ? "translate-x-0" : "translate-x-full"
            }`}
          style={{ maxWidth: "100%" }}
        >
          <div className="flex justify-between items-center mb-4">
            <Image
              src="/images/logo.png"
              alt="Clybourne"
              width={120}
              height={40}
              className="object-contain h-full w-auto"
            />
            <button
              className="relative w-10 h-10 flex items-center justify-center group"
              onClick={() => setNavDrawer(false)}
              aria-label="Close navigation menu"
            >
              <span className="absolute block w-6 h-0.5 bg-black transform rotate-45 transition duration-300 ease-in-out"></span>
              <span className="absolute block w-6 h-0.5 bg-black transform -rotate-45 transition duration-300 ease-in-out"></span>
            </button>
          </div>

          <ul className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="text-gray-700 hover:text-gray-400 text-sm transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="border border-zinc-700 text-black px-4 py-2 text-sm rounded transition-colors duration-200"
              >
                Login/Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
