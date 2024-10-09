import React, { useState } from 'react';
import './Slider.scss';

const ProductSlider = () => {
    const products = [
        { name: 'Product 1', description: 'Description 1', image: 'image1.jpg' },
        { name: 'Product 2', description: 'Description 2', image: 'image2.jpg' },
        { name: 'Product 3', description: 'Description 3', image: 'image3.jpg' },
        { name: 'Product 4', description: 'Description 4', image: 'image4.jpg' },
        { name: 'Product 5', description: 'Description 5', image: 'image5.jpg' },
        { name: 'Product 6', description: 'Description 6', image: 'image6.jpg' },
        { name: 'Product 7', description: 'Description 7', image: 'image7.jpg' },
        { name: 'Product 8', description: 'Description 8', image: 'image8.jpg' },
        { name: 'Product 9', description: 'Description 9', image: 'image9.jpg' }
    ];
    // Manage the current index of the visible products
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of items to display at once
    const itemsPerPage = 3;
    const totalItems = products.length;

    // Go to next set of items
    const handleNext = () => {
        if (currentIndex < totalItems - itemsPerPage) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };
    // Go to previous set of items
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="slider-container">
            <PrevBtn   handlePrev={handlePrev} currentIndex={currentIndex}  />
            <div className="slider-wrapper">
                <div className="slider" style={{transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)`}}>
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <NextBtn    handleNext={handleNext} currentIndex={currentIndex} totalItems={totalItems} itemsPerPage={itemsPerPage}  />
        </div>
    );
};

export default ProductSlider;


function PrevBtn({handlePrev, currentIndex}) {
    return (
        <button className="prev" onClick={handlePrev} disabled={currentIndex === 0}>
            &#8249;
        </button>
    );

}
function NextBtn({handleNext, currentIndex, totalItems, itemsPerPage}) {
    return (
        <button className="next" onClick={handleNext} disabled={currentIndex >= totalItems - itemsPerPage}>
            &#8250;
        </button>
    );
}