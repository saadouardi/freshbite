import React from 'react';
import AllFood from '../../../../assets/images/menu/All/All.webp';
import Burger from '../../../../assets/images/menu/Burgers/BeefBurger.png';
import Pizza from '../../../../assets/images/menu/Pizzas/Pizza.jpg';
import Pasta from '../../../../assets/images/menu/Pasta/Pasta.avif';
import Sandwish from '../../../../assets/images/menu/Sandwish/Sandwish.png';
import Salad from '../../../../assets/images/menu/Salads/Salad.avif';
import Coffee from '../../../../assets/images/menu/Coffee/Coffee.jpg';
import Dessert from '../../../../assets/images/menu/Desserts/Dessert.jpg';
import Drink from '../../../../assets/images/menu/Drinks/CocaColaClassic.jpg';
import './Navbar.scss';

export const ProductFilterBy = () => {
    return (
        <>
            <div className='Menu-Navbar'>
                <div className='Menu' title='Burgers'>
                    <img src={Burger} alt="" />
                    <p>All</p>
                </div>

                <div className='Menu' title='Burgers'>
                    <img src={Burger} alt="" />
                    <p>Burgers</p>
                </div>

                <div className='Menu' title='Pizzas'>
                    <img src={Pizza} alt="" />
                    <p>Pizzas</p>
                </div>

                <div className='Menu' title='Pastas'>
                    <img src={Pasta} alt="" />
                    <p>Pastas</p>
                </div>

                <div className='Menu' title='Sandwish'>
                    <img src={Sandwish} alt="" />
                    <p>Sandwish</p>
                </div>

                <div className='Menu' title='Salads'>
                    <img src={Salad} alt="" />
                    <p>Salads</p>
                </div>

                <div className='Menu' title='Coffee'>
                    <img src={Coffee} alt="" />
                    <p>Coffee</p>
                </div>

                <div className='Menu' title='Desserts'>
                    <img src={Dessert} alt="" />
                    <p>Desserts</p>
                </div>

                <div className='Menu' title='Drinks'>
                    <img src={Drink} alt="" />
                    <p>Drinks</p>
                </div>
            </div>
        </>
    )
}

