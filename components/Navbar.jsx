"use client";

import { useState, useEffect } from "react";

const slug = (text) =>
  "#" + text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const menus = [
  {
    id: "specialties",
    label: "SPECIALTIES",
    href: "#specialties",
    items: [
      "Anxiety & Panic",
      "Trauma & Past Experiences",
      "Burnout & Perfectionism",
      "Chronic Stress",
    ],
  },
  {
    id: "methods",
    label: "METHODS",
    href: "#methods",
    items: [
      "Cognitive Behavioral Therapy (CBT)",
      "EMDR",
      "Mindfulness-Based Practices",
      "Body-Oriented Techniques",
    ],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1000) {
        setMenuOpen(false);
        setOpenSub(null);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleParentClick = (event, id) => {
    if (window.innerWidth <= 1000) {
      event.preventDefault();
      setOpenSub((current) => (current === id ? null : id));
    } else {
      closeMenu();
    }
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="left">
        <a href="#home" onClick={closeMenu} aria-label="Go to homepage">
          <img
            src="/images/logo2.png"
            alt="Dr. Maya Reynolds, PsyD — Clinical Psychologist"
          />
        </a>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`right ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          ABOUT
        </a>

        {menus.map((menu) => (
          <div
            key={menu.id}
            className={`nav-item ${openSub === menu.id ? "expanded" : ""}`}
          >
            <a
              href={menu.href}
              className="nav-link has-sub"
              aria-haspopup="true"
              aria-expanded={openSub === menu.id}
              onClick={(event) => handleParentClick(event, menu.id)}
            >
              {menu.label}
            </a>

            <div className="dropdown">
              {menu.items.map((item) => (
                <a key={item} href={slug(item)} onClick={closeMenu}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        ))}

        <a href="#office" onClick={closeMenu}>
          OFFICE
        </a>

        <a className="contact" href="#contact" onClick={closeMenu}>
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;