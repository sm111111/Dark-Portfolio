import React from 'react'
import './Bottom.css'
import { LiaStarOfDavidSolid } from "react-icons/lia";


const Bottom = () => {
    return (
        <div className='Bottom-container'>
            <div className="inside-bootom">
                <p>lets's</p>
                <p>work together</p>
            </div>

            <div className="bottom-button">
                <LiaStarOfDavidSolid className='bottom-button-icon' />
            </div>
        </div>
    )
}

export default Bottom
