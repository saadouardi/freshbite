import React, { useState } from 'react';
import './AddOrder.scss';

export const AddOrderSection = () => {
    const [product, setProduct] = useState({
        name: '',
        category: 'fruit',
        currency: 'usd',
        quantity: 1,
        price: 0,
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            image: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('category', product.category);
        formData.append('currency', product.currency);
        formData.append('quantity', product.quantity);
        formData.append('price', product.price);
        formData.append('image', product.image);

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            const data = await response.json();
            console.log('Product added:', data);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <section className='AddProduct'>
            <div className='AddProduct-Content'>
                <div className='AddProduct-Header'>
                    <h1>Add Product</h1>
                    <hr />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='Input-Container'>
                        <label>Product Name</label>
                        <input
                            type='text'
                            name='name'
                            placeholder='Product Name'
                            value={product.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Input-Container'>
                        <label>Select Category</label>
                        <select name='category' value={product.category} onChange={handleChange}>
                            <option value='fruit'>Fruit</option>
                            <option value='vegetables'>Vegetables</option>
                            <option value='meat'>Meat</option>
                        </select>
                    </div>
                    <div className='Input-Container'>
                        <label>Currency</label>
                        <select name='currency' value={product.currency} onChange={handleChange}>
                            <option value='usd'>USD</option>
                            <option value='eur'>EUR</option>
                            <option value='chf'>CHF</option>
                        </select>
                    </div>
                    <div className='Input-Container'>
                        <label>Quantity</label>
                        <input
                            type='number'
                            name='quantity'
                            placeholder='01'
                            value={product.quantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Input-Container'>
                        <label>Price</label>
                        <input
                            type='number'
                            name='price'
                            placeholder='$10'
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='Input-Container'>
                        <label>Product Image</label>
                        <input type='file' name='image' onChange={handleImageChange} />
                    </div>
                    <div className='Input-Container'>
                        <button type='submit' className='Add-Btn'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
