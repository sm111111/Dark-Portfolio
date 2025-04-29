import React from 'react'
import './HeroSection.css'
import { FaDotCircle } from "react-icons/fa";
import profileTwo from '../../assets/img/profileTwo.png'


const HeroSection = () => {
    return (
        <div className='HeroSection-container'>

            <div className="inside-HeroSection">
                <h1><FaDotCircle style={{ color: 'red' }} />Hello I’m Shekhar Mali </h1>
                <span>Frontend & MERN-Stack Web Developer | Crafting Dynamic, Responsive UIs</span>
                <p>Hello, I’m Shekhar Mali, a passionate Frontend & MERN-Stack Web Developer and recent graduate. I specialize in HTML, CSS, and JavaScript for crafting engaging UIs, complemented by React for building dynamic interfaces. On the backend, I work with Node.js, Express, MongoDB, and JWT for secure, scalable applications. Skilled in modern development workflows, I focus on writing clean, maintainable code with attention to performance, accessibility, and responsive design. Throughout my studies and hands-on exercises, I’ve cultivated a user-first approach and strong problem-solving abilities. Eager to learn and contribute, I’m excited to apply my skills to build innovative digital experiences and solutions.</p>
                <button>Dowload My Cv</button>
            </div>

            <div className="rightSide-about">
                <img src={profileTwo} alt="" />
            </div>




        </div>
    )
}

export default HeroSection
