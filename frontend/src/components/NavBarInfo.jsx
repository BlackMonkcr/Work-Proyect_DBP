import React from 'react';

function NavBarInfo({ title }) {
  return (
    <nav className="nav-bar_info">
      <span className="nav-bar_info-text">{title}</span>
    </nav>
  );
}

export default NavBarInfo;
