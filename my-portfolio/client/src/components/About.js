import React from 'react';
import '../styles/About.css';
import '../styles/index.css';

const About = () => {
    return (
        <section className="about container" id="about">
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                    With an academic foundation in Business and Logistics Management, I started my career in logistics,
                    gaining valuable experience and skills. Soon, I realised something was missing — I wanted a career that was not only
                    dynamic and rewarding, but also challenged me in new and exciting ways. This realisation led me to take a leap of faith
                    into software development — and I haven’t looked back since (though I do wish I had made the jump sooner!).
                </p>
                <p>
                    I recently completed a comprehensive course in <span className="about-highlight">Full Stack Web Development Bootcamp</span> through <a href="https://www.hyperiondev.com/" target="_blank" rel="noopener noreferrer">HyperionDev</a>, where I gained valuable experience with technologies like React, Node.js, and MongoDB.
                </p>
                <p>
                    What I love most about coding is how it combines creativity with problem-solving, while encouraging me to stay curious
                    and continuously learn new things. Though I’m still in the early stages of this journey, I’m confident that I’ve found my true calling, and I’m excited to embrace the challenges and opportunities ahead.
                </p>
            </div>
        </section>
    );
};

export default About;
