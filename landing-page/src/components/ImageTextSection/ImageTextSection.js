import React from 'react'
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';
import sectionImg from '../../img/designer_1.svg';

export default function ImageTextSection() {
    return (
        <div className="flex space-between items-center">
            <HeadingWithParagraph className='text-txt-gray' />
            <img src={sectionImg} className="section-img w-1/2" alt="" />
        </div>
    );
}


