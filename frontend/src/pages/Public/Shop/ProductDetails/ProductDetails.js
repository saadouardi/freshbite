import React , { useEffect, useState } from 'react';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import { Menus } from '../../../../databases/Menus';
import User from '../../../../assets/images/author/a-1.png';
import './ProductDetails.scss';

const ProductDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const [menus, setMenu] = useState([]);
    const [product, setProduct] = useState(null);
    const productId = urlParams.get('id');
    const handleBuyNow = () =>{
        window.location.href = '/checkout';
    }
    const handleAddToCart = () =>{
        window.location.href = '/cart';
    }
    const handleAddToWishlist = () =>{
        window.location.href = '/wishlist';
    }
    const handleBack = () =>{
        window.history.back();
    }
    useEffect(()=>{
        if(Menus){
            setMenu(Menus);
            console.log(menus)
            const foundProduct = menus.find(item => item.id.toString() === productId.toString());
            if(foundProduct) {
                setProduct(foundProduct);
            }
        }else{
            console.log('Error fetching Menus database!');
        }
    }, [menus, productId]);
    return (
        <>
            <Header/>
            <PageSection Title='Product details'/>
            <main className='ProductDetails'>
                {product ? (
                        <>
                            <div className='Main-ProductDetails Flex-Center'>
                                <button className='BackBtn' onClick={handleBack}>Back</button>
                                <div className='Product-Image Flex-Center'>
                                    <img src={product.image} alt="" />
                                </div>
                                <div className='Product-Details'>
                                    <div className='Product-Data Flex-Column'>
                                        <div className='Product-Name'>
                                            <h1>{product.name}</h1>
                                        </div>
                                        <div className='ProductPrice-ProductReviews Flex-Center'>
                                            <div className='ProductPrice-Container'>
                                                <p><span>{product.currency}</span><span>{product.price}</span></p>
                                            </div>
                                            <div className='ProductReviews-Container Flex-Center'>
                                                <div className='Stars'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                                                </div>
                                                <div>
                                                    <p><span>2</span> Reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Product-Status'>
                                            <p><strong>In Stock</strong></p>
                                        </div>
                                        <div className='Product-Description'>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className='Product-Badges'>
                                            <p><strong>SKU:</strong> <span>AU-0987</span></p>
                                            <p><strong>Category:</strong> <span>Food</span></p>
                                            <p><strong>Type:</strong> <span>{product.type}</span></p>
                                        </div>
                                    </div>
                                    <div className='Product-ActionBtns Flex-Center Flex-Column'>
                                        <button className='BuyNow' onClick={handleBuyNow}>Buy Now</button>
                                        <button onClick={handleAddToCart}>Add To Cart</button>
                                        <button onClick={handleAddToWishlist}>Add To Wishlist</button>
                                    </div>
                                </div>
                            </div>
                            <div className='Main-ProductReviews Flex-Center Flex-Column'>
                                <h1>(2) REVIEWS</h1>
                                <div className='ProductReview Flex-Center'>
                                    <div className='User-Profile'>
                                        <img src={User} alt="" />
                                    </div>
                                    <div className='UserName-ReviewStars'>
                                        <p>Ethan Clarke</p>
                                        <div className='Stars'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                                        </div>
                                        <div className='User-Review'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque dictum gravida nunc euismod. Nulla dolor rutrum consectetur purus proin ut. Cras cursus nullam erat at aliquet luctus et purus urna.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ProductReview Flex-Center'>
                                    <div className='User-Profile'>
                                        <img src={User} alt="" />
                                    </div>
                                    <div className='UserName-ReviewStars'>
                                        <p>Ethan Clarke</p>
                                        <div className='Stars'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                                        </div>
                                        <div className='User-Review'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Neque dictum gravida nunc euismod. Nulla dolor rutrum consectetur purus proin ut. Cras cursus nullam erat at aliquet luctus et purus urna.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div>Error loading item!</div>
                    )
                }
            </main>
            <Footer/>
        </>
    )
}
export default ProductDetails;