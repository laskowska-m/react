import React from 'react';
import './NavbarMenu.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavbarMenu() {
    return (
        <div className='navbar-menu flex'>
            <ul className='flex'>
                <CustomLink className='pr-[60px]' to="/">Home</CustomLink>
                <CustomLink className='pr-[60px]' to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>

            </ul>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}