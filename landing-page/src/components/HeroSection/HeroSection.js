import React from 'react'
import TitleWithText from '../TitleWithText/TitleWithText'
import Button from '../Button/Button'
import sectionImg from '../../img/designer_1.svg'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className='hero-section d-flex justify-content-between v-center'>
            <div>
                <TitleWithText />
                <div className='d-flex space-between'>
                    <Button>Purchase UI Kit</Button>
                    <Button className='secondary big'>Learn More</Button>
                </div>
            </div>

            <img src={sectionImg} className="section-img" alt="" />

        </div>
    )
}
