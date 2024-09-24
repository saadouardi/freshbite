import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import { Products } from '../../../sections/Public/Shop/Products/Products';
import { Categories } from '../../../sections/Public/Categories/Categories';
import { Stats } from '../../../sections/Public/Stats/Stats';
import { Chefs } from '../../../sections/Public/Chefs/Chefs';
import { SpecialDeals } from '../../../sections/Public/SpecialDeals/SpecialDeals';
import { Blogs } from '../../../sections/Public/Blogs/Blogs';
import { Gallery } from '../../../sections/Public/Gallery/Gallery';
import { Book } from '../../../sections/Public/Book/Book';

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <Products/>
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
export default Home;

