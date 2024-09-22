import React from 'react';
import Logo from '../../../../assets/images/logo/restaurant-logo.png';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="Restaurant">
                    <img src={Logo} alt='' class="restaurant__img"/>
                    <div class="restaurant__name_container">
                        <h1 class="restaurant__name">FRESHFOOD</h1>
                        <p class="restaurant__type">RESTAURANT</p>
                    </div>
                </div>
                <div className="Navbar">
                    {/* <!-- HOME --> */}
                    <a href="/" class="active">HOME</a>
                    {/* <!-- ABOUT --> */}
                    <a href="/about">ABOUT US</a>
                    {/* <!-- SHOP --> */}
                    <a href="/chefs">CHEFS</a>
                    {/* <!-- GALLERY --> */}
                    <a href="/menu">MENU</a>
                    {/* <!-- GALLERY --> */}
                    <a href="/gallery">GALLERY</a>
                    {/* <!-- CONTACT US --> */}
                    <a href="/contact">CONTACT US</a>
                </div>
                <div className="Auth-Icons Flex-Center">                
                    <div className='Icon-Bg'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>                    
                    </div>
                    <div className='Icon-Bg'>
                        <button>2</button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path></svg>
                    </div>
                    <div className='Icon-Bg'>
                        <button>3</button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                    </div>
                </div>
                <div className="MoreMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16"><path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/></svg>
                </div>
            </div>
        </header>   
    )
}
