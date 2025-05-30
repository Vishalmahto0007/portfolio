import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header */}
      <header id="desktop">
        <div id="logo">
          <span className="text-primary">&lt;&#47;</span>
          <span className="link-logo">Vishal Mahto</span>
          <span className="text-primary">&gt;</span>
        </div>
        <nav id="menu">
          <ul>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Header */}
      <header id="mobile">
        <div className="logo">
          <span className="text-primary">&lt;&#47;</span>
          <span>
            Vishal Mahto<span className="text-primary">&gt;</span>
          </span>
        </div>
        <div id="menuToggle" onClick={handleToggleMenu}>
          <div className={`hamburger ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul id="menu-content" className={menuOpen ? "open" : ""}>
          <li>
            <a href="#about" onClick={handleCloseMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleCloseMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" onClick={handleCloseMenu}>
              Project
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleCloseMenu}>
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
