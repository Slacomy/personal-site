import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const [submenu, setSubmenu] = useState('');
  const handleSubMenu = (label) => {
    // If submenu active, hide submenu
    // Else, show submenu for selected item
    if (label === submenu) {
      setSubmenu('');
    } else {
      setSubmenu(label);
    }
  };

  return (
    <header id="header">
      <h1 className="index-link">
        {routes.filter((l) => l.index).map((l) => (
          <Link key={l.label} to={l.path}>{l.label}</Link>
        ))}
      </h1>
      <nav className="links">
        <ul>
          {routes.filter((l) => !l.index).map((l) => (
            l.children ? (
              <li key={l.label}>
                <Link to={l.path} onClick={() => handleSubMenu(l.label)}>{l.label}</Link>
                <>
                  <span className="sub-menu-arrow">v</span>
                  <ul className={`sub-menu ${(submenu === l.label) ? 'sub-menu-active' : ''}`}>
                    {l.children.map((child) => (
                      <li><a href={child.path} title={child.label}>{child.label}</a></li>
                    ))}
                  </ul>
                </>
              </li>
            ) : (
              <li key={l.label}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            )
          ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;
