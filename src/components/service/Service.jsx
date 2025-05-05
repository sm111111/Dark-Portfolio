import React from 'react'
import './Service.css'
import { AiFillOpenAI } from "react-icons/ai";
import { SiAdobecreativecloud } from "react-icons/si";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Rocket from '../../Rocket.json'
import Laptop from '../../Laptop.json'
import Lottie from 'lottie-react'

const Service = () => {

    const ServiceInfo = [
        { service_icon: <AiFillOpenAI />, service_name: 'UI/UX Design', service_details: 'I design responsive, user-friendly web interfaces using React.js, HTML, CSS (Tailwind/Bootstrap), and JavaScript for optimal performance.' },
        { service_icon: <AiFillOpenAI />, service_name: 'MERN Stack', service_details: 'I develop full-stack applications with MongoDB, Express, React, and Node, integrating RESTful APIs and secure authentication systems.' },
        { service_icon: <AiFillOpenAI />, service_name: 'JWT', service_details: 'I implement secure login and signup systems with JWT, bcrypt, and role-based access control to protect user  data effectively data effectively.' },
        { service_icon: <AiFillOpenAI />, service_name: 'Git & GitHub', service_details: 'I manage Git version control and automate deployment workflows with GitHub Actions, ensuring continuous integration and delivery delivery.' }
    ]


    return (
        <div className='Service-container'>
            <h4>my Service</h4>
            <h1>Services I offer</h1>

            <div className="inside-service">




                {
                    ServiceInfo.length > 0 ? (
                        ServiceInfo.map((item, index) => (
                            <div className="service-card" key={index}>
                                <span><Lottie animationData={Rocket} /></span>
                                <h2>{item.service_name}</h2>
                                <p>{item.service_details}</p>
                            </div>
                        ))
                    ) : (<p>data not found</p>)
                }




            </div>
        </div>
    )
}

export default Service
