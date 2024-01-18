import React from 'react';

export default function HeroSection() {
  const openLinkedInProfile = () => {
    // Replace 'YOUR_LINKEDIN_PROFILE_URL' with the actual URL of your LinkedIn profile
    const linkedinProfileUrl = 'https://www.linkedin.com/in/mafalda-pires-b264ba1aa/';

    // Open the LinkedIn profile URL in a new tab or window
    window.open(linkedinProfileUrl, '_blank');
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section-content">
          <p className="section--title">Hey, I'm Mafalda</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span> <br /> Developer
          </h1>
          <p className="hero--section-description">
            Looking forward to learn more each day <br /> and to bring <strong>fresh ideas</strong> to a dynamic team.
          </p>
        </div>
        <button className="btn btn-primary" onClick={openLinkedInProfile}>
          Get in Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" width={300} />
      </div>
    </section>
  );}
