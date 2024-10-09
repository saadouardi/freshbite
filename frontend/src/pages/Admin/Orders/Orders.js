import React  from 'react';
import { Header } from '../../components/Common/Header/Header';
import { Sidebar } from '../../components/Common/Sidebar/Sidebar';
import { OrdersSection } from '../../sections/Orders/Orders';
import './Orders.scss';

const Orders = () => {

    return (
        <main>
            <Sidebar/>
            <div className='Main-Content'>
            <Header/>
                <div className="Sections">
                    <OrdersSection/>
                </div>
            </div>
        </main>
    );
};

export default Orders;

