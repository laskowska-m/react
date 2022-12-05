import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter,FaYoutube, FaInstagram } from 'react-icons/fa';


export default function SocialMenu() {
  return (
    <div className='flex gap-[30px] text-[#B0B8BC]'>
      <a href='' target='_blank'>< FaFacebookF /></a>
      <a href='' target='_blank'>< FaLinkedinIn /></a>
      <a href='' target='_blank'>< FaTwitter /></a>
      <a href='' target='_blank'>< FaYoutube /></a>
      <a href='' target='_blank'>< FaInstagram /></a>
    </div>
  )
}
