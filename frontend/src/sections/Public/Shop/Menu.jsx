import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import { Description } from '../../../components/Public/common/Description/Description';
import { Product } from '../../../components/Public/Shop/Product/Product';
import Burger from '../../../assets/images/menu/Burgers/BeefBurger.png';
import Dish2 from '../../../assets/images/menu/Burgers/BurgerIngredient.png';
import Dish3 from '../../../assets/images/menu/Burgers/CheeseBurger.png';
import Dish4 from '../../../assets/images/menu/Burgers/ChickenCutletBurger.png';
import './Menu.scss';
export const Dishes = () => {
    return (
        <section className='Dishes'>
            <Title Image='' Text='OUR MENU'/>
            <Description 
                Description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, labore
                quasi temporibus consectetur suscipit sunt tenetur, veniam neque distinctio
                fugit in sint natus deserunt hic eaque dolores.'
            />

            <div className='main-dish__container'>
                <div className="dish-list">
                    <Product Image={Burger} Name='Beef Burger' Description='Cheese Burger' Currency='$' Price='4.99'/>
                    <Product Image={Dish2} Name='Burger Ingredient' Description='Marguarita' Currency='$' Price='8.99'/>
                    <Product Image={Dish3} Name='Cheese Burger' Description='Sandwish' Currency='$' Price='9.99'/>
                    <Product Image={Dish4} Name='Chicken Burger' Description='Cheese Burger' Currency='$' Price='6.99'/>
                </div>
            </div>
        </section>
    )
}

