import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';

const Blog = () => {
    return (
        <>
        <Header/>
        <PageSection Title='Blog' Description='Now you will get to know us'/>
        <main>
            <h1>Blog</h1>
        </main>
        <Footer/>
    </>
    )
}

export default Blog;