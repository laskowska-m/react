import React from 'react'
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';
import sectionImg from '../../img/designer_1.svg';
import './ImageTextSection.css';

export default function ImageTextSection() {
    return (
        <div className="ImageTextSection">
            <HeadingWithParagraph />
            <img src={sectionImg} className="section-img" alt="" />
        </div>
    );
}


