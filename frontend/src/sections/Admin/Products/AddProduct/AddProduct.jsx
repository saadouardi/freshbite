import React, { useState } from 'react';
import { Product } from '../../../../components/Admin/Product/Product';
import './AddProduct.scss';

export const AddProductSection = () => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCurrency, setProductCurrency] = useState('$');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [productPreview, setProductPreview] = useState(null);

    const handleProductImage = (e) => {
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            setProductImage(uploadedImage); // Use the actual file for upload
            setProductPreview(URL.createObjectURL(uploadedImage)); // For preview only
        }
    };

    const handleFormValidation = () => {
        return (
            productName &&
            // productCategory &&
            productDescription &&
            productPrice > 0 &&
            productQuantity > 0 &&
            productImage
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice);
        formData.append('quantity', productQuantity);
        formData.append('category_id', 5); // to change
        formData.append('image_url', productImage);

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
            // Optionally reset the form
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <section className='add-product'>
            <div className='add-product-form'>
                <div className='add-product-header'>
                    <h1>Add Product Form</h1>
                </div>
                <div className='add-product-content'>
                    <form onSubmit={handleSubmit}>
                        {/* <select
                            name='category'
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        >
                            <option value='' disabled>
                                Select Category
                            </option>
                            <option value='burgers'>Burgers</option>
                            <option value='pizzas'>Pizzas</option>
                            <option value='pastas'>Pastas</option>
                            <option value='drinks'>Drinks</option>
                            <option value='salads'>Salads</option>
                            <option value='sandwiches'>Sandwiches</option>
                            <option value='chicken'>Chicken</option>
                        </select> */}
                        <input
                            type='text'
                            placeholder='Product Name'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder='Product Description'
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            required
                        />
                        <input
                            type='number'
                            name='price'
                            placeholder='Price (e.g., 10)'
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            required
                            min='0.01'
                            step='0.01'
                        />
                        <input
                            type='number'
                            name='quantity'
                            placeholder='Quantity (e.g., 1)'
                            value={productQuantity}
                            onChange={(e) => setProductQuantity(e.target.value)}
                            required
                            min='1'
                        />
                        <input
                            type='file'
                            name='image'
                            accept='image/*'
                            onChange={handleProductImage}
                            required
                        />
                        <button
                            type='submit'
                            className='btn btn-dark'
                            disabled={!handleFormValidation()}
                        >
                            Add Item
                        </button>
                    </form>
                </div>
            </div>
            <div className='show-product-container'>
                <div className='show-product-header'>
                    <h1>Product Preview</h1>
                </div>
                <div className='show-product-content'>
                    <Product
                        Image={productPreview}
                        Name={productName}
                        Category={productCategory}
                        Description={productDescription}
                        Currency={productCurrency}
                        Price={productPrice}
                    />
                </div>
            </div>
        </section>
    );
};


// import React, { useState } from 'react';
// import { Product } from '../../../../components/Admin/Product/Product';
// import './AddProduct.scss';

// export const AddProductSection = () => {
//     const [productName, setProductName] = useState('');
//     const [productCategory, setProductCategory] = useState('');
//     const [productCurrency, setProductCurrency] = useState('');
//     const [productPrice, setProductPrice] = useState('');
//     const [productQuantity, setProductQuantity] = useState('');
//     const [productImage, setProductImage] = useState(null);

//     const handleProductName = (e) => {
//         setProductName(e.target.value);
//     }
//     const handleProductCategory = (e) => {
//         setProductCategory(e.target.value);
//     }
//     const handleProductCurrency = (e) => {
//         setProductCurrency(e.target.value);
//     }
//     const handleProductPrice = (e) => {
//         setProductPrice(e.target.value);
//     }
//     const handleProductQuantity = (e) => {
//         setProductQuantity(e.target.value);
//     }
//     const handleProductImage = (e) => {
//         const uploadedImage = e.target.files[0];
//         if(uploadedImage) {
//             setProductImage(URL.createObjectURL(uploadedImage));
//         }
//     }
//     const handleFormValidation = () => {
//         if(productName && productCategory && productCurrency && productPrice && productQuantity && productImage){
//             return true;
//         }
//         return false;
//     }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', productName);
//         formData.append('category', productCategory);
//         formData.append('currency', productCurrency);
//         formData.append('quantity', productQuantity);
//         formData.append('price', productPrice);
//         formData.append('image', productImage);

//         try {
//             const response = await fetch('http://localhost:5000/api/products', {
//                 method: 'POST',
//                 body: formData,
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to add product');
//             }
//             const data = await response.json();
//             console.log('Product added:', data);
//         } catch (error) {
//             console.error('Error adding product:', error);
//         }
//     };

//     return (
//         <section className='add-product'>
//             <div className='add-product-form'>
//                 <div className='add-product-header'>
//                     <h1 editable>Add product form</h1>
//                 </div>
//                 <div className='add-product-content'>
//                     <form onSubmit={handleSubmit}>
//                         <select name='category' onChange={handleProductCategory}>
//                             <option value='category' disabled>Category</option>
//                             <option value='burgers'>Burgers</option>
//                             <option value='pizzas'>Pizzas</option>
//                             <option value='pastas'>Pastas</option>
//                             <option value='drinks'>Drinks</option>
//                             <option value='salads'>Salads</option>
//                             <option value='sandwish'>Sandwish</option>
//                             <option value='chicken'>Chicken</option>
//                         </select>
//                         <input
//                             type='text'
//                             placeholder='Product Name'
//                             onChange={handleProductName}
//                         />
//                         <textarea 
//                             placeholder='Product Description'
//                         >
//                         </textarea>

//                         <input
//                             type='number'
//                             name='price'
//                             placeholder='$10'
//                             onChange={handleProductPrice}
//                         />

//                         <input
//                             type='number'
//                             name='quantity'
//                             placeholder='01'
//                             onChange={handleProductQuantity}
//                         />

//                         <input 
//                             type='file' 
//                             name='image' 
//                             onChange={handleProductImage} 
//                         />
//                         <button type='submit' className='btn btn-dark' disabled={!handleFormValidation()}>Add Item</button>
//                     </form>
//                 </div>
//             </div>
//             <div className='show-product-container'>
//                 <div className='show-product-header'>
//                     <h1>Product</h1>
//                 </div>
//                 <div className='show-product-content'>
//                     <Product
//                         Image={productImage} 
//                         Name={productName} 
//                         Category={productCategory}
//                         Currency={productCurrency} 
//                         Price={productPrice}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };
