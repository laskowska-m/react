import React, { Component } from 'react';
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';

export default class IconTitleText extends Component {
    render() {
        const { icon, title, p, headingLevel } = this.props;
        return (
            <div>
                <img className='section-icon my-[10px]' src={icon} />
                <HeadingWithParagraph headingLevel={headingLevel} title={title} p1={p} />
            </div>
        )
    }
}


