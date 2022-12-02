import React from 'react'
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph'
import Button from '../Button/Button'
import sectionImg from '../../img/designer_1.svg'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className='hero-section flex space-between v-center'>
            <div>
                <HeadingWithParagraph title='Introduce Your Product Quickly & Effectively' headingLevel='h1' paragraph='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
                <div className='flex space-between'>
                    <Button className='secondary big'>Purchase UI Kit</Button>
                    <Button className='big'>Learn More</Button>
                </div>
            </div>

            <img src={sectionImg} className="section-img" alt="" />

        </div>
    )
}
