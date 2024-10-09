import React from 'react';
import { Header } from '../../components/Common/Header/Header';
import { Sidebar } from '../../components/Common/Sidebar/Sidebar';
import { RevenuesSection } from '../../sections/Revenues/Revenues';
import './Revenue.scss';

const Revenues = () => {
    return (
        <main>
            <Sidebar/>
            <div className='Main-Content'>
            <Header/>
                <div className="Sections">
                    <RevenuesSection/>
                </div>
            </div>
        </main>
    );
};

export default Revenues;

