import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="Navbar">
                <ul>
                    <li className={isActive('/') ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={isActive('/about') ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={isActive('/menu') ? 'active' : ''}>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li className={isActive('/chefs') ? 'active' : ''}>
                        <Link to="/chefs">Chefs</Link>
                    </li>
                    <li className={isActive('/blog') ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className={isActive('/gallery') ? 'active' : ''}>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li className={isActive('/contact') ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

