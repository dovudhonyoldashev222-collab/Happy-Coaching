import React, { useState, useEffect } from 'react';
import './App.css';
import heroImg from '/hero.png';
import blogImg1 from '/image1.png';
import blogImg2 from '/image2.png';
import blogImg3 from '/image3.png';
import sessionImg from '/image1.png';
import transformImg from '/frame1.png';
import TransformSection from './components/TransformSection';


function App() {
  const sessionImages = ['/image3.png'];
  const [currentSessionImage, setCurrentSessionImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSessionImage((prevIndex) => (prevIndex + 1) % sessionImages.length);
    }, 6000); // 6 soniyada

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Jane',
      text: 'I gained so much confidence in my ability to connect and deepen my relationships with people.',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      name: 'Catherine',
      text: 'I gained so much confidence in my ability to connect and deepen my relationships with people.',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Jane',
      text: 'I gained so much confidence in my ability to connect and deepen my relationships with people.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
    }
  ];

  const blogPosts = [
    {
      title: 'Balancing your love and work life.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: blogImg1
    },
    {
      title: 'A short break from Social Media is important.',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: blogImg2
    },
    {
      title: 'How to be 1% Better Every Day',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: blogImg3
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
           
            Happy <span>Coaching</span>
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About us</a>
            <a href="#sales">Extra Salespage</a>
          </nav>
          <a href="#guide" className="header-btn">Get your free guide now</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container hero-section">
        <div className="hero-content">
          <WavyLine />
          <p className="hero-badge">Proven strategies backed by science for success.</p>
          <h1>Live life at the full potential</h1>
          <p>I help people to discover their true potential and live a fulfilling life. Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Want to transform your life?</p>
          <button className="btn-primary">Get your free guide now</button>
        </div>
        <div className="hero-image">
          <div className="trust-badge">
            <div className="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div>
              <div className="badge-number">100%</div>
              <div className="badge-text">Success rate</div>
            </div>
          </div>
          <img src={heroImg} alt="Coaching Hero" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container services-section">
        <div className="services-header-top">
          <WavyLine />
          <div className="services-header-content">
            <div className="services-header-left">
              <h2>I can help you in these particular areas.</h2>
            </div>
            <div className="services-header-right">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
          </div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <h3>1:1 Coaching</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3>Consultation</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>Group Coaching Sessions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Hear out what my clients say about me.</h2>
          <div className="testimonials-grid">
            {testimonials.map((client, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-text">"{client.text}"</p>
                <div className="testimonial-author">
                  <div className="author-img" style={{ backgroundImage: `url(${client.img})` }}></div>
                  <div className="author-info">
                    <div className="author-name">{client.name}</div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container blog-section">
        <h2 className="section-title">Stay Motivated, read the weekly blog articles.</h2>
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <div key={i} className="blog-card">
              <div className="blog-img" style={{ backgroundImage: `url(${post.img})` }}></div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-primary" style={{ display: 'block', margin: '60px auto' }}>Read more blogs</button>
      </section>

      {/* Transform Section - Yangi qo'shilgan seksiya */}
      <TransformSection />

      {/* Online Session Section */}
     <section className="container session-section">
  <div className="session-card">
    <div className="session-content">
      <h2>Get 15-Minutes Complimentary online session.</h2>
      <p>Limited Period Offer. Claim Now.</p>
      <button className="btn-primary">Book now</button>
    </div>
    <div className="session-img">
      {/* Bu yerda  {sessionImages[currentSessionImage]} rasm  */}
      <img src="/image (5).png" alt="Online Session" />
    </div>
  </div>
</section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2>Get notified when I publish new articles</h2>
            <p>Stay up to date with the latest news, announcements, and articles.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">Happy <span>Coaching</span></div>
              <p style={{ color: 'var(--text-light)', maxWidth: '250px' }}>Helping you discover your true potential and live a fulfilling life.</p>
            </div>
            <div className="footer-column">
              <h4>Pages</h4>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Extra Salespage</a></li>
                <li><a href="#">Free guide</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul className="footer-links">
                <li>+1 234 567 890</li>
                <li>hello@happycoaching.com</li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Made with ❤️ by HappyCoaching</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
