import React from 'react';
import { Header } from '../../components/Common/Header/Header';
import { Sidebar } from '../../components/Common/Sidebar/Sidebar';
import './Store.scss';

const Store = () => {
    return (
        <main>
            <Sidebar/>
            <div className='Main-Content'>
            <Header/>
                <div className="Sections">
                    <h1>Store</h1>
                </div>
            </div>
        </main>
    );
};

export default Store;

