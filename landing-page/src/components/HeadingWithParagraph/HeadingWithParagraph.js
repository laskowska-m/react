import React, { Component } from 'react'

export default class HeadingWithParagraph extends Component {
    render() {
        const { title, paragraph, headingLevel } = this.props;
        const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

        const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
        const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

        return (
            <div className='heading-paragraph-container'>
                <Title>{title}</Title>
                <p>{paragraph}</p>
            </div>
        );
    }
}

