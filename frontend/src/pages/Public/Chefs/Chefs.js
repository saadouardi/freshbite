import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import { Chefs } from '../../../sections/Public/Chefs/Chefs';
import './Chefs.scss';

const ChefsPage = () => {
    return (
        <>
            <Header/>
            <PageSection Title='OUR CHEFS' Description='Now you will get to know us'/>
            <main>
                <Chefs/>
            </main>
            <Footer/>
        </>
    )
}
export default ChefsPage;
