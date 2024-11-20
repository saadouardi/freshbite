import React from 'react';
import { Header } from '../../../../components/Admin/Common/Header/Header';
import { Sidebar } from '../../../../components/Admin/Common/Sidebar/Sidebar';
// import { UpdateProductSection } from '../../../sections/Products/UpdateProduct/UpdateProduct';

const UpdateProduct = () => {

    return (
        <div className='admin-page'>
            <aside className='admin'>
                <Sidebar/>
            </aside>
            <main className='admin'>
                <Header/>
                <div className='Flex-Center'>
                    <div className=''>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UpdateProduct;
