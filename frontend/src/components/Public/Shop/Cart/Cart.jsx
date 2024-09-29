import React, { useState, useEffect, useRef } from 'react';
import { Quantity } from '../Quantity/Quantity';
import Burger from '../../../../assets/images/menu/burgers/BeefBurger.png';
import Burger1 from '../../../../assets/images/menu/burgers/BurgerIngredient.png';
import Burger2 from '../../../../assets/images/menu/burgers/CheeseBurger.png';
import './Cart.scss';

export const Cart = () => {
    const [cart, setCart] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const SidebarCartRef = useRef(null);
    const handleCart = () => {
        if (cart) {
            setIsClosing(true);
            setTimeout(() => {
                setCart(false);
                setIsClosing(false);
            }, 700);
        } else {
            setCart(true);
        }
    };
    useEffect(() => {
        if (SidebarCartRef.current) {
            if (cart && !isClosing) {
                SidebarCartRef.current.style.animation = 'OpenCart .7s linear forwards';
            } else if (isClosing) {
                SidebarCartRef.current.style.animation = 'CloseCart .7s linear forwards';
            }
        }
    }, [cart, isClosing]);
    return (
        <>
            <div title='Open Cart' className='Cart-Icon Icon-Bg' onClick={handleCart}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                <button>3</button>
            </div>
            {cart &&
                <div className='Main-SidebarCart'>
                    <div className='SidebarCart' ref={SidebarCartRef}>
                        <div className='Header-Body'>
                            <div className='Cart-Header'>
                                <div className='Flex-Center Flex-SpaceBetween'>
                                    <h1>Your Cart</h1>
                                    <svg title='Close cart' onClick={handleCart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
                                </div>
                                <hr/>
                            </div>
                            <div className='Cart-Body'>
                                <div className='Product-Data Flex-Center Flex-SpaceBetween'>
                                    <div className='product-info Flex-Center Flex-SpaceBetween'>
                                        <div className='product-image Flex-Center'>
                                            <img src={Burger} alt="" />
                                        </div>
                                        <div className='product-name-quantity Product-Name-Quantity Flex-Center Flex-Column'>
                                            <h1>Crunch Grillhouse</h1>
                                            <Quantity/>
                                        </div>
                                        <div className='product-price'>
                                            <h1>$40.00</h1>
                                        </div>
                                    </div>
                                    <div className='product-remove'>
                                        <div className='Icon-Bg Danger'>
                                            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className='Product-Data Flex-Center Flex-SpaceBetween'>
                                    <div className='product-info Flex-Center Flex-SpaceBetween'>
                                        <div className='product-image Flex-Center'>
                                            <img src={Burger} alt="" />
                                        </div>
                                        <div className='product-name-quantity Product-Name-Quantity Flex-Center Flex-Column'>
                                            <h1>Crunch Grillhouse</h1>
                                            <Quantity/>
                                        </div>
                                        <div className='product-price'>
                                            <h1>$40.00</h1>
                                        </div>
                                    </div>
                                    <div className='product-remove'>
                                        <div className='Icon-Bg Danger'>
                                            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                <div className='Product-Data Flex-Center Flex-SpaceBetween'>
                                    <div className='product-info Flex-Center Flex-SpaceBetween'>
                                        <div className='product-image Flex-Center'>
                                            <img src={Burger} alt="" />
                                        </div>
                                        <div className='product-name-quantity Product-Name-Quantity Flex-Center Flex-Column'>
                                            <h1>Crunch Grillhouse</h1>
                                            <Quantity/>
                                        </div>
                                        <div className='product-price'>
                                            <h1>$40.00</h1>
                                        </div>
                                    </div>
                                    <div className='product-remove'>
                                        <div className='Icon-Bg Danger'>
                                            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div className='Cart-Footer Flex-Center Flex-Column Flex-SpaceBetween'>
                            <div className='Flex-Center Flex-SpaceBetween'>
                                <h1>Subtotal</h1>
                                <h1>$84.50</h1>
                            </div>
                            <hr/>
                            <div className='Flex-Center Flex-SpaceBetween'>
                                <a href="/cart">
                                    <button className='Cart'>View Cart</button>
                                </a>
                                <a href="/checkout">
                                    <button className='BuyNow'>Checkout</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}