import React, { useState } from 'react';
import './Quantity.scss';

export const Quantity = () => {
    const [Qunatity, setQuantity] = useState(1);
    const handlePlusQuantity = () =>{
        if(Qunatity === 5){
            return;
        }
        setQuantity(Qunatity + 1);
    }
    const handleMinusQuantity = () =>{
        if(Qunatity === 1){
            return;
        }
        setQuantity(Qunatity - 1);
    }
    return (
        <>
            <div className='Quantity Flex-Center'>
                <div className='Flex-Center'>
                    <svg onClick={handleMinusQuantity} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11V13H19V11H5Z"></path></svg>
                    <span>{Qunatity}</span>
                    <svg onClick={handlePlusQuantity} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                </div>
            </div>
        </>
    )
}
