import React from 'react';
import HeadingWithParagraph from '../HeadingWithParagraph/HeadingWithParagraph';
import Button from '../Button/Button';

export default function PricingSection() {
    return (
        <div className='lg:w-1/2 p-[50px] lg:mx-auto mx-5'>
            <HeadingWithParagraph headingLevel='h2' title='A Price To Suit Everyone' p1='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ' />
            <p className='text-price-color font-medium text-[50px] py-4 mt-[30px]'>$40</p>
            <p className='text-dark-purple text-base py-1 mb-[60px]'>UI Design Kit</p>
            <p className='text-[14px] pb-1'>See, One price. Simple.</p>
            <Button className='secondary big self-start'>Purchase Now</Button>
        </div>
    )
}
