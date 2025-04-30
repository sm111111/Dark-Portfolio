import React from 'react'
import './HomePage.css'
import HeroSection from '../heroSection/HeroSection'
import MultipleCard from '../multiplecard/MultipleCard'
import Insperation from '../insperation/Insperation'
import Project from '../project/Project'
import Language from '../language/Language'
import Service from '../service/Service'
import About from '../about/About'
import Border from '../border/Border'




const HomePage = () => {
    return (
        <div className='HomePage-container'>
            <section className='section-home'><HeroSection /></section>
            <Border border_name='Service' />
            <section className='section-home'> <MultipleCard /></section>
            <Border border_name='Service' />
            <section className='section-home'> <Service /></section>
            <Border border_name='Project' />
            <section className='section-home'><Project /></section>
            <Border border_name='eduction' />
            <section className='section-home'><About /></section>
            <Insperation />
            <Border border_name='Skills' />
            <section className='section-home'><Language /></section>
        </div>
    )
}

export default HomePage
