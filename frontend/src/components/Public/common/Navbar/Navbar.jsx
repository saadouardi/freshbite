import React from 'react';
import './Navbar.scss';

export const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <a href="/" class="active">HOME</a>
                <a href="/about">ABOUT US</a>
                <a href="/menu">MENU</a>
                <a href="/chefs">CHEFS</a>
                <a href="/blog">BLOG</a>
                <a href="/gallery">GALLERY</a>
                <a href="/contact">CONTACT US</a>
            </div>
        </>
    )
}