import React from 'react'
import './Service.css'
import { AiFillOpenAI } from "react-icons/ai";
import { SiAdobecreativecloud } from "react-icons/si";
import { HiOutlineComputerDesktop } from "react-icons/hi2";


const Service = () => {

    const ServiceInfo = [

        { service_icon: <AiFillOpenAI />, service_name: 'UI/UX Design', service_details: 'Hen our power of choice is untrammelled and when nothing prevents our being able' },
        { service_icon: <AiFillOpenAI />, service_name: 'UI/UX Design', service_details: 'Hen our power of choice is untrammelled and when nothing prevents our being able' },
        { service_icon: <AiFillOpenAI />, service_name: 'UI/UX Design', service_details: 'Hen our power of choice is untrammelled and when nothing prevents our being able' },
        { service_icon: <AiFillOpenAI />, service_name: 'UI/UX Design', service_details: 'Hen our power of choice is untrammelled and when nothing prevents our being able' }
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
                                <span>{item.service_icon}</span>
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
