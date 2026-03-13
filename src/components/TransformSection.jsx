import React from 'react';
import './TransformSection.css';
import transformImg from '/frame1.png';

const TransformSection = () => {
  return (
    <section className="transform-section">
      <div className="transform-container">
        {/* Chap tomon - Matn qismi */}
        <div className="transform-left">
          <div className="transform-badge">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6C2.5 6 5 2 7.5 2C10 2 12.5 6 15 6C17.5 6 20 10 22.5 10C25 10 27.5 6 30 6C32.5 6 35 2 37.5 2C40 2 42.5 6 45 6" stroke="#20AD96" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          
          <h2 className="transform-title">
            Don't miss out on my 'Live life at the full potential' free guide
          </h2>
          
          <p className="transform-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          
          <p className="transform-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
          </p>
          
          <button className="transform-btn">
            Get your free guide now
          </button>
        </div>

        {/* O'ng tomon - Rasm qismi */}
        <div className="transform-right">
          <div className="transform-image-wrapper">
            {/* Free Guide yorlig'i */}
            <div className="free-guide-badge">
              Free guide!
            </div>
            
            {/* Asosiy rasm */}
            <div className="transform-image">
              <img src={transformImg} alt="Woman reading book" />
            </div>
            
            {/* Chat pufakchasi */}
            <div className="chat-bubble">
              <div className="chat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="chat-text">
                Ready to start? Let's talk!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
