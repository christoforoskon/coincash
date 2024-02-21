import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Logo.png";
import burger from "../../assets/menu.png";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="coincash" />
        </div>

        <button className={styles.toggleButton} onClick={toggleMobileMenu}>
          <img src={burger} alt="burger button" />
        </button>

        <ul
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <li>
            <button className={styles.closeButton} onClick={closeMobileMenu}>
              &times;
            </button>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <button>Get the app</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
