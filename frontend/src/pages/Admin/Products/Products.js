import React from 'react';
import { Header } from '../../components/Common/Header/Header';
import { Sidebar } from '../../components/Common/Sidebar/Sidebar';
import { ProductsSection } from '../../sections/Products/Products';
import './Products.scss';

const Products = () => {

    return (
        <main>
            <Sidebar/>
            <div className='Main-Content'>
            <Header/>
                <div className="Sections">
                    <ProductsSection/>
                </div>
            </div>
        </main>
    );
};

export default Products;

