import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import './About.scss';
const Faq = () => {
    return (
        <>
        <Header/>
        <PageSection Title='FAQ' Description='Now you will get to know us'/>
        <main>
            <h1>FAQ</h1>
        </main>
        <Footer/>
    </>
    )
}

export default Faq
