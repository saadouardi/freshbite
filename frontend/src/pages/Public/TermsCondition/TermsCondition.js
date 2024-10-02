import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import './About.scss';
const TermsCondition = () => {
    return (
        <>
        <Header/>
        <PageSection Title='Terms Condition' Description='Now you will get to know us'/>
        <main>
            <h1>Terms Condition</h1>
        </main>
        <Footer/>
    </>
    )
}

export default TermsCondition;
