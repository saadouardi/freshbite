import React, { useState, useEffect } from 'react';
import { Statistic } from '../../../components/Admin/Statistic/Statistic';
import './Statistics.scss';

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"></path></svg>
);
const ProductsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.99805 4V11L11.998 8.5L16.998 11V4H19.998C20.5503 4 20.998 4.44772 20.998 5V21C20.998 21.5523 20.5503 22 19.998 22H3.99805C3.44576 22 2.99805 21.5523 2.99805 21V5C2.99805 4.44772 3.44576 4 3.99805 4H6.99805ZM11.998 8L7.49805 3H16.498L11.998 8ZM12.998 11.2361L11.998 10.7361L10.998 11.2361V20H12.998V11.2361ZM14.998 14V16H18.998V14H14.998Z"></path></svg>
);
const OrderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>
);
const RevenueIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path></svg>
);

export const Statistics = () => {

    const [userCount, setUserCount] = useState('--');
    const [productCount, setProductCount] = useState('--');
    const [ordersCount, setOrdersCount] = useState('--');
    const [revenuesCount, setRevenuesCount] = useState('--');
    useEffect(() => {
        fetch('http://localhost:5000/api/users/count')
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch user count');
            }
            return response.json();
        })
        .then(data => {
            setUserCount(data.user_count);
        })
        .catch(error => {
            console.error('Error fetching user count:', error);
            setUserCount('Error');
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/api/products/count')
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch product count');
            }
            return response.json();
        })
        .then(data => {
            setProductCount(data.products_count);
        })
        .catch(error => {
            console.error('Error fetching product count:', error);
            setProductCount('Error');
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/api/orders/count')
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch order count');
            }
            return response.json();
        })
        .then(data => {
            setOrdersCount(data.orders_count);
        })
        .catch(error => {
            console.error('Error fetching order count:', error);
            setOrdersCount('Error');
        });
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/api/revenues/count')
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch revenue count');
            }
            return response.json();
        })
        .then(data => {
            setRevenuesCount(data.total_revenue);
        })
        .catch(error => {
            console.error('Error fetching revenue count:', error);
            setRevenuesCount('Error');
        });
    }, []);

    return (
        <section className='Statistics Flex-Center Flex-Row'>
                <Statistic Icon={UsersIcon} Title="Users" Statistic={userCount} Link="/users" BgColor="rgb(255, 80, 80)" />
                <Statistic Icon={ProductsIcon} Title="Products" Statistic={productCount} Link="/products" BgColor="blue" />
                <Statistic Icon={OrderIcon} Title="Orders" Statistic={ordersCount} Link="/orders" BgColor="orange" />
                <Statistic Icon={RevenueIcon} Title="Revenue" Statistic={revenuesCount} Link="/revenues" BgColor="green" />
        </section>
    )
}

