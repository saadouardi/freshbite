import React from 'react';
import { Quantity } from '../Quantity/Quantity';
import { Cart } from '../Cart/Cart';
import './Product.scss';

export const Product = ({Id, Image,Name,Type,Currency,Price}) => {
    const handleClick = () =>{
        window.location.href = `/product?id=${Id}&n=${Name.toLowerCase()}`;
    }
    return (
        <>
            <div class="Product">
                <div className='Header' onClick={handleClick}>
                    <div className='Image-Container'>
                        <img src={Image} alt="" className="Image" id='dishIamge'/>
                    </div>
                </div>
                <div className='Body' onClick={handleClick}>
                    <div>
                        <h1 className="ProductName">{Name}</h1>
                        <p className="ProductDescription">{Type}</p>
                    </div>
                </div>
                <div className='Footer'>
                    <div className='Flex-Center Flex-SpaceBetween'>
                        <Quantity/>
                        <div className='Price-Cart'>
                            <div className='Flex-Center'>
                                <h5 className="Product-Price">{Currency}{Price}</h5>
                            </div>
                            <Cart/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

