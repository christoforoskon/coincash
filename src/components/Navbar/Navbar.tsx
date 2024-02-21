import React, { useState } from "react";
import { motion } from "framer-motion";
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
        {/* Added an onHover scale animation on logo using Framer Motion */}
        <motion.div className={styles.logo} whileHover={{ scale: 1.1 }}>
          <img src={logo} alt="coincash" />
        </motion.div>
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
            <a href="#features" className="label1">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="label1">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="label1">
              Contact
            </a>
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
