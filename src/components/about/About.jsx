import React from 'react'
import './About.css'

const About = () => {

    const AboutInfo = [
        { about_qualification: 'Bachelor of Commerce (BCom)', about_university: 'Mumbai University ', about_passingYear: '(2018 - 2022)', about_info: 'laxmichand golwala college of commerce & economics.' },
        { about_qualification: 'Higher Secondary Certificate (HSC)', about_university: 'Mumbai University ', about_passingYear: '(2016 - 2018)', about_info: 'vidya niketan degree college of commerce.' },
        { about_qualification: 'Secondary School Certificate (SSC)', about_university: 'maharashtra board', about_passingYear: '(2014 - 2016)', about_info: 'agrasen hindi jr college of commerce.' },
    ];




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
