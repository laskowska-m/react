import React from 'react'
import NavbarMenu from './NavbarMenu';
import './Navbar.css';
export default function Navbar() {
    return (
        <nav className="nav">
            <NavbarMenu/>
            <a href='/' className="site-title">Landie</a>

        </nav>
    )
}
