import React, { Component } from 'react';
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';

export default class ImageTextSection extends Component {
    render() {
        const { image, title, p1, p2, headingLevel, className } = this.props;

        return (
            <div className={`gap-[30px] lg:mx-auto mx-5 flex justify-between items-center md:flex-nowrap flex-wrap ${className}`}>
                <div className='lg:w-1/2'>
                    <HeadingWithParagraph title={title} headingLevel={headingLevel} p1={p1} p2={p2} />
                </div>
                <div>
                    <img src={image} alt="/" />
                </div>
            </div>
        )
    }
}



