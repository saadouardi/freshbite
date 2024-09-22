import React from 'react';
import './Contact.scss';

export const Contact = ({Href,Icon,Name,Detail}) => {
    return (
        <>
            <div class="contact-card_container">
                <a href={Href}>
                    <div class="contact-card">
                        {Icon}
                        <h3>{Name}</h3>
                    </div>
                    <div class="contact-details__container">
                        <h5 class="contact-details">{Detail}</h5>    
                    </div>
                </a>
            </div>
        </>
    )
}

