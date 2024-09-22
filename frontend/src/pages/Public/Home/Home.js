import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import { Dishes } from '../../../sections/Public/Dishes/Dishes';
import { Categories } from '../../../sections/Public/Categories/Categories';
import { Stats } from '../../../sections/Public/Stats/Stats';
import { Chefs } from '../../../sections/Public/Chefs/Chefs';
import { SpecialDeals } from '../../../sections/Public/SpecialDeals/SpecialDeals';
import { Blogs } from '../../../sections/Public/Blogs/Blogs';
import { Gallery } from '../../../sections/Public/Gallery/Gallery';
import { Book } from '../../../sections/Public/Book/Book';

export const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Dishes/>
                <Categories/>
                <Stats/>
                <SpecialDeals/>
                <Chefs/>
                <Blogs/>
                <Gallery/>
                <Book/>
            </main>
            <Footer/>
        </>
    )
}

