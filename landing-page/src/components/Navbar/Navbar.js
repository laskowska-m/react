import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';
import './Navbar.css';
import Button from '../Button/Button';
export default function Navbar() {

    return (
        <nav className="navbar flex justify-between items-center max-w-[1080px] lg:mx-auto mx-5 py-[15px]">
            
                <NavbarMenu />
                <Link to='/' className="site-title text-dark-purple">Landie</Link>
                <Button className='secondary'>Buy Now</Button>
         
            
        </nav>
    )
}
