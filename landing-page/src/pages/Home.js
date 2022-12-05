import React from 'react';
import Button from '../components/Button/Button.js';
import ImageTextSection from '../components/ImageTextSection/ImageTextSection.js'
import HeroSection from '../components/HeroSection/HeroSection.js';
import HeadingWithParagraph from '../components/HeadingWithParagraph/HeadingWithParagraph.js';
import IconTitleText from '../components/IconTitleText/IconTitleText.js';
import IconTitleTextList from '../components/IconTitleTextList/IconTitleTextList.js';
import PricingSection from '../components/PricingSection/PricingSection.js';
import sectionImg1 from '../img/section_1.svg'
import sectionImg2 from '../img/section_2.svg'
import sectionIcon from '../img/section_icon.svg';


export default function Home() {
    return (
        <>
            <div className='max-w-[1100px] mx-auto'>
                <HeroSection />
                <section className='pt-40'>
                    <ImageTextSection image={sectionImg1} headingLevel='h2' title='Light, Fast & Powerful' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' p2='mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
                    <IconTitleTextList headingLevel='h3' icon={sectionIcon} title='Title Goes Here' p='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' />
                </section>
                <section className='py-40'>
                    <ImageTextSection className='flex-row-reverse' image={sectionImg2} headingLevel='h2' title='Light, Fast & Powerful' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' p2='mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
                </section>
            </div>
            <section className='py-[200px] text-center bg-section-bg/50 relative before:rounded-[50%] before:bg-white before:w-[120%] before:h-[120px] before:absolute before:top-[-55px] before:left-[-10%] '>
                <PricingSection />
                

            </section>
        </>



    )
}

