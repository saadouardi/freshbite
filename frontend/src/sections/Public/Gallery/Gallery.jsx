import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import Gallery1 from '../../../assets/images/gallery/gallery-1.jpg';
import Gallery2 from '../../../assets/images/gallery/gallery-2.jpg';
import Gallery3 from '../../../assets/images/gallery/gallery-3.jpg';
import Gallery4 from '../../../assets/images/gallery/gallery-4.jpg';
import Gallery5 from '../../../assets/images/gallery/gallery-5.jpg';
import Gallery6 from '../../../assets/images/gallery/gallery-6.jpg';
import './Gallery.scss';

export const Gallery = () => {
    return (
        <section>
            <Title Image='' Span='What' Text='Special about us'/>
            <div className='Main-Gallery'>
                <div className='Gallery Flex-Center'>
                    <div className='Gallery-Content'>
                        <img src={Gallery1} alt=""/>
                        <h1>Talented Chef</h1>
                    </div>
                    <div className='Gallery-Content'>
                        <img src={Gallery2} alt=""/>
                        <h1>Happy Faces</h1>
                    </div>
                    <div className='Gallery-Content'>
                        <img src={Gallery3} alt=""/>
                        <h1>Smooth Place</h1>
                    </div>
                    <div className='Gallery-Content'>
                        <img src={Gallery4} alt=""/>
                        <h1>Family & Friends</h1>
                    </div>
                    <div className='Gallery-Content'>
                        <img src={Gallery5} alt=""/>
                        <h1>Great Taste</h1>
                    </div>
                    <div className='Gallery-Content'>
                        <img src={Gallery6} alt=""/>
                        <h1>Delicious Food</h1>
                    </div>
                    <div className='Gallery-Content'>
                        <img src={Gallery1} alt=""/>
                        <h1>Talented Chef</h1>
                    </div>
                    <div className='Gallery-Content'>
                        <img src={Gallery2} alt=""/>
                        <h1>Happy Faces</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
