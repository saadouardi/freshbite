import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import './Contact.scss';

const Contact = () => {
    return (
        <>
            <Header/>
            <PageSection Title='CONTACT' Description='Now you can reach us! do not hesitate'/>
            <main class="Contact">
                <div>
                    <form>
                        <div className='Form__Body'>
                            <div className='Input__container'>
                                <input type="text" placeholder="Full Name" id="firstName"/>
                            </div>
                            <div className='Input__container'>
                                <input type="email" placeholder="Email Address" id="email"/>
                            </div>
                            <div className='Input__container'>
                                <input type="tel" placeholder="Phone Number" id="phoneNumber"/>
                            </div>
                            <div className='Input__container'>
                                <textarea name="" id="message" cols="10" rows="10" placeholder="Message"></textarea>
                            </div>
                            <div className='Input__container'>
                                <input type="submit" value="Send Message"/>
                            </div>
                        </div>
                    </form> 
                </div>
            </main>    
            <Footer/>
        </>
    )
}
export default Contact;