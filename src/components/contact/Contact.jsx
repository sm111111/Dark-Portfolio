import React from 'react'
import './Contact.css'



const Contact = () => {

    return (
        <div className='Contact-container'>

            <div className="rightSide-Contact">
                <div className="insideRigth-Contact">
                    <h1>Let’s work <b>together</b>.</h1>
                    <input type="text" placeholder='Name*' />
                    <input type="email" placeholder='Email*' />
                    <input type="text" placeholder='Your Subject*' />
                    <textarea placeholder='Your Message*'></textarea>
                    <button>send message</button>
                </div>
            </div>
        </div >
    )
}

export default Contact
