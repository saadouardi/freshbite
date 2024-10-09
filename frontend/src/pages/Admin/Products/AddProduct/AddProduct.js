import React from 'react';
import { Header } from '../../../components/Common/Header/Header';
import { Sidebar } from '../../../components/Common/Sidebar/Sidebar';
import { AddProductSection } from '../../../sections/Products/AddProduct/AddProduct';
import './AddProduct.scss';

const AddProduct = () => {

    return (
        <main>
            <Sidebar/>
            <div className='Main-Content'>
            <Header/>
                <div className="Sections">
                    <AddProductSection/>
                </div>
            </div>
        </main>
    );
};

export default AddProduct;
