import React , {useEffect, useState} from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { Title } from '../../../components/Public/common/Title/Title';
import { Filter } from '../../../components/Public/Filter/Filter';
import { Navbar } from '../../../components/Public/Menu/Navbar/Navbar';
import { Dish } from '../../../components/Public/Dish/Dish';
import Dish1 from '../../../assets/images/menu/Burgers/BeefBurger.png';
import Dish2 from '../../../assets/images/menu/Burgers/BurgerIngredient.png';
import Dish3 from '../../../assets/images/menu/Burgers/CheeseBurger.png';
import Dish4 from '../../../assets/images/menu/Burgers/ChickenCutletBurger.png';
import Dish5 from '../../../assets/images/menu/Burgers/CrunchGrillhouse.png';
import Dish6 from '../../../assets/images/menu/Burgers/DoublePattyBurger.png';
import Dish7 from '../../../assets/images/menu/Burgers/Hamburgerwithcheese.png';
import Dish8 from '../../../assets/images/menu/Burgers/SizzleSnapBurgers.png';
import Dish9 from '../../../assets/images/menu/Burgers/TastyThumpBurgers.png';
import Drink1 from '../../../assets/images/menu/Drinks/CocaColaClassic.jpg';
import Drink2 from '../../../assets/images/menu/Drinks/CocaColaLightTaste.jpg';
import Drink3 from '../../../assets/images/menu/Drinks/CocaColaZeroSugar.jpg';
import Drink4 from '../../../assets/images/menu/Drinks/Fanta.jpg';
import Drink5 from '../../../assets/images/menu/Drinks/Sprite.jpg';
import Drink6 from '../../../assets/images/menu/Drinks/LiptonIceTeaPeach.jpg';
import './Menu.scss';

const MenuIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path></svg>
)
export const Menu = () => {
    const [All,setAll] = useState(true);
    const [Burgers,setBurgers] = useState(true);
    const [Drinks,setDrinks] = useState(true);

    const handleFilter = (e) =>{
        const targetValue = e.target.value;
        console.log(targetValue);

        if(targetValue === 'all'){
            setAll(true);
            setBurgers(true);
            setDrinks(true)
        }else if(targetValue === 'burgers'){
            setAll(true);
            setBurgers(true);
            setDrinks(false);
        }else if(targetValue==='drinks'){
            setAll(true);
            setBurgers(false);
            setDrinks(true);
        }
    }

    return (
        <>
            <Header/>
            <main className='Menu'>
                <Title Image={MenuIcon} Text='MENU'/>
                <select id='select' onChange={handleFilter}>
                    <option value="all" key="">All</option>
                    <option value="burgers" key="">Burgers</option>
                    <option value="drinks" key="">Drinks</option>
                </select>


                <div className='Menu-Container'>
                    <div className='Filter_Container'>
                        {/* <Navbar/> */}
                    </div>

                    <div className='Menu-Search-List'>
                        <div className='Menu__SearchResults'>
                            {/* <Filter/> */}
                        </div>

                        <div className='Flex-Center'>
                            {All && 
                                <>
                                    {Burgers &&
                                        <>
                                            <Dish Image={Dish1} Name='Beef Burger' Description='Burger' Currency='$' Price='4.99'/>
                                            <Dish Image={Dish2} Name='Burger Ingredient' Description='Burger' Currency='$' Price='8.99'/>
                                            <Dish Image={Dish3} Name='Cheese Burger' Description='Burger' Currency='$' Price='9.99'/>
                                            <Dish Image={Dish4} Name='Chicken Burger' Description='Burger' Currency='$' Price='6.99'/>
                                            <Dish Image={Dish5} Name='Crunch Grill house' Description='Burger' Currency='$' Price='4.99'/>
                                            <Dish Image={Dish6} Name='Double Patty Burger' Description='Burger' Currency='$' Price='8.99'/>
                                            <Dish Image={Dish7} Name='Hamburger cheese' Description='Burger' Currency='$' Price='9.99'/>
                                            <Dish Image={Dish8} Name='Sizzle Snap Burgers' Description='Burger' Currency='$' Price='6.99'/>
                                            <Dish Image={Dish9} Name='Tasty Thump Burgers' Description='Burger' Currency='$' Price='6.99'/>
                                        </>
                                    }

                                    {Drinks &&
                                        <>
                                            <Dish Image={Drink1} Name='Coca-Cola Classic' Description='Drink' Currency='$' Price='2.99'/>
                                            <Dish Image={Drink2} Name='Coca-Cola Light Taste' Description='Drink' Currency='$' Price='2.99'/>
                                            <Dish Image={Drink3} Name='Coca-Cola Zero Sugar' Description='Drink' Currency='$' Price='1.99'/>
                                            <Dish Image={Drink4} Name='Fanta' Description='Drink' Currency='$' Price='3.99'/>
                                            <Dish Image={Drink5} Name='Sprite' Description='Drink' Currency='$' Price='3.99'/>
                                            <Dish Image={Drink6} Name='Lipton Ice Tea Peach' Description='Drink' Currency='$' Price='2.99'/>
                                        </>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

