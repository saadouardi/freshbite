import React from 'react';
import { Header } from '../../../components/Admin/Common/Header/Header';
import { Sidebar } from '../../../components/Admin/Common/Sidebar/Sidebar';
import { ProductsSection } from '../../../sections/Admin/Products/Products';
import './Products.scss';

const Products = () => {

    return (
        <div className='admin-page'>
            <aside className='admin'>
                <Sidebar/>
            </aside>
            <main className='admin'>
                <Header/>
                <div className='Flex-Center'>
                    <div className=''>
                        <ProductsSection/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Products;

