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
                        <div className='Flex-Center'>
                            <Category Image={Beef} Text='Burgers' Link='/menu/burgers'/>
                            <Category Image={ChickenWings} Text='Chicken Wings' Link='/menu/chicken'/>
                        </div>
                        <div className='Flex-Center'>
                            <Category Image={Pasta} Text='Pasta' Link='/menu/pastas'/>
                            <Category Image={Pizza} Text='Pizzas' Link='/menu/pizzas'/>
                        </div>
                    </div>
                    <div className='Flex-Center'>
                        <div className='Flex-Center'>
                            <Category Image={Sandwish} Text='Sandwish' Link='/menu/sandwish'/>
                            <Category Image={Salads} Text='Salads' Link='/menu/salads'/>
                        </div>
                        <div className='Flex-Center'>
                        <Category Image={Beef} Text='Burgers' Link='/menu/all'/>
                        <Category Image={ChickenWings} Text='Chicken Wings' Link='/menu/drinks'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

