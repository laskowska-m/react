import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

export default function Navbar() {
    return (
        <nav className="navbar flex justify-between items-center max-w-[1100px] lg:mx-auto mx-5 py-[15px] text-[14px] text-light-purple">
            <Menu />
            <Link to='/' className="text-[26px] font-black text-dark-purple">Landie</Link>
            <Button className='secondary min-w-[160px] text-[12px]'>Buy Now</Button>
        </nav>
    )
}
