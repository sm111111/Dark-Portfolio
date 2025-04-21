import React from 'react'
import './About.css'

const About = () => {

    const AboutInfo = [
        { about_qualification: 'BSc in Computer Science', about_university: 'University of ULAV (2018 - 2022)', about_passingYear: '2016-2018', about_info: 'Pomnis voluptas assumenda est, omnis dolor repellendus.' },
        { about_qualification: 'BSc in Computer Science', about_university: 'University of ULAV (2018 - 2022)', about_passingYear: '2016-2018', about_info: 'Pomnis voluptas assumenda est, omnis dolor repellendus.' },
        { about_qualification: 'BSc in Computer Science', about_university: 'University of ULAV (2018 - 2022)', about_passingYear: '2016-2018', about_info: 'Pomnis voluptas assumenda est, omnis dolor repellendus.' },
    ]


    return (
        <div className='About-container'>

            <div className="insideAbout">
                <h1>eduction</h1>

                {
                    AboutInfo.length > 0 ? (
                        AboutInfo.map((item, index) => (
                            <div className="leftside-About" key={index}>
                                <h2>{item.about_qualification}</h2>
                                <h3>{item.about_university}</h3>
                                <span>{item.about_passingYear}</span>
                                <p>{item.about_info}</p>
                            </div>
                        ))
                    ) : (<p>data not found</p>)
                }
            </div>
        </div >
    )
}

export default About
