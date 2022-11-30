import React from 'react'
import './NavbarMenu.css'
export default function NavbarMenu() {
    return (
        <div className='navbar-menu'>
            <ul>
                <CustomLink href="/home">Home</CustomLink>
                <CustomLink href="/about">About</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
               
            </ul>
        </div>
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}