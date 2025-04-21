import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='Footer-container'>

            <h1>Shekhar</h1>

            <div className="allLinks">
                <NavLink to='/' className='allLinks-footer'> Home</NavLink>
                <NavLink to='/about' className='allLinks-footer'> About</NavLink>
                <NavLink to='/project' className='allLinks-footer'> Project</NavLink>
                <NavLink to='/contact' className='allLinks-footer'> Contact</NavLink>
            </div>

            <p>@ All Right Reseverd By <b>ShekharMali</b></p>
        </div>
    )
}

export default Footer
