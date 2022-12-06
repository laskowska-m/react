import React, { Component } from 'react';
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';

export default class IconTitleText extends Component {
    render() {
        const { icon, title, p, headingLevel, className } = this.props;
        return (
            <div>
                <img className='section-icon my-[12px]' src={icon} />
                <HeadingWithParagraph classNameofP='text-[12px] leading-[18px] my-0' headingLevel={headingLevel} title={title} p1={p} />
            </div>
        )
    }
}


