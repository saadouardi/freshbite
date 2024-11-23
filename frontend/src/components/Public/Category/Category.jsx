import React from 'react';
import './Category.scss';

export const Category = ({Image, Text, Link}) => {
    return (
        <>
            <a href={Link}>
                <div className='Category'>
                    <div className='Category-Container'>
                        <div className='Image-Container'>
                            <img src={Image} alt="" />
                        </div>
                        <div className='Text-Container'>
                            <p>{Text}</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

