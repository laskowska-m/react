import React, { Component } from 'react';

export default class ImageSection extends Component {
    render() {
        const { image, className, children } = this.props;

        return (
            <div className={`gap-[30px] lg:mx-auto mx-5 flex justify-between items-center md:flex-nowrap flex-wrap ${className}`}>
                <div className='lg:w-1/2'>
                    {children}
                </div>
                <div>
                    <img src={image} alt="/" />
                </div>
            </div>
        )
    }
}



