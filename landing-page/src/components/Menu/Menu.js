import React from 'react';
import './Menu.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Menu({className}) {
    return (
            <ul className={`flex ${className}`}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}