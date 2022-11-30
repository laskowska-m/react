import React from 'react'
import TitleWithText from '../TitleWithText/TitleWithText';
import sectionImg from '../../img/designer_1.svg';
import './ImageTextSection.css';

export default function ImageTextSection() {
    return (
        <div className="ImageTextSection">
            <TitleWithText />
            <img src={sectionImg} className="section-img" alt="" />
        </div>
    );
}


