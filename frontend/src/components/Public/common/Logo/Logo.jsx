import React from 'react';
import LogoImg from '../../../../assets/images/logo/restaurant-logo.png';
import './Logo.scss';

export const Logo = () => {
    return (
        <>
            <a href="/">
                <div className="Logo">
                    <img src={LogoImg} alt=''/>
                    <h1>FRESHFOOD</h1>
                </div>
            </a>
        </>
    )
}