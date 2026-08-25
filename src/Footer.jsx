import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNav = (id) => {
    if (id === "contact") {
      navigate("/contact");
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
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <img src="/PARSHV%20ENTERPRISE%20LOGO_page-0002.jpg" alt="Parshv Enterprise" className="footer-logo" />
          <p>Premium garment labels and accessories crafted with precision, quality and attention to detail.</p>
        </div>
        <div>
          <div className="eyebrow"><span />EXPLORE</div>
          <div className="footer-nav">
            {["Home", "About", "Products", "Quality", "Videos", "Contact"].map(item => (
              <button onClick={() => handleNav(item === "Products" ? "products" : item.toLowerCase())} key={item}>{item}</button>
            ))}
          </div>
        </div>
        <div>
          <h4>PARSHV LABELS PRIVATE LIMITED</h4>
          <p>108 Pinnacle Business Park, Corporate Road, Prahladnagar, Ahmedabad 380015, Gujarat, India.</p>
          <div className="socials">
            <a href="https://www.instagram.com/parshv_enterprise_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/company/parshv-enterprise/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
      <div className="container copyright">© 2026 Parshv Labels Private Limited. All rights reserved.</div>
    </footer>
  );
}