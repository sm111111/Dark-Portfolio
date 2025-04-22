import React, { useState } from 'react'
import './Project.css'

const Project = () => {
    const [openProject, setOpenProject] = useState(false)


    const ProjectInfo = [
        { project_name: 'Grosery Store', project_link: 'https://groserysite.onrender.com ' },
        { project_name: 'Cloth Store', project_link: 'https://grosery-qco2.onrender.com ' },
        { project_name: 'Cab', project_link: 'https://taxi-14en.onrender.com ' },
        { project_name: 'Pdt Converter ', project_link: 'https://pdf-converter-g39r.onrender.com ' },
        { project_name: 'PortFolio ', project_link: 'https://dark-portfolio-1.onrender.com ' },
    ]

    const handleLink = (link) => {
        window.open(link, '_blank')
    }

    return (
        <div className='Project-container'>
            <h1>My portfolio</h1>

            {/* <div className="select-project">
                <span tabIndex={0}>All</span>
                <span tabIndex={0}>logo</span>
                <span tabIndex={0}>video</span>
                <span tabIndex={0}>Grafic</span>
                <span tabIndex={0}>mockup</span>
            </div> */}

            <div className="project-links" >

                {
                    ProjectInfo.length > 0 ? (
                        ProjectInfo.map((item, index) => (
                            <div className={`project-card ${openProject ? "openfull" : ''}`}
                                key={index}
                                onClick={() => handleLink(item.project_link)}
                            >
                                <p>{item.project_name}</p>
                            </div>
                        ))
                    ) : (<p>data not found</p>)
                }


            </div>
        </div >
    )
}

export default Project
