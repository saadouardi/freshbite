import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import { Dish } from '../../../components/Public/Dish/Dish';
import Dish1 from '../../../assets/images/menu/Burgers/BeefBurger.png';
import Dish2 from '../../../assets/images/menu/Burgers/BurgerIngredient.png';
import Dish3 from '../../../assets/images/menu/Burgers/CheeseBurger.png';
import Dish4 from '../../../assets/images/menu/Burgers/ChickenCutletBurger.png';
import './Dishes.scss';

export const Dishes = () => {
    return (
        <section>
            <Title Image='' Span='Our' Text='Special Dishes'/>
            <div>
                <div className="Flex-Center">
                    <Dish Image={Dish1} Name='Beef Burger' Description='Cheese Burger' Currency='$' Price='4.99'/>
                    <Dish Image={Dish2} Name='Burger Ingredient' Description='Marguarita' Currency='$' Price='8.99'/>
                    <Dish Image={Dish3} Name='Cheese Burger' Description='Sandwish' Currency='$' Price='9.99'/>
                    <Dish Image={Dish4} Name='Chicken Burger' Description='Cheese Burger' Currency='$' Price='6.99'/>
                </div>
            </div>
        </section>
    )
}

