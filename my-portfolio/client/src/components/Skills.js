import React from 'react';
import '../styles/Skills.css';
import '../styles/index.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const Skills = () => {
    return (
        <section className="skills container" id="skills">
            <div className="skills-container">
                <h2>My Toolbox of Skills</h2>
                <p>
                    Here are some of the technologies I&apos;ve been working with throughout my studies:
                </p>

                <div className="skills-icons">
                    <div className="skill">
                        <FaHtml5 className="icon html" />
                        <p>HTML5</p>
                    </div>
                    <div className="skill">
                        <FaCss3Alt className="icon css" />
                        <p>CSS3</p>
                    </div>
                    <div className="skill">
                        <FaJs className="icon js" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill">
                        <FaReact className="icon react" />
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <FaNodeJs className="icon node" />
                        <p>Node.js</p>
                    </div>
                    <div className="skill">
                        <SiExpress className="icon express" />
                        <p>Express.js</p>
                    </div>
                    <div className="skill">
                        <FaDatabase className="icon database" />
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
