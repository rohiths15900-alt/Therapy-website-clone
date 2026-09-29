"use client";

import { useState, useEffect } from "react";

const slug = (text) =>
  "#" + text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const menus = [
  {
    id: "team",
    label: "OUR TEAM",
    href: "#team",
    items: [
      "Jennifer Anderson, LMFT",
      "Candace Bletscher, AMFT",
      "Heather Williams-Baumgart, AMFT",
      "Samantha Johnson, AMFT",
      "Autumn Bodily, AMFT",
      "Rosa Gomez, AMFT",
      "Chad Flores, AMFT",
    ],
  },
  {
    id: "specialties",
    label: "SPECIALTIES",
    href: "#specialties",
    items: [
      "Dissociation",
      "Trauma",
      "Special Needs Parenting",
      "Couples",
      "Children & Teens",
      "Anxiety & Depression",
      "Adoption",
    ],
  },
  {
    id: "methods",
    label: "METHODS",
    href: "#methods",
    items: ["EMDR", "Brainspotting", "Somatic Therapy", "Parts Work Therapy"],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null); // which section is expanded on mobile

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  // lock page scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close the menu if the window grows back to desktop size
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

  // on mobile, tapping a parent link expands its list instead of navigating
  const handleParentClick = (e, id) => {
    if (window.innerWidth <= 1000) {
      e.preventDefault();
      setOpenSub((current) => (current === id ? null : id));
    } else {
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="left">
        <img src="/images/logo.png" alt="Logo" />
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
        <a href="#about" onClick={closeMenu}>ABOUT</a>

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
              onClick={(e) => handleParentClick(e, menu.id)}
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

        <a href="#faqs" onClick={closeMenu}>FAQS</a>
        <button className="contact" onClick={closeMenu}>CONTACT</button>
      </div>
    </nav>
  );
};

export default Navbar;