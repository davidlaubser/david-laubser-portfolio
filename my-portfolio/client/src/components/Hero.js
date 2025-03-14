import React from 'react';
import '../styles/Hero.css';
import profileImg from '../assets/profile.jpg';
import cvPdf from '../assets/DavidLaubserCV.pdf';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const viewCV = () => {
        window.open('https://davidlaubser.github.io/david-laubser-cv/', '_blank');
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = cvPdf;
        link.download = 'DavidLaubserCV.pdf';
        link.click();
    };

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>
                        Hi, I'm David <span role="img" aria-label="smiley">😄</span>
                    </h1>
                    <h2>Aspiring Full-Stack Developer | Passionate about coding and driven by curiosity</h2>
                    <p>
                        "I aspire to master full-stack web development and make significant and impactful contributions."
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-download" onClick={downloadCV}>⬇️ Download CV</button>
                        <button className="btn-view" onClick={viewCV}>👀 View CV</button>
                        <button className="btn-connect" onClick={scrollToContact}>🤝🏻 Let's Connect</button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={profileImg} alt="David" />
                </div>
            </div>
        </section>
    );
};

export default Hero;