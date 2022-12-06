import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <nav className="w-full text-[14px] text-light-purple">
            <div className='md:flex hidden justify-between items-center max-w-[1100px] lg:mx-auto mx-5 py-[15px]'>
                <Menu className='gap-[60px]' />
                <Link to='/' className="text-[26px] font-black text-dark-purple">Landie</Link>
                <Button className='secondary min-w-[160px] text-[12px]'>Buy Now</Button>
            </div>

            <div className='md:hidden flex justify-between items-center m-5'>
                <Link to='/' className="text-[26px] font-black text-dark-purple">Landie</Link>
                <div className='z-20' onClick={handleNav}>
                    {nav ? <IoIosClose size={30} /> : <IoIosMenu size={22} />}
                </div>
            </div>

            <div className={nav ? 'md:hidden flex flex-col gap-[30px] fixed right-0 top-0 pt-[80px] h-full w-[50%] p-5 z-10 bg-section-bg uppercase ease-in-out duration-500' : 'fixed right-[-100%]'}>
                <Menu className='flex-col gap-[30px]' />
                <Button className='secondary min-w-[100px] text-[12px]'>Buy Now</Button>
            </div>
        </nav>
    )
}


