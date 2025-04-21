import React, { useState } from 'react'
import './Project.css'

const Project = () => {
    const [openProject, setOpenProject] = useState(false)


    const ProjectInfo = [
        { project_name: 'mern stack', project_link: 'this is link ' },
        { project_name: 'mern stack', project_link: 'this is link ' },
        { project_name: 'mern stack', project_link: 'this is link ' },
        { project_name: 'mern stack', project_link: 'this is link ' },
        { project_name: 'mern stack', project_link: 'this is link ' },
        { project_name: 'mern stack', project_link: 'this is link ' },
    ]

    return (
        <div className='Project-container'>
            <h1>My portfolio</h1>

            <div className="select-project">
                <span tabIndex={0}>All</span>
                <span tabIndex={0}>logo</span>
                <span tabIndex={0}>video</span>
                <span tabIndex={0}>Grafic</span>
                <span tabIndex={0}>mockup</span>
            </div>

            <div className="project-links" >

                {
                    ProjectInfo.length > 0 ? (
                        ProjectInfo.map((item, index) => (
                            <div className={`project-card ${openProject ? "openfull" : ''}`} key={index} >
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
