import React ,{useState , useEffect } from 'react';
import { Table } from '../../components/Common/Table/Table';
import './Revenue.scss';

export const RevenuesSection = () => {

    const [Revenues, setRevenues] = useState([]);
    
        useEffect(() => {
            fetchRevenues();
        }, []);
    
        const fetchRevenues = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/revenues');
                if (!response.ok) {
                    throw new Error('Failed to fetch revenues');
                }
                const data = await response.json();
                setRevenues(data);
            } catch (error) {
                console.error('Error fetching revenues:', error);
            }
        };
    
    const HeaderTitles = [
        'ID',
        'Order ID',
        'Revenue',
        'Order Date'
    ];
    const RowTitles = Revenues.map(revenue => ({
        id: revenue.id.toString(),
        orderID: revenue.order_id,
        Revenue: `$${revenue.revenue.toFixed(2)}`,
        orderDate: revenue.created_at,
    }));

    return (
        <section className='Flex-Column'>
            <div className='Title-Section'>
                <h1>Revenues</h1>
            </div>
            <div className='Content-Section'>
                <Table NumofRows={HeaderTitles.length} HeaderTitles={HeaderTitles} RowTitles={RowTitles} />
            </div>
        </section>
    );
};


