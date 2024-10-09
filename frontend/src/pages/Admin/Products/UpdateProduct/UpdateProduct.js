import React from 'react';
import { Header } from '../../../components/Common/Header/Header';
import { Sidebar } from '../../../components/Common/Sidebar/Sidebar';
import { UpdateProductSection } from '../../../sections/Products/UpdateProduct/UpdateProduct';

const UpdateProduct = () => {

    return (
        <main>
            <Sidebar/>
            <div className='Main-Content'>
            <Header/>
                <div className="Sections">
                    <UpdateProductSection/>
                </div>
            </div>
        </main>
    );
};

export default UpdateProduct;
