import React from 'react'
import './Language.css'
import { RiHtml5Fill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiCsswizardry } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineAnimation } from "react-icons/md";
import { BsFillFilePdfFill } from "react-icons/bs";
import { LuGitFork } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";





const Language = () => {

    const info = [
        { language_icon: <RiHtml5Fill />, laguage_name: 'html' },
        { language_icon: <SiCsswizardry />, laguage_name: 'css' },
        { language_icon: <SiJavascript />, laguage_name: 'js' },
        { language_icon: <FaBootstrap />, laguage_name: 'Bootstrap' },
        { language_icon: <SiTailwindcss />, laguage_name: 'Tailwind' },
        { language_icon: <FaReact />, laguage_name: 'React' },
        { language_icon: <SiMongodb />, laguage_name: 'Mongodb' },
        { language_icon: <FaNode />, laguage_name: 'Node' },
        { language_icon: <SiExpress />, laguage_name: 'Express' },
        { language_icon: <SiPostman />, laguage_name: 'postman' },
        { language_icon: <SiExpress />, laguage_name: 'redux' },
        { language_icon: <SiJsonwebtokens />, laguage_name: 'jwt' },
        { language_icon: <FaCloudUploadAlt />, laguage_name: 'multer' },
        { language_icon: <SiSocketdotio />, laguage_name: 'socket.io' },
        { language_icon: <MdOutlineAnimation />, laguage_name: 'gsap' },
        { language_icon: <MdOutlineAnimation />, laguage_name: 'anime' },
        { language_icon: <BsFillFilePdfFill />, laguage_name: 'jspdf' },
        { language_icon: <LuGitFork />, laguage_name: 'cors' },

    ]
    return (
        <div className='Language-container'>

            {
                info.length > 0 ? (
                    info.map((item, index) => (
                        <div className="laguage-box" key={index}>
                            <span>{item.language_icon}</span>
                            <p>{item.laguage_name}</p>
                        </div>
                    ))
                ) : (<p>data not found</p>)
            }
        </div >
    )
}

export default Language
