import React from 'react';
import { useParams } from 'react-router-dom';

export const UpdateProductSection = () => {
    const { id } = useParams();

    return (
        <section>
            <h1>Update Product</h1>
            <p>Product with id: {id}</p>
        </section>
    );
};


