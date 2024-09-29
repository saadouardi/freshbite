import Facebook from '../../../../assets/Icons/SocialMedia/facebook.png';
import Instagram from '../../../../assets/Icons/SocialMedia/instagram.png';
import Twitter from '../../../../assets/Icons/SocialMedia/twitter.png';
import Linkedin from '../../../../assets/Icons/SocialMedia/linkedin.png';
import { Logo } from '../Logo/Logo';
import './Footer.scss';

export const Footer = () => {
    return(
        <footer>
            <div className="Menus_List">
                <div className='Menus_Content Flex-Center'>
                    <div className='Menus'>
                        <div className='Menu'>
                            <Logo/>
                            <div>
                                <p>
                                    Restaurants know the importance of a strong first,<br/>
                                    impression It's why they invest in exterior design<br/>
                                    design, decorate decorate their<br/>
                                </p>
                            </div>
                            <div className="SocialMedia">
                                <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                                    <img src={Facebook} alt="" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                                    <img src={Instagram} alt="" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                                    <img src={Twitter} alt="" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100057417619551" target='blank'>
                                    <img src={Linkedin} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="Menu">
                            <h5>
                                <u className="underline">LINKS</u> 
                            </h5>                    
                            <ul>
                                <li>
                                    <a href="/">HOME</a>
                                </li>
                                <li>
                                    <a href="/menu">MENU</a>
                                </li>
                                <li>
                                    <a href="/blog">BLOG</a>
                                </li>
                                <li>
                                    <a href="/about">ABOUT</a>
                                </li>
                                <li>
                                    <a href="/contact">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Menu">
                            <h5><u>GET HELP</u> </h5>
                            <ul>
                                <li>
                                    <a href="/faq">FAQ</a>
                                </li>
                                <li>
                                    <a href="/">PRIVACY POLICY</a>
                                </li>
                                <li>
                                    <a href="/">TERMS & CONDITIONS</a>
                                </li>
                                <li>
                                    <a href="/order/tracking">ORDER STATUS</a>
                                </li>
                                <li>
                                    <a href="/">PAYMENT OPTIONS</a>
                                </li>
                            </ul>
                        </div>                
                        <div className="Menu">
                            <h5><u>REACH US</u></h5>
                            <ul>
                                <li>
                                    <a href="/contact">CONTACT US</a>
                                </li>
                                <li>
                                    <a href="/emailus">EMAIL US</a>
                                </li>
                                <li>
                                    <a href="/liveagent">LIVE EGENT</a>
                                </li>
                                <li>
                                    <a href="callus">CALL US</a>
                                </li>
                                <li>
                                    <a href="/contact">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Menu">
                            <h5><u>CONTACT</u></h5>
                            <ul>
                                <li>
                                    <a href="call:">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>
                                        <span>(+49) 15 216 422 700</span>
                                    </a>

                                </li>
                                <li>
                                    <a href="emailto:info@freshfood.com">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg>
                                        <span>info@freshfood.com</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/location">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
                                        <span>2900 Lapeer Rd, Port Hurons</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Copyright Flex-Center">
                <p><strong>&copy;2024 FreshFood, Inc. All rights reserved.</strong></p>
            </div>
        </footer>
    )
}