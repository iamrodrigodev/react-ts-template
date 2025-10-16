import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar} aria-label="Barra de navegación principal">
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-logo']}>
          <img
            src="/ulasalle.webp"
            alt="Logo Universidad La Salle de Arequipa"
            className={styles['logo-image']}
            width={48}
            height={48}
            loading="lazy"
            draggable={false}
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
