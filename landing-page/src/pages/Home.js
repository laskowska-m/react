import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection.js';
import ImageSection from '../components/ImageSection/ImageSection.js'
import IconTitleTextList from '../components/IconTitleTextList/IconTitleTextList.js';
import HeadingWithParagraph from '../components/HeadingWithParagraph/HeadingWithParagraph.js';
import PricingSection from '../components/PricingSection/PricingSection.js';
import sectionImg1 from '../img/section_1.svg';
import sectionImg2 from '../img/section_2.svg';
import sectionIcon from '../img/section_icon.svg';

export default function Home() {
    return (
        <>
            <div className='max-w-[1100px] lg:mx-auto mx-5'>
                <HeroSection />
                <section className='py-20 lg:mt-20'>
                    <ImageSection className='lg:flex-row flex-col-reverse' image={sectionImg1} >
                        <HeadingWithParagraph headingLevel='h2' title='Light, Fast & Powerful' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' p2='mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
                        <IconTitleTextList className='pt-[40px] my-[40px] gap-[30px]' headingLevel='h3' icon={sectionIcon} title='Title Goes Here' p='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' />

                    </ImageSection>
                </section>
                <section className='py-40'>
                    <ImageSection className='lg:flex-row-reverse flex-col-reverse gap-[100px] ml-[25px]' image={sectionImg2} >
                        <HeadingWithParagraph headingLevel='h2' title='Light, Fast & Powerful' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' p2='mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />
                    </ImageSection>
                </section>
            </div>
            <section className='lg:py-[200px] py-[100px] text-center bg-section-bg/50 relative before:rounded-[50%] before:bg-white before:w-[120%] before:h-[120px] before:absolute before:top-[-55px] before:left-[-10%] '>
                <PricingSection />
            </section>
        </>

    )
}

