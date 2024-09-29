import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import { Category } from '../../../components/Public/Category/Category';

import ChickenWings from '../../../assets/images/categories/chicken-wings.png';
import Beef from '../../../assets/images/categories/beef-burger.png';
import Pasta from '../../../assets/images/categories/pasta.png';
import Sandwish from '../../../assets/images/categories/sandwish.png';
import Pizza from '../../../assets/images/categories/pizza.png';
import Salads from '../../../assets/images/categories/salads.png';
import './Categories.scss';

export const Categories = () => {
    return (
        <section>
                <Title Image='' Span='Our' Text='Delicious Categories'/>
            <div>
                <div className='Flex-Center Flex-Column'>
                    <div className='Flex-Center'>
                        <Category Image={Beef} Text='Burgers'/>
                        <Category Image={ChickenWings} Text='Chicken Wings'/>
                        <Category Image={Pasta} Text='Pasta'/>
                        <Category Image={Pizza} Text='Pizzas'/>
                    </div>
                    <div className='Flex-Center'>
                        <Category Image={Sandwish} Text='Sandwish'/>
                        <Category Image={Salads} Text='Salads'/>
                        <Category Image={Beef} Text='Burgers'/>
                        <Category Image={ChickenWings} Text='Chicken Wings'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

