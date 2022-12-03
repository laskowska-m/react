import React, { Component } from 'react';
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';

export default class ImageTextSection extends Component {
  render() {
    const { image, title, p1, p2, headingLevel } = this.props;

    return (
        <div className="max-w-[1080px] gap-[30px] mx-auto flex items-center">
        <div className='w-1/2'>
            <HeadingWithParagraph title={title} headingLevel={headingLevel} p1={p1} p2={p2} />

        </div>
        <div className=''>
            <img src={image} className="section-img " alt="" />

        </div>
    </div>
    )
  }
}



