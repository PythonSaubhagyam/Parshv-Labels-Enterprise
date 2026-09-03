import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { products } from "../../data/products";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    if (id === "contact") {
      navigate("/contact");
      window.scrollTo(0, 0);
      return;
    }
    if (id === "about") {
      navigate("/about");
      window.scrollTo(0, 0);
      return;
    }
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={() => handleNav("home")} aria-label="Go to home">
          <img src="/images/parshv-enterprise-logo.jpg" alt="Parshv Enterprise" className="brand-logo" />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Products", "Quality", "Videos"].map(item => {
            if (item === "Products") {
              return (
                <div
                  key={item}
                  className="nav-dropdown-container"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={location.pathname === "/" && item === "Home" ? "active" : ""}
                    onClick={() => handleNav("products")}
                  >
                    {item}
                  </button>
                  {dropdownOpen && (
                    <div className="nav-dropdown">
                      <div className="nav-dropdown-scroll">
                        {products.map((product, index) => (
                          <Link
                            key={product.id}
                            to={`/products/${product.slug}`}
                            className="dropdown-item"
                            onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                          >
                            <strong>0{index + 1}. {product.name.toUpperCase()}</strong>
                            <span>{product.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button
                key={item}
                className={
                  (location.pathname === "/" && item === "Home") || 
                  (location.pathname === "/about" && item === "About") 
                  ? "active" : ""
                }
                onClick={() => handleNav(item.toLowerCase())}
              >
                {item}
              </button>
            );
          })}
          <button onClick={() => handleNav("contact")}>Contact</button>
          <button className="nav-cta" onClick={() => handleNav("contact")}>
            Get Quote <ArrowRight size={16} />
          </button>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
