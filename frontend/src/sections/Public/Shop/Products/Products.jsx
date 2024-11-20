import React from 'react';
import { Title } from '../../../../components/Public/common/Title/Title';
import { Product } from '../../../../components/Public/Shop/Product/Product';
import Product1 from '../../../../assets/images/menu/burgers/BeefBurger.png';
import Product2 from '../../../../assets/images/menu/burgers/BurgerIngredient.png';
import Product3 from '../../../../assets/images/menu/burgers/CheeseBurger.png';
import Product4 from '../../../../assets/images/menu/burgers/ChickenCutletBurger.png';
import './Products.scss';

export const Products = () => {
    return (
        <section className='products'>
            <Title Image='' Span='Our' Text='Special Dishes'/>
            <div className="product-list flex-center-spacebetween">
                    <Product Id={1} Image={Product1} Name='Beef Burger' Description='Cheese Burger' Currency='$' Price='4.99'/>
                    <Product Id={2} Image={Product2} Name='Burger Ingredient' Description='Marguarita' Currency='$' Price='8.99'/>
                    <Product Id={3} Image={Product3} Name='Cheese Burger' Description='Sandwish' Currency='$' Price='9.99'/>
                    <Product Id={4} Image={Product4} Name='Chicken Burger' Description='Cheese Burger' Currency='$' Price='6.99'/>
            </div>
        </section>
    )
}

