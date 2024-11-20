import React from 'react';
import { Header } from '../../../../components/Admin/Common/Header/Header';
import { Sidebar } from '../../../../components/Admin/Common/Sidebar/Sidebar';
import { AddProductSection } from '../../../../sections/Admin/Products/AddProduct/AddProduct';

import './AddProduct.scss';

const AddProduct = () => {

    return (
        <div className='admin-page'>
            <aside className='admin'>
                <Sidebar/>
            </aside>
            <main className='admin'>
                <Header/>
                <div className='Flex-Center'>
                    <div className=''>
                        <AddProductSection/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddProduct;
