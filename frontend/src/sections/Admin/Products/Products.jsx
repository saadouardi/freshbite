import React ,{useState , useEffect } from 'react';
import { Table } from '../../components/Common/Table/Table';
import { Update , Delete } from '../../components/Common/Table/ActionButtons/ActionButtons';
import './Products.scss';

export const ProductsSection = () => {

    const [products, setProducts] = useState([]);
    
        useEffect(() => {
            fetchProducts();
        }, []);
    
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products'); // Replace with your actual backend API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data); // Assuming data is an array of products fetched from your backend
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
    
    const HeaderTitles = [
        'ID',
        'Image',
        'Name',
        'Description',
        'Price',
        'Quantity',
        'Category ID',
        'Edit',
        'Delete'   
    ];
    const RowTitles = products.map(product => ({
        id: product.id.toString(),
        image: product.image,
        name: product.name,
        description: product.description,
        price: `$${product.price.toFixed(2)}`,
        quantity: product.quantity.toString(),
        category_id: product.category_id.toString(),
        edit: <Update id={product.id.toString()} />,
        delete: <Delete id={product.id.toString()} ItemImage={product.image} ItemName={product.name} />,
    }));

    return (
        <section className='Flex-Column'>
            <div className='Title-Section'>
                <h1>PRODUCTS</h1>
            </div>
            <div className='Content-Section'>
                <Table NumofRows={HeaderTitles.length} HeaderTitles={HeaderTitles} RowTitles={RowTitles} />
            </div>
        </section>
    );
};

