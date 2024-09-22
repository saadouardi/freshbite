import React from 'react';
import './Blog.scss';
export const Blog = ({Image,Blog,Date,Views,Comments,Profile,Name}) => {
    return (
        <>
            <div className='Blog'>
                <div className='Blog-Container'>
                    <div className='Image-Container'>
                        <div className='Image'>
                            <img src={Image} alt="" />
                        </div>

                        <div className='Blog-User-Container'>
                            <div className='Blog-Type'>
                                <p>Food</p>
                            </div>

                            <div>
                                <p><strong>{Blog}</strong></p>
                            </div>

                            <div className='Blog-Data'>
                                <li>{Date}</li>
                                <li><span>{Views}</span> Views</li>
                                <li><span>{Comments}</span> Comment</li>
                            </div>

                            <div className='User-Data-ReadMore'>
                                <div className='User-Data'>
                                    <div>
                                        <img src={Profile} alt="" />
                                    </div>
                                    <div>
                                        <p>By <span>{Name}</span></p>
                                    </div>
                                </div>

                                <button>
                                    <div className='Icon-Bg'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path></svg>
                                    </div>
                                    <p>Read More</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

