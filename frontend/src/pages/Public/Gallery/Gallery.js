import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Gallery } from '../../../sections/Public/Gallery/Gallery';
import './Gallery.scss';

export const GalleryPage = () => {
    return (
        <>
            <Header/>
            <PageSection Title='Gallery' Description='What Special about us'/>
            <div className='Gellery'>
                <Gallery/>
            </div>
        </>
    )
}

