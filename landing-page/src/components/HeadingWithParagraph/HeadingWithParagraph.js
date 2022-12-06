import React, { Component } from 'react';

export default class HeadingWithParagraph extends Component {
    render() {
        const { title, p1, p2, headingLevel, className, classNameofP } = this.props;
        const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

        const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
        const Title = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

        return (
            <div className={className}>
                <Title>{title}</Title>
                <p className={classNameofP}>{p1}</p>
                <p className={classNameofP}>{p2}</p>
            </div>
        );
    }
}

