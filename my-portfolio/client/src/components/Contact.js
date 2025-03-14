import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('http://localhost:5007/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message. Try again.');
        }
    };

    return (
        <section className="contact container" id="contact">
            <div className="contact-container">
                <h2>Contact</h2>

                <div className="contact-content">
                    {/* Contact Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">Send</button>
                        {status && <p className="status-message">{status}</p>}
                    </form>

                    {/* Contact Details */}
                    <div className="contact-details">
                        <h3>Contact Details</h3>
                        <p>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:davidlaubser@gmail.com">davidlaubser@gmail.com</a>
                        </p>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+27799618427">+27 79 961 8427</a>
                        </p>

                        <h3>Social Links</h3>
                        <p>
                            <a
                                href="https://www.linkedin.com/in/david-laubser"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://github.com/davidlaubser"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
