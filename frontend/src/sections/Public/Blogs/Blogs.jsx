import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import { Blog } from '../../../components/Public/Blog/Blog';
import Profile1 from '../../../assets/images/chef/Chef1.png';
import Profile2 from '../../../assets/images/chef/Chef2.png';
import Profile3 from '../../../assets/images/chef/Chef3.png';
import Blog1 from '../../../assets/images/blog/blog_1.png';
import Blog2 from '../../../assets/images/blog/blog_2.png';
import Blog3 from '../../../assets/images/blog/blog_3.png';
import './Blogs.scss';

export const Blogs = () => {
    return (
        <section>
            <Title Image='' Span='Our Dynamic' Text='Recent Blogs'/>
            <div>
                <div className='Flex-Center'>
                    <Blog 
                        Image={Blog1}
                        Blog='Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...' 
                        Date='November 10, 2024' 
                        Views='560' 
                        Comments='2' 
                        Profile={Profile1} 
                        Name='Emily'
                    />
                    <Blog 
                        Image={Blog2}
                        Blog='Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...' 
                        Date='November 10, 2024' 
                        Views='560' 
                        Comments='2' 
                        Profile={Profile2} 
                        Name='Adrian'
                    />
                    <Blog 
                        Image={Blog3}
                        Blog='Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod...' 
                        Date='November 10, 2024' 
                        Views='560' 
                        Comments='2' 
                        Profile={Profile3} 
                        Name='Tom'
                    />
                </div>
            </div>
        
        </section>
    )
}

