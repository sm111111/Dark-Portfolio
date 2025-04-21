import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { TbMenu2 } from "react-icons/tb";
import { HiOutlinePlus } from "react-icons/hi";
import { GiWrappingStar } from "react-icons/gi";
import { SiCodeigniter } from "react-icons/si";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <div className='Navbar-container'>

            <div className="logo">
                <SiCodeigniter className='logo-icon' />
            </div>

            <div className={`allnaviagtion ${open ? 'active' : ''}`}>
                <NavLink to='/' className='allnaviagtion-navlink'> home</NavLink>
                <NavLink to='/about' className='allnaviagtion-navlink'> About me</NavLink>
                <NavLink to='/project' className='allnaviagtion-navlink'> Project</NavLink>
                <NavLink to='/contact' className='allnaviagtion-navlink'> Contact</NavLink>
            </div>

            <div className="phoneView" onClick={handleClick}>
                <TbMenu2 />
            </div>

        </div>
    )
}

export default Navbar
