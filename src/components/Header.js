"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../static/styles/ComponentCss/HeaderStyle.scss";

const navItems = [
  { label: "Product", url: "/" },
  { label: "Methodology", url: "/" },
  { label: "Pricing", url: "/" },
  { label: "About Us", url: "/about-us" },
  { label: "Resources", url: "/" },
  { label: "Contact Us", url: "/" },
];

const Header = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  useEffect(() => {
    console.log("navDrawerOpen", navDrawerOpen);
  }, [navDrawerOpen]);

  return (
    <header className="header">
      <div className="wrap-page header__container">
        {/* Logo */}
        <a href="/" className="header__logo">
          <Image
            src="/images/logo.png"
            alt="Clybourne Logo"
            width={120}
            height={40}
            className="header__logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="header__nav-link">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="header__login-btn">
                Login / Sign Up
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`header__hamburger ${navDrawerOpen ? "open" : ""}`}
          onClick={() => setNavDrawerOpen(!navDrawerOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`header__drawer ${navDrawerOpen ? "show" : ""}`}>
        <button
          className="header__drawer-close"
          onClick={() => setNavDrawerOpen(false)}
          aria-label="Close navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="header__drawer-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="header__drawer-link">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="header__drawer-login">
              Login / Sign Up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
