import React from 'react';
import { Title } from '../../../../components/Public/common/Title/Title';
import { Product } from '../../../../components/Public/Shop/Product/Product';
import Product1 from '../../../../assets/images/menu/Burgers/BeefBurger.png';
import Product2 from '../../../../assets/images/menu/Burgers/BurgerIngredient.png';
import Product3 from '../../../../assets/images/menu/Burgers/CheeseBurger.png';
import Product4 from '../../../../assets/images/menu/Burgers/ChickenCutletBurger.png';
import './Products.scss';

export const Products = () => {
    return (
        <section>
            <Title Image='' Span='Our' Text='Special Dishes'/>
            <div>
                <div className="Flex-Center">
                    <Product Image={Product1} Name='Beef Burger' Description='Cheese Burger' Currency='$' Price='4.99'/>
                    <Product Image={Product2} Name='Burger Ingredient' Description='Marguarita' Currency='$' Price='8.99'/>
                    <Product Image={Product3} Name='Cheese Burger' Description='Sandwish' Currency='$' Price='9.99'/>
                    <Product Image={Product4} Name='Chicken Burger' Description='Cheese Burger' Currency='$' Price='6.99'/>
                </div>
            </div>
        </section>
    )
}

