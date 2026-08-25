import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "./data/products";
import "./ProductDetail.css";

function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeImage, setActiveImage] = useState(product ? (product.images?.[0] || product.image) : null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isQuoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isQuoteModalOpen]);

  // Auto open modal after 5 seconds
  useEffect(() => {
    setIsQuoteModalOpen(false); // Reset if it was open from previous product

    const timer = setTimeout(() => {
      setIsQuoteModalOpen(true);
    }, 5000); // 5 seconds
    
    return () => clearTimeout(timer);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      // Pick 4 related products (excluding current)
      const others = products.filter(p => p.slug !== slug);
      setRelatedProducts(others.slice(0, 4));
      // Reset active image when product changes
      setActiveImage(product.images?.[0] || product.image);
    }
  }, [slug, product]);

  if (!product) {
    return (
      <main style={{ padding: "120px 20px", textAlign: "center", minHeight: "80vh" }}>
        <h1>Product Not Found</h1>
        <Link to="/" className="btn btn-dark" style={{ marginTop: "20px" }}>Return to Home</Link>
      </main>
    );
  }

  const galleryImages = product.images || [product.image];
  const displayImage = activeImage || galleryImages[0];

  return (
    <main className="product-detail-page">
      <div className="container">
        <Link to="/#products" className="back-link">
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        
        <div className="product-detail-hero">
          <div className="product-gallery">
            <div className="product-thumbnails">
              {galleryImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${activeImage === img && galleryImages.length > 1 ? 'active' : ''}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </div>
              ))}
            </div>
            
            <div className="product-detail-image">
              {displayImage && <img src={displayImage} alt={product.name} key={displayImage} className="fade-in-image" />}
            </div>
          </div>
          
          <div className="product-detail-content">
            <div className="eyebrow"><span />{product.category || "PRODUCT DETAIL"}</div>
            <h1>{product.name}</h1>
            <p className="product-desc" style={{ marginBottom: '30px' }}>{product.shortDescription || product.description}</p>
            
            <div className="info-block" style={{ marginTop: '20px' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Product Information</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{product.longDescription}</p>
            </div>
            
            <div className="specs-block" style={{ marginTop: '30px', paddingTop: '30px' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>Specifications</h2>
              {product.features && (
                <ul className="specs-list">
                  {Object.entries(product.features).map(([key, value]) => (
                    <li key={key} style={{ padding: '12px 0', fontSize: '0.95rem' }}>
                      <strong>{key}</strong>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="related-products-section">
            <div className="eyebrow"><span />MORE OPTIONS</div>
            <h2>Related Products</h2>
            <div className="product-grid">
              {relatedProducts.map((rp, index) => (
                <div key={rp.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link to={`/products/${rp.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="product-art">
                      <img src={rp.image} alt={rp.name} />
                    </div>
                    <div className="product-info">
                      <small>0{rp.id}</small>
                      <h3>{rp.name}</h3>
                      <p>{rp.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Quote Popup Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="quote-modal-overlay" onClick={() => setIsQuoteModalOpen(false)}>
            <motion.div 
              className="quote-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="quote-modal-close" onClick={() => setIsQuoteModalOpen(false)}>
                <X size={24} />
              </button>
              
              <div className="quote-modal-content">
                <h2>Request a Quote</h2>
                <p>Tell us what you need labelled and our team will get back to you within 24 hours.</p>
                
                <form className="quote-form" onSubmit={(e) => { e.preventDefault(); setIsQuoteModalOpen(false); }}>
                  <div className="form-group">
                    <label>YOUR NAME*</label>
                    <input type="text" required placeholder="Enter your full name" />
                  </div>
                  <div className="form-group">
                    <label>YOUR EMAIL ID*</label>
                    <input type="email" required placeholder="Enter your email address" />
                  </div>
                  <div className="form-group">
                    <label>CONTACT NUMBER*</label>
                    <input type="tel" required placeholder="Enter your contact number" />
                  </div>
                  <button type="submit" className="submit-quote-btn">Get a Quote</button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default ProductDetail;
