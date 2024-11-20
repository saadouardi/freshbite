import React from 'react';
import DefaultImage from '../../../assets/images/default/default.webp';
import './Product.scss';

export const Product = ({Image, Name, Category, Currency, Price}) => {

    return (
        <>
            <div class="Product">
                <div className='Header'>
                    <div className='product-image Image-Container'>
                        <img src={!Image? DefaultImage : Image} alt="" className="Image"/>
                    </div>
                </div>
                <div className='Body'>
                    <div>
                        <h1 className="ProductName">{!Name? 'Product name' : Name}</h1>
                        <p className="ProductDescription">{!Category? 'Product category' : Category}</p>
                    </div>
                </div>
                <div className='Footer'>
                    <div className='Flex-Center'>
                        <h5 className="Product-Price">{!(Currency + Price)? 'Product price': (Currency + Price)}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}