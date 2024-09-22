import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import './Contact.scss';

export const Contact = () => {
    return (
        <>
            <Header/>
            <main class="Contact">
                <PageSection Title='CONTACT' Description='Now you can reach us! do not hesitate'/>
                <div>
                    <form>
                        <div className='Form__Header'>
                            <h1>Contact Us</h1>
                            <h3>Get in touch with us!</h3>
                        </div>
                        <div className='Form__Body'>
                            <div className='Input__container'>
                                <input type="text" placeholder="First Name" id="firstName"/>
                                <input type="text" placeholder="Last Name" id="lastName"/>
                            </div>
                            <div className='Input__container'>
                                <input type="email" placeholder="Email Address" id="email"/>
                            </div>
                            <div className='Input__container'>
                                <input type="tel" placeholder="Phone Number" id="phoneNumber"/>
                            </div>
                            <div className='Input__container'>
                                <input type="text" placeholder="Subject" id="subject"/>
                            </div>

                            <div className='Input__container'>
                                <textarea name="" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>

                            <div className='Input__container'>
                                <input type="submit" value="Send"/>
                            </div>
                        </div>
                    </form> 
                </div>
            </main>    
        </>
    )
}

