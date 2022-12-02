import React from 'react';
import Button from '../components/Button/Button.js';
import ImageTextSection from '../components/ImageTextSection/ImageTextSection.js'
import HeroSection from '../components/HeroSection/HeroSection.js';
import HeadingWithParagraph from '../components/HeadingWithParagraph/HeadingWithParagraph.js';

export default function Home() {
    return (
        <>
            <HeroSection/> 
            <section className='mt-36'>
                <ImageTextSection/>
            </section>
            <section className='my-28'>
                <ImageTextSection/>
            </section>
            
        </>

    )
}

