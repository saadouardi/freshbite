import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';

const Testimonial = () => {
    return (
        <>
            <Header/>
            <PageSection Title='About us' Description='Now you will get to know us'/>
            <main>
                <h1>Testimonial</h1>
            </main>
            <Footer/>
        </>
    )
}

export default Testimonial;