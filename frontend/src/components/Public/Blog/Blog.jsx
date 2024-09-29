import React from 'react';
import './Blog.scss';

export const Blog = ({Image,Blog,Date,Views,Comments,Profile,Name}) => {
    return (
        <>
            <div className='Blog'>
                <div className='Blog-Content Flex-Center Flex-Column'>
                    <div className='Image'>
                        <img src={Image} alt="" />
                    </div>
                    <div className='Blog-User-Container'>
                        <div className='Blog-Title'>
                            <h1>
                                <strong>Healthy food and nutrition among all the children</strong>
                            </h1>
                        </div>
                        <div className='Blog-Comment'>
                            <p>{Blog}</p>
                        </div>
                        <div className='Flex-Center Flex-SpaceBetween'>
                            <div className='User-Data Flex-Center'>
                                <img src={Profile} alt="" className='Profile' />
                                <p>{Name}</p>
                            </div>
                            <div className='Blog-Date'>
                                <p>{Date}</p>
                            </div>
                            <button>
                                <div className='Icon-Bg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path></svg>
                                </div>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

