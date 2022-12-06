import React, { Component } from 'react';
import IconTitleText from '../IconTitleText/IconTitleText';

export default class IconTitleTextList extends Component {
    render() {
        const { icon, title, p, headingLevel, className } = this.props;
        return (
            <div className={`flex justify-between ${className}`}>
                <IconTitleText icon={icon} headingLevel={headingLevel} title={title} p={p} />
                <IconTitleText icon={icon} headingLevel={headingLevel} title={title} p={p} />
            </div>
        )
    }
}
