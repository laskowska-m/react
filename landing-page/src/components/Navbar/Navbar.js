import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';
import './Navbar.css';
import Button from '../Button/Button';
export default function Navbar() {

    return (
        <nav className="navbar w-full">
            <NavbarMenu />
            <Link to='/' className="site-title">Landie</Link>
            <Button className='secondary'>Buy Now</Button>
        </nav>
    )
}
