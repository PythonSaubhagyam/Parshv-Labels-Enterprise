import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Facebook, Instagram, Linkedin, Menu, Play, X, Award, Users, CheckCircle } from "lucide-react";
import { products } from "./data/products";

const slides = [
  { image: "/Shirt-Labels-Set.png", label: "SHIRT LABELING", title: <>Details that make every <em>shirt</em> memorable.</>, copy: "Woven labels, satin labels, hang tags and polyester buttons made to give tailored shirts a refined, recognisable finish." },
  { image: "/Denim-Labels-Set.png", label: "DENIM ESSENTIALS", title: <>Built for denim. Designed for <em>identity.</em></>, copy: "Durable woven labels, satin labels, garment tags and buttons that hold their character through every wash and wear." },
  { image: "/Kurti-Labels-Set.png", label: "KURTI BRANDING", title: <>A signature finish for every <em>kurti.</em></>, copy: "From soft satin labels to premium hang tags and coordinated buttons, we create details that elevate contemporary ethnic wear." }
];
const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } };
const View = ({ children, className = "" }) => <motion.div className={className} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>{children}</motion.div>;

function Home() {
  const [slide, setSlide] = useState(0); const [paused, setPaused] = useState(false); const current = slides[slide];
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  useEffect(() => { if (paused) return undefined; const timer = setInterval(() => setSlide(value => (value + 1) % slides.length), 5000); return () => clearInterval(timer); }, [paused]);
  return <>
    <main>
      <section id="home" className="hero"><div className="hero-orb" />
        <div className="container hero-grid"><div className="hero-copy">
          <div className="hero-text-wrapper"><AnimatePresence mode="wait">
            <motion.div key={slide} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .45 }}>
              <div className="eyebrow"><span />{current.label}</div>
              <h1>{current.title}</h1>
              <p>{current.copy}</p>
            </motion.div>
          </AnimatePresence>
          </div>
          <div className="hero-actions">
            <button className="btn btn-dark" onClick={() => scrollTo("products")}>Explore Products <ArrowRight size={18} /></button>
            <button className="btn btn-outline" onClick={() => scrollTo("contact")}>Talk to Us</button>
          </div>
        </div>
          <div className="hero-visual" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <AnimatePresence mode="wait"><motion.img key={current.image} src={current.image} alt={`${current.label} garment label set`} initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .6 }} />
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-grid">
          <View>
            <img className="about-image" src="/small-labels-clubbed-image.png" alt="Garment labeling collection" />
          </View><View>
            <div className="eyebrow"><span />ABOUT PARSHV ENTERPRISE</div>
            <h2>Small details. <span>Big brand impact.</span></h2>
            <p>We partner with fashion brands and garment manufacturers to craft labels and accessories that look exceptional and perform reliably. Every order is guided by material expertise, manufacturing precision and respect for your brand.</p>
          <div className="stats">
            <div><Award size={28} className="stat-icon" /><strong>5+</strong><small>Years of expertise</small></div>
            <div><Users size={28} className="stat-icon" /><strong>500+</strong><small>Brands served</small></div>
            <div><CheckCircle size={28} className="stat-icon" /><strong>100%</strong><small>Quality focus</small></div>
          </div>
            <div className="about-cta-wrapper">
              <button className="btn btn-dark" onClick={() => scrollTo("products")}>Discover our collection <ArrowRight size={18} /></button>
            </div>
          </View>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <View className="section-intro">
            <div className="eyebrow"><span />MANAGEMENT TEAM</div>
            <h2>Guided by craft and <span>commitment.</span></h2>
            <p>Our team combines product knowledge, production discipline and a shared focus on serving garment brands well.</p>
          </View>
          <div className="team-grid">{["Leadership", "Production", "Client Success"].map(role => <View key={role} className="team-card"><div className="team-avatar">PE</div><small>{role.toUpperCase()}</small><h3>Team member</h3><p>Profile and photograph coming soon.</p></View>)}</div>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="container">
          <View className="section-intro light">
            <div className="eyebrow"><span />OUR COLLECTION</div>
            <h2>Labels made to <span>last.</span></h2>
          </View>
          <div className="product-grid">{products.map((product, index) => <View key={product.id} className="product-card">
            <Link to={`/products/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="product-art"><img src={product.image} alt={product.name} />
              </div>
              <div className="product-info"><small>0{index + 1}</small>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div></Link></View>)}
          </div>
        </div>
      </section>

      <section id="quality" className="quality-section">
        <div className="container">
          <View className="section-intro">
            <div className="eyebrow"><span />OUR PROCESS</div>
            <h2>Production with <span>purpose.</span></h2>
            <p>From precise production to final inspection, our process protects the finish, consistency and lasting quality your brand deserves.</p>
          </View>
          <div className="process-grid"><View className="process-card">
            <img src="/quality-image.png" alt="Garment label production process" />
            <div>
              <small>01 — PRODUCTION</small>
              <h3>Made with precision</h3>
              <p>Specialist manufacturing for clean detail and dependable finishes.</p>
            </div>
          </View>
            <View className="process-card">
              <img src="/fictional-labels.jpg" alt="Quality inspection of garment labels" />
              <div>
                <small>02 — QUALITY CHECK</small>
                <h3>Inspected with care</h3>
                <p>Every order is checked for clarity, alignment, colour and finish.</p>
              </div>
            </View>
          </div>
        </div>
      </section>

      <section id="videos" className="videos-section">
        <div className="container">
          <View className="section-intro light">
            <div className="eyebrow"><span />BEHIND THE LABEL</div>
            <h2>See our work <span>in motion.</span></h2>
            <p>Video stories of our craft, process and product details will be added here.</p>
          </View>
          <div className="video-grid">{["Label production", "Quality inspection", "Product showcase"].map((title, index) => <View className="video-card" key={title}><div className="video-placeholder"><span>0{index + 1}</span>
            <button aria-label={`Play ${title}`}><Play size={18} fill="currentColor" /></button></div>
            <h3>{title}</h3>
            <p>Video coming soon</p></View>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <View>
            <div className="eyebrow"><span />LET'S WORK TOGETHER</div>
            <h2>Have a label <span>in mind?</span></h2>
            <p>Tell us about your brand and we'll help you choose the right labeling solution.</p>
            <div className="contact-info-list" style={{ marginTop: '40px' }}>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Phone</strong>
                <a href="tel:+917940093225" style={{ fontSize: '18px', color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>+91 79 4009 3225/26</a></div>
              <div>
                <strong style={{ display: 'block', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email</strong>
                <a href="mailto:sales@parshvlabels.com" style={{ fontSize: '18px', color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>sales@parshvlabels.com</a></div>
            </div>
          </View>
          <View className="contact-card">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>YOUR NAME</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>YOUR EMAIL ID</label>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label>CONTACT NUMBER</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
              <button type="submit" className="btn btn-yellow">Request a call <ArrowRight size={18} /></button>
            </form>
          </View>
        </div>
      </section>
    </main>
  </>;
}
export default Home;
