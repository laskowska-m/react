import React from 'react'
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph'
import Button from '../Button/Button'
import sectionImg from '../../img/designer_1.svg'
import './HeroSection.css'

export default function HeroSection() {
    return (
        <div className='hero-section pb-40'>
            <div className='hero-bg-shape'></div>
            <img src={sectionImg} className="hero-img w-[650px] absolute top-[16rem] right-[-2rem]" alt="" />
            <div className='flex items-center mt-[170px] pb-[200px] max-w-[1080px] gap-[30px] mx-auto relative'>

                <div className=''>
                    <div className='mt-[55px] w-1/2'>
                        <HeadingWithParagraph title='Introduce Your Product Quickly & Effectively' headingLevel='h1' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' p2='mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
                        <div className='flex space-between mt-[70px]'>
                            <Button className='secondary big mr-[30px]'>Purchase UI Kit</Button>
                            <Button className='big'>Learn More</Button>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}
