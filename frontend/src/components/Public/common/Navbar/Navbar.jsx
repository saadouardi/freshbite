import React from 'react';
import { useLocation } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <>
            <div className="Navbar">
                <ul>
                    <li className={isActive('/') ? 'active' : ''}>
                        <a href="/">Home</a>
                    </li>
                    <li className={isActive('/about') ? 'active' : ''}>
                        <a href="/about">About</a>
                    </li>
                    <li className={isActive('/menu') ? 'active' : ''}>
                        <a href="/menu">Menu</a>
                    </li>
                    <li className={isActive('/chefs') ? 'active' : ''}>
                        <a href="/chefs">Chefs</a>
                    </li>
                    <li className={isActive('/blog') ? 'active' : ''}>
                        <a href="/blog">blog</a>
                    </li>
                    <li className={isActive('/gallery') ? 'active' : ''}>
                        <a href="/gallery">Gallery</a>
                    </li>
                    <li className={isActive('/contact') ? 'active' : ''}>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

