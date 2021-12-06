import React from "react";

import styles from "../styles/Navbar.module.css";

import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className={styles.containerNav}>
      <div>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="Course"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CURSO
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Comunity"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              COMUNIDADE
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SOBRE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
