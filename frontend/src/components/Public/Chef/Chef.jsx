import React from 'react';
import Facebook from '../../../assets/Icons/SocialMedia/facebook.png';
import Instagram from '../../../assets/Icons/SocialMedia/instagram.png';
import Twitter from '../../../assets/Icons/SocialMedia/twitter.png';
import Linkedin from '../../../assets/Icons/SocialMedia/linkedin.png';
import './Chef.scss';
export const Chef = ({Image, Name, Position, FacebookUrl, LinkedInUrl, InstagramUrl, TwitterUrl}) => {
    return (
        <>
            <div class="Chef">
                <div className='ChefImg'>
                    <img src={Image} alt=""/>
                </div>
                <div className='ChefInfo'>
                    <h3>{Name}</h3>
                    <p>{Position}</p>
                </div>
                <div class="ChefSocialMedia">
                    <div className="SocialMedia_List Flex-Center">
                        <a href={FacebookUrl} target='blank'>
                            <img src={Facebook} alt="" />
                        </a>
                        <a href={InstagramUrl} target='blank'>
                            <img src={Instagram} alt="" />
                        </a>
                        <a href={TwitterUrl} target='blank'>
                            <img src={Twitter} alt="" />
                        </a>
                        <a href={LinkedInUrl} target='blank'>
                            <img src={Linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

