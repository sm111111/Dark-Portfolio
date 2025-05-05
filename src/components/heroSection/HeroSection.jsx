import React from 'react'
import './HeroSection.css'
import { IoIosContact } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import shekhar from '../../assets/img/shekhar.jpg'
import { useNavigate } from 'react-router-dom'
import { FaDotCircle } from "react-icons/fa";
import Lottie from 'lottie-react'
import profileShow from '../../profileShow.json'

const HeroSection = () => {
    const navigate = useNavigate()

    const handleMove = (e) => {
        e.preventDefault();
        navigate('/contact')
    }

    const DownloadPDF = (e) => {
        e.preventDefault();

        const link = document.createElement('a')
        link.href = '/cv.pdf';
        link.download = './cv.pdf';
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

    }

    return (
        <div className='HeroSection-container'>

            <div className="intro-herosection">
                <h2>hello</h2>
                <h2>this is <b>Shekhar mali</b>,Frontend & MERN-Stack Web Developer | Crafting Dynamic, <b>Responsive UIs</b></h2>
                <h2><b>web Developer</b></h2>
                <div className="comumication">
                    <button onClick={handleMove}>Conatct me <IoIosContact className='comumication-icon' /></button>
                    <button onClick={DownloadPDF} tabIndex={0}>get resume <MdFileDownload className='comumication-icon' /></button>
                </div>


                <div className="aboutme-herosection">
                    <div className="top-aboutme">
                        <Lottie animationData={profileShow} />
                    </div>

                    <div className="bottom-aboutme">
                        <h2>Who i am</h2>
                        <br />
                        <p>Hello, I’m Shekhar Mali, a Frontend/MERN-stack developer specializing in responsive, user-focused web applications. I build interfaces with HTML, CSS, JavaScript and React, and develop secure backends with Node.js, Express, MongoDB and JWT, applying the MVC pattern for modularity.

                            On the frontend, I use React hooks, context and functional components to create dynamic UIs. I focus on cross-browser compatibility and mobile-first design, integrating state management to handle data flows and optimize performance.

                            On the backend, I structure Express apps with controllers, services and models. I implement RESTful APIs, middleware and JWT-based authentication and role-based access control, and write tests to ensure quality. I enjoy solving complex problems and adopting new libraries and frameworks.

                            My toolkit includes Git, Postman and VS Code. I follow agile practices, participate in code reviews and leverage CI/CD pipelines for automated builds and deployments. I’m committed to writing clean, well-documented code with robust error handling. I prioritize accessibility standards and performance tuning to ensure a smooth user experience.

                            I thrive in collaborative environments where continuous learning and clear communication drive innovation. I’m eager to join a forward-thinking team and contribute MVC-driven architecture expertise to deliver scalable, impactful digital solutions and maintain high user satisfaction.</p>
                    </div>
                </div>







            </div>
        </div>
    )
}
export default HeroSection
