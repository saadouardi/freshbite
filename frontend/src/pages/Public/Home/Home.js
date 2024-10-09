import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { Footer } from '../../../components/Public/common/Footer/Footer';
import { Products } from '../../../sections/Public/Shop/Products/Products';
import { Categories } from '../../../sections/Public/Categories/Categories';
import { Stats } from '../../../sections/Public/Stats/Stats';
import { Chefs } from '../../../sections/Public/Chefs/Chefs';
import { SpecialDeals } from '../../../sections/Public/SpecialDeals/SpecialDeals';
import { Promotion } from '../../../sections/Public/Promotion/Promotion';
import { Blogs } from '../../../sections/Public/Blogs/Blogs';
import { NewsLetter } from '../../../sections/Public/NewsLetter/NewsLetter';
import { Gallery } from '../../../sections/Public/Gallery/Gallery';
import { Book } from '../../../sections/Public/Book/Book';
import ProductSlider from '../../../components/Public/Slider/Slider';

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                {/* <ProductSlider/> */}
                <Products/>
                <Categories/>
                <Stats/>
                <SpecialDeals/>
                <Chefs/>
                <Promotion/>
                <Blogs/>
                <NewsLetter/>
                {/* <Gallery/> */}
                {/* <Book/> */}
            </main>
            <Footer/>
        </>
    )
}
export default Home;

