import React from 'react';
import Button from '../components/Button/Button.js';
import ImageTextSection from '../components/ImageTextSection/ImageTextSection.js'
import HeroSection from '../components/HeroSection/HeroSection.js';
import HeadingWithParagraph from '../components/HeadingWithParagraph/HeadingWithParagraph.js';

export default function Home() {
    return (
        <>
            <HeroSection/> 
            <div className='mt-36'>
                <HeadingWithParagraph title='Light, Fast & Powerful' headingLevel='h2' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' p2='mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
            </div>
        </>

    )
}

