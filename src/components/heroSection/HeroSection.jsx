import React from 'react'
import './HeroSection.css'
import { FaDotCircle } from "react-icons/fa";
import profileTwo from '../../assets/img/profileTwo.png'


const HeroSection = () => {
    return (
        <div className='HeroSection-container'>

            <div className="inside-HeroSection">
                <h1><FaDotCircle style={{ color: 'red' }} />I AM web developer</h1>
                <span>Creative Design and Web SolutionsDesign</span>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>
                <button>Dowload My Cv</button>
            </div>

            <div className="rightSide-about">
                <img src={profileTwo} alt="" />
            </div>




        </div>
    )
}

export default HeroSection
