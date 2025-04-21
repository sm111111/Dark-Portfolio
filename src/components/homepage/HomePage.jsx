import React from 'react'
import './HomePage.css'
import HeroSection from '../heroSection/HeroSection'
import MultipleCard from '../multiplecard/MultipleCard'
import Insperation from '../insperation/Insperation'
import Project from '../project/Project'
import Language from '../language/Language'
import Service from '../service/Service'
import About from '../about/About'



const HomePage = () => {
    return (
        <div className='HomePage-container'>
            <section className='section-home'><HeroSection /></section>
            <section className='section-home'> <MultipleCard /></section>
            <section className='section-home'> <Service /></section>
            <section className='section-home'><Project /></section>
            <section className='section-home'><About /></section>
            <Insperation />
            <section className='section-home'><Language /></section>
        </div>
    )
}

export default HomePage
