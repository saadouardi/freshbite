import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import './About.scss';
const PrivacyPolicy = () => {
    return (
        <>
        <Header/>
        <PageSection Title='Privacy Policy' Description='Now you will get to know us'/>
        <main>
            <h1>Privacy Policy</h1>
        </main>
        <Footer/>
    </>
    )
}

export default PrivacyPolicy