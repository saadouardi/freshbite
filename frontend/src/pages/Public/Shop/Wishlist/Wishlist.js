import React from 'react';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import { Quantity } from '../../../../components/Public/Shop/Quantity/Quantity';
import Burger from '../../../../assets/images/menu/burgers/BeefBurger.png';
import Burger2 from '../../../../assets/images/menu/burgers/BurgerIngredient.png';
import Burger3 from '../../../../assets/images/menu/burgers/CheeseBurger.png';
const Wishlist = () => {
    return (
        <>
            <Header/>
            <PageSection Title='Wishlist'/>
            <main>
                <table>
                    <thead>
                        <tr key="">
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>STOCK STATUS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="1">
                            <td>
                                <div className='Flex-Center'>
                                    <img src={Burger} alt="" />
                                    <h1>Crunch Burger</h1>
                                </div>
                            </td>
                            <td>
                                <Quantity/>
                            </td>
                            <td>
                                <div className='Flex-Center'>
                                    <p>$25.99</p>
                                    <p><del>$29.99</del></p>
                                </div>
                            </td>
                            <td>
                                <p><span>188</span> in stock</p>
                            </td>
                            <td>
                                <div className='Flex-Center'>
                                    <div className='Icon-Bg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                                    </div>
                                    <button>Add To Cart</button>
                                    <div className='Icon-Bg Danger'>
                                        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr key="2">
                            <td>
                                <div className='Flex-Center'>
                                    <img src={Burger2} alt="" />
                                    <h1>Cheese Burger</h1>
                                </div>
                            </td>
                            <td>
                                <Quantity/>
                            </td>
                            <td>
                                <div className='Flex-Center'>
                                    <p>$25.99</p>
                                    <p><del>$29.99</del></p>
                                </div>
                            </td>
                            <td>
                                <p><span>188</span> in stock</p>
                            </td>
                            <td>
                                <div className='Flex-Center'>
                                    <div className='Icon-Bg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                                    </div>
                                    <button>Add To Cart</button>
                                    <div className='Icon-Bg Danger'>
                                        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr key="3">
                            <td>
                                <div className='Flex-Center'>
                                    <img src={Burger3} alt="" />
                                    <h1>Chicken Burger</h1>
                                </div>
                            </td>
                            <td>
                                <Quantity/>
                            </td>
                            <td>
                                <div className='Flex-Center'>
                                    <p>$25.99</p>
                                    <p><del>$29.99</del></p>
                                </div>
                            </td>
                            <td>
                                <p><span>188</span> in stock</p>
                            </td>
                            <td>
                                <div className='Flex-Center'>
                                    <div className='Icon-Bg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                                    </div>
                                    <button>Add To Cart</button>
                                    <div className='Icon-Bg Danger'>
                                        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <Footer/>
        </>
    )
}

export default Wishlist;
