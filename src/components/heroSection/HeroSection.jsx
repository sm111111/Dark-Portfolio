import React from 'react'
import './HeroSection.css'
import { IoIosContact } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import profileTwo from '../../assets/img/profileTwo.png'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate();

    const handleMove = (e) => {
        e.preventDefault();
        navigate('/contact');
    }

    return (
        <div className='HeroSection-container'>

            <div className="intro-herosection">
                <h2>Hello</h2>
                <h2>This is <b>Shekhar Mali</b>, Frontend & MERN-Stack Web Developer | Crafting Dynamic, <b>Responsive UIs</b></h2>
                <h2><b>Web Developer</b></h2>
                <div className="comumication">
                    <button onClick={handleMove}>Contact me <IoIosContact className='comumication-icon' /></button>
                    <button>Get Resume <MdFileDownload className='comumication-icon' /></button>
                </div>
            </div>

            <div className="inside-HeroSection">
                <h1><FaDotCircle style={{ color: 'red' }} /> Hello I’m Shekhar Mali</h1>
                <span>Frontend & MERN-Stack Web Developer | Crafting Dynamic, Responsive UIs</span>
                <p>Hello, I’m Shekhar Mali, a passionate Frontend & MERN-Stack Web Developer and recent graduate. I specialize in HTML, CSS, and JavaScript for crafting engaging UIs, complemented by React for building dynamic interfaces. On the backend, I work with Node.js, Express, MongoDB, and JWT for secure, scalable applications. Skilled in modern development workflows, I focus on writing clean, maintainable code with attention to performance, accessibility, and responsive design. Throughout my studies and hands-on exercises, I’ve cultivated a user-first approach and strong problem-solving abilities. Eager to learn and contribute, I’m excited to apply my skills to build innovative digital experiences and solutions.</p>
                <button>Download My CV</button>
            </div>

            <div className="aboutme-herosection">
                <div className="top-aboutme">
                    <img src={profileTwo} alt="Profile" />
                </div>
                <div className="bottom-aboutme">
                    <h2>Who I Am</h2>
                    <br />
                    <p>Hello, I’m Shekhar Mali, a Frontend/MERN-stack developer specializing in responsive, user-focused web applications. I build interfaces with HTML, CSS, JavaScript and React, and develop secure backends with Node.js, Express, MongoDB and JWT, applying the MVC pattern for modularity.

                        On the frontend, I use React hooks, context and functional components to create dynamic UIs. I focus on cross-browser compatibility and mobile-first design, integrating state management to handle data flows and optimize performance.

                        On the backend, I structure Express apps with controllers, services and models. I implement RESTful APIs, middleware and JWT-based authentication and role-based access control, and write tests to ensure quality. I enjoy solving complex problems and adopting new libraries and frameworks.

                        My toolkit includes Git, Postman and VS Code. I follow agile practices, participate in code reviews and leverage CI/CD pipelines for automated builds and deployments. I’m committed to writing clean, well-documented code with robust error handling. I prioritize accessibility standards and performance tuning to ensure a smooth user experience.

                        I thrive in collaborative environments where continuous learning and clear communication drive innovation. I’m eager to join a forward-thinking team and contribute MVC-driven architecture expertise to deliver scalable, impactful digital solutions and maintain high user satisfaction.</p>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
