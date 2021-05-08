import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [ submenu, setSubmenu ] = useState("")

  const handleSubMenu = (label) => {
    // If submenu active, hide submenu
    // Else, show submenu for selected item
    label === submenu
      ? setSubmenu("")
      : setSubmenu(label)
  }

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <ul className={`hamburger-ul ${open ? 'mobile-menu-open' : ''}`}>
        {routes.map((l) => (
          l.children ? (
            <li key={l.label} onClick={() => handleSubMenu(l.label)}>
              <Link to={l.path}>
                <h3 className={l.index && 'index-li'}>{l.label}</h3>
                <span className="sub-menu-arrow">v</span>
                <ul className={`sub-menu ${submenu === l.label ? 'sub-menu-active' : ''}`}>
                  {l.children.map(child => (
                    <li><a href={child.path} title={child.label}>{child.label}</a></li>
                  ))}
                </ul>
              </Link>
            </li>
          ) : (
            <li key={l.label}>
              <Link to={l.path} onClick={() => setOpen(!open)}>
                <h3 className={l.index && 'index-li'}>{l.label}</h3>
              </Link>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default Hamburger;
