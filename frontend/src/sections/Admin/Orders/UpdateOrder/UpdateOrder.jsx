import React from 'react';
import { useParams } from 'react-router-dom';

export const UpdateOrderSection = () => {
    const { id } = useParams();

    return (
        <section>
            <h1>Update Order</h1>
            <p>Order with id: {id}</p>
        </section>
    );
};


