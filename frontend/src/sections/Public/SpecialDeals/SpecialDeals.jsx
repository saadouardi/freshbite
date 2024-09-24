import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import { Product } from '../../../components/Public/Shop/Product/Product';
import Dish1 from '../../../assets/images/specialdish/pd_1.png';
import Dish2 from '../../../assets/images/specialdish/pd_2.png';
import Dish3 from '../../../assets/images/specialdish/pd_3.png';
import Dish4 from '../../../assets/images/specialdish/pd_4.png';
import './SpecialDeals.scss';

export const SpecialDeals = () => {
    return (
        <section>
            <Title Image='' Span='Our' Text='Delicious Categories'/>
            <div>
                <div className="Flex-Center">
                    <Product Image={Dish1} Name='Beef Burger' Description='Cheese Burger' Currency='$' Price='4.99'/>
                    <Product Image={Dish2} Name='Burger Ingredient' Description='Marguarita' Currency='$' Price='8.99'/>
                    <Product Image={Dish3} Name='Cheese Burger' Description='Sandwish' Currency='$' Price='9.99'/>
                    <Product Image={Dish4} Name='Chicken Burger' Description='Cheese Burger' Currency='$' Price='6.99'/>
                </div>
            </div>
        </section>
    )
}

