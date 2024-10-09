import React ,{useState , useEffect } from 'react';
import { Table } from '../../components/Common/Table/Table';
import { Update , Delete } from '../../components/Common/Table/ActionButtons/ActionButtons';

import './Orders.scss';

export const OrdersSection = () => {

    const [Orders, setOrders] = useState([]);
    
        useEffect(() => {
            fetchOrders();
        }, []);
    
        const fetchOrders = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/orders');
                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }
                const data = await response.json();
                setOrders(data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
    
    const HeaderTitles = [
        'ID',
        'User ID',
        'Total Amount',
        'Status',
        'Order Date'
    ];
    const RowTitles = Orders.map(order => ({
        id: order.id.toString(),
        userID: order.user_id,
        totalAmount: `$${order.total_amount.toFixed(2)}`,
        orderStatus: order.status,
        orderDate: order.order_date,
        edit : <Update id={order.id.toString()}/>,
        delete : <Delete id={order.id.toString()} ItemImage='' ItemName=''/>
    }));
    

    return (
        <section className='Flex-Column'>
            <div className='Title-Section'>
                <h1>ORDERS</h1>
            </div>
            <div className='Content-Section'>
                <Table NumofRows={HeaderTitles.length} HeaderTitles={HeaderTitles} RowTitles={RowTitles} />
            </div>
        </section>
    );
};

