import React from 'react';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import Burger from '../../../../assets/images/menu/burgers/BeefBurger.png';
import Burger2 from '../../../../assets/images/menu/burgers/DoublePattyBurger.png';
import Burger3 from '../../../../assets/images/menu/burgers/SizzleSnapBurgers.png';
import './Cart.scss';
const Cart = () => {
    return (
        <>
            <Header/>
            <PageSection Title='Cart'/>
            <main className='Cart'>
                <div className='Main-Cart Flex-Center'>
                    <div className='Cart-Table'>
                        <table>
                            <thead>
                                <tr key="">
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>SUBTOTAL</th>
                                </tr>                              
                            </thead>
                            <tbody>
                                <tr key="">
                                    <td className='Flex-Center'>
                                        <button className='Danger'>X</button>
                                        <img src={Burger} alt="" />
                                        <h1>Crunch Grillhouse Burger</h1>
                                    </td>
                                    <td>
                                        <span>$12.99</span>
                                    </td>
                                    <td>
                                        <span>2</span>
                                    </td>
                                    <td>
                                        <span>$12.99</span>
                                    </td>
                                </tr>
                                <tr key="">
                                    <td className='Flex-Center'>
                                        <button className='Danger'>X</button>
                                        <img src={Burger2} alt="" />
                                        <h1>Crunch Grillhouse Burger</h1>
                                    </td>
                                    <td>
                                        <span>$12.99</span>
                                    </td>
                                    <td>
                                        <span>2</span>
                                    </td>
                                    <td>
                                        <span>$12.99</span>
                                    </td>
                                </tr>
                                <tr key="">
                                    <td className='Flex-Center'>
                                        <button className='Danger'>X</button>
                                        <img src={Burger3} alt="" />
                                        <h1>Crunch Grillhouse Burger</h1>
                                    </td>
                                    <td>
                                        <span>$12.99</span>
                                    </td>
                                    <td>
                                        <span>2</span>
                                    </td>
                                    <td>
                                        <span>$12.99</span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr key="">
                                    <button>Continue Shopping</button>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className='Cart-Summary Primary-Container'>
                        <div>
                            <h1>ORDER SUMMARY</h1>
                            <hr/>
                        </div>
                        <div>
                            <div className='Subtotal Flex-Center Flex-SpaceBetween'>
                                <h5>SUBTOTAL</h5>
                                <p><span>$</span><span>56.00</span></p>
                            </div>
                            <div className='Flex-Center Flex-SpaceBetween'>
                                <h5>STANDARD DELIVERY</h5>
                                <p><span>$</span><span>5.00</span></p>
                            </div>
                            <div className='Flex-Center Flex-SpaceBetween'>
                                <h5>COUPON DISCOUNT</h5>
                                <p><span>-</span><span>$</span><span>56.00</span></p>
                            </div>
                            <hr/>
                        </div>
                        <div className='Flex-Center Flex-SpaceBetween'>
                            <h3>TOTAL</h3>
                            <h3><span>$</span><span>54.99</span></h3>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Cart;
