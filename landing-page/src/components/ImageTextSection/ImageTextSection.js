import React from 'react'
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';
import sectionImg from '../../img/section_1.svg';

export default function ImageTextSection() {
    return (
        <div className="max-w-[1080px] gap-[30px] mx-auto flex items-center">
            <div className='w-1/2'>
                <HeadingWithParagraph title='Light, Fast & Powerful' headingLevel='h2' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus' p2='mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.' />

            </div>
            <div className=''>
                <img src={sectionImg} className="section-img " alt="" />

            </div>
        </div>
    );
}


