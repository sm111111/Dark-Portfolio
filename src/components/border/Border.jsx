import React from 'react'
import './Border.css'

const Border = ({ border_name }) => {
    return (
        <>
            <div className='Border-container'>
                <span>{border_name}</span>
            </div>
        </>
    )
}

export default Border
