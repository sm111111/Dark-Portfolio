import React from 'react'
import Laptop from '../../Laptop.json'
import Lottie from 'lottie-react'
import './Extra.css'


const Extra = () => {
    return (

        <div className='Extra-container'>
            <Lottie animationData={Laptop} className="lottie-size" />
        </div>

    )
}

export default Extra
