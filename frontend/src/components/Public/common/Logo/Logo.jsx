import React from 'react';
import LogoImg from '../../../../assets/images/logo/restaurant-logo.png';

export const Logo = () => {
    return (
        <>
            <div className="Restaurant">
                <img src={LogoImg} alt='' class="restaurant__img"/>
                <div class="restaurant__name_container">
                    <h1 class="restaurant__name">FRESHFOOD</h1>
                    <p class="restaurant__type">RESTAURANT</p>
                </div>
            </div>
        </>
    )
}