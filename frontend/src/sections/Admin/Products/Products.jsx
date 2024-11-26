import React , {useState , useEffect } from 'react';
import { Table } from '../../../components/Admin/Common/Table/Table';
import './Products.scss';

export const ProductsSection = () => {

    const [products, setProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(false);

    const handleDeleteProduct = () => {
        setDeleteProduct(true);
    }

    const handleCancel = () => {
        setDeleteProduct(false);
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);


    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            setProducts(products.filter(product => product.id !== id));
            window.location.reload();
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product.');
        }
    };

    const handleEdit = (id) => {
        window.location.href = `/product-edit/${id}`;
    };
    
    const HeaderTitles = [
        'Product ID',
        'Category ID',
        'Product Name',
        'Status',
        'Price',
        'Edit',
        'Delete'   
    ];

    const handleQunatity = (item) => {
        if(item > 0){
            return 'In stock';
        }else{
            return 'Out of stock';
        }
    }

    const RowTitles = products.map(product => ({
        id: product.id.toString(),
        category_id: product.category_id.toString(),
        name: product.name,
        quantity: handleQunatity(product.quantity.toString()),
        price: `$${product.price}`,
        edit: (
            <button 
                className="btn btn-primary" 
                onClick={() => handleEdit(product.id)}
            >
                Edit
            </button>
        ),
        delete: (
            <>
                <button className="btn btn-danger" onClick={handleDeleteProduct}>Delete</button>
                {deleteProduct &&
                    <div className='lightbox'>
                        <div>
                            <h1>Delete Product</h1>
                        </div>
                        <div>
                            <h2>Are you sure you want to delete <span>{product.name}</span></h2>
                        </div>
                        <div className='flex-center-center'>
                            <button 
                                className='btn btn-light' 
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            
                            <button 
                                className="btn btn-danger" 
                                onClick={() => handleDelete(product.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                }
            </>
        )
    }));

    return (
        <section className='Flex-Column'>
            <div className='Title-Section'>
                <h1>PRODUCTS</h1>
            </div>
            <div className=''>
                <a href="add-product">
                    <button className='btn btn-success'>Add product</button>
                </a>
            </div>
            {products.length > 0 ? (
                <div className='Content-Section'>
                    <Table NumofRows={HeaderTitles.length} HeaderTitles={HeaderTitles} RowTitles={RowTitles} />
                </div>
                ) : (
                    <div>
                        No products found!
                    </div>
                )
            }
        </section>
    );
};