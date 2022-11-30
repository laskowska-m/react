import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';
import './Navbar.css';
export default function Navbar() {
    
    return (
        <nav className="nav">
            <NavbarMenu/>
            <Link to='/' className="site-title">Landie</Link>

        </nav>
    )
}
