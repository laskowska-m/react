import React from 'react';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import SocialMenu from '../Socialmenu/SocialMenu';

export default function footer() {
  return (
    <footer className='bg-section-bg full-w pt-5'>
        <div className='max-w-[1100px] lg:mx-auto mx-5'>
            <div className='flex md:flex-row flex-col justify-between items-center py-5'>
                <p className='text-[14px] text-[#939EA4] my-0'>©2020 Yourcompany</p>
                <h2 className='text-dark-purple text-[26px] font-black'>Landie</h2>
                <Button className='secondary text-[12px] min-w-0 px-4'>Purchase now</Button>
            </div>
            <div className='flex md:flex-row flex-col gap-[30px] justify-between items-center pt-5  pb-6 border-t-solid border-t-[2px] border-t-[#CDD1D4]'>
                <Menu className='gap-[60px] flex-row '/>
                <SocialMenu />
            </div>
        </div>

    </footer>
  )
}
