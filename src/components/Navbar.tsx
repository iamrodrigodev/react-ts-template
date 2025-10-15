import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" aria-label="Barra de navegación principal">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img 
            src="/ulasalle.webp" 
            alt="Logo Universidad La Salle de Arequipa" 
            className="logo-image"
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
