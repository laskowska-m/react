import React, { Component } from 'react';
import IconTitleText from '../IconTitleText/IconTitleText';

export default class IconTitleTextList extends Component {
    render() {
        const { icon, title, p, headingLevel } = this.props;
        return (
            <div className='flex justify-between'>
                {/* TODO variable for num of icon elements and loop*/}
                <IconTitleText icon={icon} headingLevel={headingLevel} title={title} p={p} />
                <IconTitleText icon={icon} headingLevel={headingLevel} title={title} p={p} />
            </div>
        )
    }
}
