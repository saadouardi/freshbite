import React, { useState } from 'react';
import { Product } from '../../../../components/Admin/Product/Product';
import './AddProduct.scss';

export const AddProductSection = () => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productCurrency, setProductCurrency] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleProductName = (e) => {
        setProductName(e.target.value);
    }
    const handleProductCategory = (e) => {
        setProductCategory(e.target.value);
    }
    const handleProductCurrency = (e) => {
        setProductCurrency(e.target.value);
    }
    const handleProductPrice = (e) => {
        setProductPrice(e.target.value);
    }
    const handleProductQuantity = (e) => {
        setProductQuantity(e.target.value);
    }
    const handleProductImage = (e) => {
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
            setProductImage(URL.createObjectURL(uploadedImage));
        }
    }
    const handleFormValidation = () => {
        if(productName && productCategory && productCurrency && productPrice && productQuantity && productImage){
            return true;
        }
        return false;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('category', productCategory);
        formData.append('currency', productCurrency);
        formData.append('quantity', productQuantity);
        formData.append('price', productPrice);
        formData.append('image', productImage);

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
        <section className='add-product'>
            <div className='add-product-form'>
                <div className='add-product-header'>
                    <h1 editable>Add product form</h1>
                </div>
                <div className='add-product-content'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Product Name'
                            onChange={handleProductName}
                        />
                        <select name='category' onChange={handleProductCategory}>
                            <option value='category' disabled>Category</option>
                            <option value='burgers'>Burgers</option>
                            <option value='pizzas'>Pizzas</option>
                            <option value='pastas'>Pastas</option>
                            <option value='drinks'>Drinks</option>
                            <option value='salads'>Salads</option>
                            <option value='sandwish'>Sandwish</option>
                            <option value='chicken'>Chicken</option>
                        </select>
                        <select name='currency' onChange={handleProductCurrency}>
                            <option value='$'>USD</option>
                            <option value='€'>EUR</option>
                            <option value='CHF'>CHF</option>
                        </select>
                        <input
                            type='number'
                            name='quantity'
                            placeholder='01'
                            onChange={handleProductQuantity}
                        />
                        <input
                            type='number'
                            name='price'
                            placeholder='$10'
                            onChange={handleProductPrice}
                        />
                        <input 
                            type='file' 
                            name='image' 
                            onChange={handleProductImage} 
                        />
                        <button type='submit' className='btn btn-dark' disabled={!handleFormValidation()}>Add Item</button>
                    </form>
                </div>
            </div>
            <div className='show-product-container'>
                <div className='show-product-header'>
                    <h1>Product</h1>
                </div>
                <div className='show-product-content'>
                    <Product
                        Image={productImage} 
                        Name={productName} 
                        Category={productCategory}
                        Currency={productCurrency} 
                        Price={productPrice}
                    />
                </div>
            </div>
        </section>
    );
};
