import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Tag, Layers, Scissors, Settings, Search, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom }
  })
};

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      {/* 1. About Hero Section */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <motion.div 
            custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
            className="eyebrow"
          >
            <span />ABOUT PARSHV ENTERPRISE
          </motion.div>
          
          <motion.h1 
            custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Labels That Bring <span>Your Brand</span> to Life.
          </motion.h1>
          
          <motion.p 
            custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Parshv Enterprise provides quality garment labelling solutions designed around your brand identity and product requirements. We craft labels that make an impact.
          </motion.p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="about-who-we-are">
        <div className="container who-we-are-grid">
          <motion.div 
            custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
            className="who-we-are-content"
          >
            <div className="eyebrow"><span />WHO WE ARE</div>
            <h2>Crafting Labels with <span>Quality, Precision and Purpose.</span></h2>
            <p>At Parshv Enterprise, we deliver high-quality garment labelling solutions tailored specifically for your custom requirements. We understand that a label is more than just a tag; it's the signature of your apparel.</p>
            <p>Our commitment to reliable production and precise finishing has made us a trusted partner for fashion and apparel brands looking to elevate their identity with exceptional attention to detail.</p>
          </motion.div>
          
          <motion.div 
            custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp} 
            className="who-we-are-visual"
          >
            <img src="/images/premium_garment_labels.jpg" alt="Premium Garment Labels Manufacturing" />
          </motion.div>
        </div>
      </section>

      {/* 3. One Stop Solution Section */}
      <section className="about-one-stop">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
            className="section-heading"
          >
            <h2><span>One Stop Solution</span> for All Your Garment Labelling Needs</h2>
            <p>Everything your garment brand needs for labelling and branding in one place. We provide complete solutions under one roof.</p>
          </motion.div>
          
          <div className="one-stop-grid">
            {[
              { title: "Woven Labels", icon: <Tag /> },
              { title: "Printed Labels", icon: <Layers /> },
              { title: "Satin Labels", icon: <Scissors /> },
              { title: "Cotton Labels", icon: <Settings /> },
              { title: "Size Labels", icon: <Search /> },
              { title: "Care Labels", icon: <CheckCircle /> },
              { title: "Hang Tags", icon: <Tag /> },
              { title: "Custom Labels", icon: <Settings /> }
            ].map((solution, i) => (
              <motion.div 
                custom={0.1 + (i * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                key={i} className="solution-card"
              >
                <div className="icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Parshv Enterprise */}
      <section className="about-why-choose">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
            className="section-heading"
          >
            <div className="eyebrow"><span />STRENGTHS</div>
            <h2>Built Around Quality. <span>Driven by Detail.</span></h2>
          </motion.div>
          
          <div className="why-choose-grid">
            {[
              { title: "QUALITY", desc: "High-quality materials and precise finishing ensure your labels stand the test of time and wash." },
              { title: "CUSTOMIZATION", desc: "Solutions designed around your brand requirements, from material choice to cutting and folding." },
              { title: "CONSISTENCY", desc: "Reliable quality across every production order so your branding always looks sharp." },
              { title: "ATTENTION TO DETAIL", desc: "Every element is carefully checked for a refined, professional finish before delivery." }
            ].map((feature, idx) => (
              <motion.div 
                custom={0.1 + (idx * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                key={idx} className="why-card"
              >
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="about-process">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
            className="section-heading"
          >
            <div className="eyebrow"><span />OUR PROCESS</div>
            <h2>From Your Idea to the <span>Final Label</span></h2>
          </motion.div>
          
          <div className="process-grid">
            {[
              "Understand Your Requirement",
              "Design & Development",
              "Material Selection",
              "Production & Quality Check",
              "Ready for Your Garment"
            ].map((step, idx) => (
              <motion.div 
                custom={0.1 + (idx * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                key={idx} className="process-step"
              >
                <span className="process-number">0{idx + 1}</span>
                <h3>{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quality Focus */}
      <section className="about-quality">
        <div className="container quality-focus-grid">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleUp} 
            className="quality-focus-visual"
          >
            <img src="/images/quality-image.png" alt="Quality Inspection" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </motion.div>
          
          <div className="quality-focus-content">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="eyebrow">
              <span />QUALITY PROMISE
            </motion.div>
            
            <motion.h2 custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              Quality in Every <span>Thread, Print and Finish.</span>
            </motion.h2>
            
            <ul className="quality-focus-list">
              {[
                "Material Quality",
                "Color Accuracy",
                "Fine Finishing",
                "Detailed Inspection",
                "Production Consistency"
              ].map((item, idx) => (
                <motion.li 
                  custom={0.2 + (idx * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
                  key={idx}
                >
                  <CheckCircle size={20} /> {item}
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
              custom={0.7} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} 
              className="btn btn-dark" style={{ marginTop: '20px' }} onClick={() => navigate('/#quality')}
            >
              Explore Our Quality <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="about-cta">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Let's Create Labels That <span>Represent Your Brand.</span>
          </motion.h2>
          
          <motion.p custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Looking for reliable and custom garment labelling solutions? Let's discuss your requirements.
          </motion.p>
          
          <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="about-cta-actions">
            <button className="btn btn-dark" onClick={() => navigate('/contact')}>Request a Quote <ArrowRight size={18} /></button>
            <button className="btn btn-outline" onClick={() => navigate('/contact')}>Contact Us</button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
