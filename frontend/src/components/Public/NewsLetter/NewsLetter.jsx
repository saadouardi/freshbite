import React from 'react';
import './NewsLetter.scss';

export const NewsLetter = () => {
    return (
        <>
            <div className='Newsletter'>
                <h2><u>NEWSLETTER</u></h2>
                <h1>Subscribe our newsletter to stay updated every moment</h1>
                <div className="newsletter__div">
                    <input type="text" className="newsletter__input" placeholder="Enter a valid email address..."/>
                    <button type="submit" className="subscrive__button">SUBSCRIBE</button>
                </div>
            </div>
        </>
    )
}