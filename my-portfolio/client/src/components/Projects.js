import React from 'react';
import '../styles/Projects.css';
import '../styles/index.css';

// Import project images
import projectOneImg from '../assets/apple-vault.jpg';
import projectTwoImg from '../assets/weather-app.jpg';
import projectThreeImg from '../assets/car-inventory.jpg';
import projectFourImg from '../assets/to-do-list.jpg';
import projectFiveImg from '../assets/itunes.jpg';

const Projects = () => {
    return (
        <section className="projects container" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <p>Here are some of the projects I completed during my studies:</p>

                <div className="project-list">
                    {/* Apple Vault Project */}
                    <div className="project-item">
                        <img src={projectOneImg} alt="Apple Vault" className="project-image" />
                        <h3>E-Commerce App (Apple Vault)</h3>
                        <p>A React-based e-commerce platform for browsing and purchasing Apple products. Features include user authentication, a shopping cart, search, and category-based navigation with Redux for state management.</p>
                        <div className="project-buttons">
                            <a href="https://applevault-com.onrender.com" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                            <a href="https://github.com/davidlaubser/applevault.com.git" target="_blank" rel="noopener noreferrer">
                                <button>View Code</button>
                            </a>
                        </div>
                    </div>

                    {/* Weather App Project */}
                    <div className="project-item">
                        <img src={projectTwoImg} alt="Weather App Project" className="project-image" />
                        <h3>Weather App</h3>
                        <p>A React app that displays real-time weather data for any city using an API.</p>
                        <div className="project-buttons">
                            <a href="https://davidlaubser.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                            <a href="https://github.com/davidlaubser/weather-app" target="_blank" rel="noopener noreferrer">
                                <button>View Code</button>
                            </a>
                        </div>
                    </div>

                    {/* Car Inventory Project */}
                    <div className="project-item">
                        <img src={projectThreeImg} alt="Car Inventory Project" className="project-image" />
                        <h3>Car Inventory</h3>
                        <p>A full-stack web application for managing a car inventory, built with React, Express.js, and MongoDB.</p>
                        <div className="project-buttons">
                            <a href="https://car-inventory-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                            <a href="https://github.com/davidlaubser/car-inventory" target="_blank" rel="noopener noreferrer">
                                <button>View Code</button>
                            </a>
                        </div>
                    </div>

                    {/* To-Do List Project */}
                    <div className="project-item">
                        <img src={projectFourImg} alt="To-Do List Project" className="project-image" />
                        <h3>To-Do List</h3>
                        <p>A full-stack React and Express app for task management. Users can register, log in, and manage tasks securely with JWT authentication and MongoDB.</p>
                        <div className="project-buttons">
                            <a href="https://to-do-list-ashen-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                            <a href="https://github.com/davidlaubser/to-do-list" target="_blank" rel="noopener noreferrer">
                                <button>View Code</button>
                            </a>
                        </div>
                    </div>

                    {/* iTunes App */}
                    <div className="project-item">
                        <img src={projectFiveImg} alt="iTunes App" className="project-image" />
                        <h3>iTunes App</h3>
                        <p>A React and Express.js web app that lets users search iTunes for music, movies, and more. It features JWT authentication, favorites management, and a clean, user-friendly interface.</p>
                        <div className="project-buttons">
                            <a href="https://itunes-app-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                            <a href="https://github.com/davidlaubser/itunes-app" target="_blank" rel="noopener noreferrer">
                                <button>View Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
