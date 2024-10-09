import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { PageSection } from '../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import { Blogs } from '../../../sections/Public/Blogs/Blogs';
const Blog = () => {
    return (
        <>
        <Header/>
        <PageSection Title='BLOG' Description='Now you will get to know us'/>
        <main>
            <Blogs/>
        </main>
        <Footer/>
    </>
    )
}

export default Blog;