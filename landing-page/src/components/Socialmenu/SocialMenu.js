import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function SocialMenu() {
  return (
    <div className='flex items-center gap-[30px] text-[#B0B8BC] '>
      <a className='hover:text-dark-purple ease-in-out duration-500' href='' target='_blank'>< FaFacebookF /></a>
      <a className='hover:text-dark-purple ease-in-out duration-500' href='' target='_blank'>< FaLinkedinIn /></a>
      <a className='hover:text-dark-purple ease-in-out duration-500' href='' target='_blank'>< FaTwitter /></a>
      <a className='hover:text-dark-purple ease-in-out duration-500' href='' target='_blank'>< FaYoutube /></a>
      <a className='hover:text-dark-purple ease-in-out duration-500' href='' target='_blank'>< FaInstagram /></a>
    </div>
  )
}
