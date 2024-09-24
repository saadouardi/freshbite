import Burger1 from '../assets/images/menu/Burgers/BeefBurger.png';
import Burger2 from '../assets/images/menu/Burgers/BurgerIngredient.png';
import Burger3 from '../assets/images/menu/Burgers/CheeseBurger.png';
import Burger4 from '../assets/images/menu/Burgers/ChickenCutletBurger.png';
import Burger5 from '../assets/images/menu/Burgers/CrunchGrillhouse.png';
import Burger6 from '../assets/images/menu/Burgers/DoublePattyBurger.png';
import Burger7 from '../assets/images/menu/Burgers/Hamburgerwithcheese.png';
import Burger8 from '../assets/images/menu/Burgers/SizzleSnapBurgers.png';
import Burger9 from '../assets/images/menu/Burgers/TastyThumpBurgers.png';
import Drink1 from '../assets/images/menu/Drinks/CocaColaClassic.jpg';
import Drink2 from '../assets/images/menu/Drinks/CocaColaLightTaste.jpg';
import Drink3 from '../assets/images/menu/Drinks/CocaColaZeroSugar.jpg';
import Drink4 from '../assets/images/menu/Drinks/Fanta.jpg';
import Drink5 from '../assets/images/menu/Drinks/Sprite.jpg';
import Drink6 from '../assets/images/menu/Drinks/LiptonIceTeaPeach.jpg';

export const Menus = [
    {type: 'burger', image: Burger1, name:'Beef Burger', description:'Delicious Beef Burger', currency:'$', price:'4.99'},
    {type: 'burger', image: Burger2, name:'Burger Ingredient', description:'Delicious Beef Burger', currency:'$', price:'8.99'},
    {type: 'burger', image: Burger3, name:'Cheese Burger', description:'Delicious Beef Burger', currency:'$', price:'9.99'},
    {type: 'burger', image: Burger4, name:'Chicken Burger', description:'Delicious Beef Burger', currency:'$', price:'6.99'},
    {type: 'burger', image: Burger5, name:'Crunch Grill house', description:'Delicious Beef Burger', currency:'$', price:'4.99'},
    {type: 'burger', image: Burger6, name:'Double Patty Burger', description:'Delicious Beef Burger', currency:'$', price:'8.99'},
    {type: 'burger', image: Burger7, name:'Hamburger cheese', description:'Delicious Beef Burger', currency:'$', price:'9.99'},
    {type: 'burger', image: Burger8, name:'Sizzle Snap Burgers', description:'Delicious Beef Burger', currency:'$', price:'6.99'},
    {type: 'burger', image: Burger9, name:'Tasty Thump Burgers', description:'Delicious Beef Burger', currency:'$', price:'7.99'},
    {type: 'pizza', image: '', name:'Chicago pizza', description:'Delicious Beef Burger', currency:'$', price:'4.99'},
    {type: 'pizza', image: '', name:'Neapolitan pizza', description:'Delicious Beef Burger', currency:'$', price:'8.99'},
    {type: 'pizza', image: '', name:'Sicilian pizza', description:'Delicious Beef Burger', currency:'$', price:'9.99'},
    {type: 'pizza', image: '', name:'Cheese pizza', description:'Delicious Beef Burger', currency:'$', price:'6.99'},
    {type: 'pizza', image: '', name:'Italian pizza', description:'Delicious Beef Burger', currency:'$', price:'4.99'},
    {type: 'pizza', image: '', name:'Bagel pizza', description:'Delicious Beef Burger', currency:'$', price:'8.99'},
    {type: 'drink', image: Drink1, name:'Coca-Cola Classic', description:'', currency:'$', price:'1.99'},
    {type: 'drink', image: Drink2, name:'Coca-Cola Light Taste', description:'', currency:'$', price:'1.99'},
    {type: 'drink', image: Drink3, name:'Coca-Cola Zero Sugar', description:'', currency:'$', price:'1.99'},
    {type: 'drink', image: Drink4, name:'Fanta', description:'', currency:'$', price:'2.99'},
    {type: 'drink', image: Drink5, name:'Sprite', description:'', currency:'$', price:'2.99'},
    {type: 'drink', image: Drink6, name:'Lipton Ice Tea Peach', description:'', currency:'$', price:'2.99'},
]

// const FilterBy = Menus.filter(menu =>{
//     if(menu.type ==='Drink'){
//         console.log(menu.name)
//     }
// })