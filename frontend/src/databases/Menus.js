import Burger1 from '../assets/images/menu/burgers/BeefBurger.png';
import Burger2 from '../assets/images/menu/burgers/BurgerIngredient.png';
import Burger3 from '../assets/images/menu/burgers/CheeseBurger.png';
import Burger4 from '../assets/images/menu/burgers/ChickenCutletBurger.png';
import Burger5 from '../assets/images/menu/burgers/CrunchGrillhouse.png';
import Burger6 from '../assets/images/menu/burgers/DoublePattyBurger.png';
import Burger7 from '../assets/images/menu/burgers/Hamburgerwithcheese.png';
import Burger8 from '../assets/images/menu/burgers/SizzleSnapBurgers.png';
import Burger9 from '../assets/images/menu/burgers/TastyThumpBurgers.png';
import Pizza1 from '../assets/images/menu/pizzas/ChicagoPizza.webp';
import Pizza2 from '../assets/images/menu/pizzas/NeapolitanPizza.avif';
import Pizza3 from '../assets/images/menu/pizzas/SicilianPizza.webp';
import Pizza4 from '../assets/images/menu/pizzas/CheesePizza.jpg';
import Pizza5 from '../assets/images/menu/pizzas/ItalianPizza.avif';
import Pizza6 from '../assets/images/menu/pizzas/BagelPizza.jpg';
import Pasta1 from '../assets/images/menu/pastas/Pasta.avif';
import Pasta2 from '../assets/images/menu/pastas/TomatoSauceSpaghetti.webp';
import Pasta3 from '../assets/images/menu/pastas/MeatPasta.jpg';
import Drink1 from '../assets/images/menu/drinks/CocaColaClassic.jpg';
import Drink2 from '../assets/images/menu/drinks/CocaColaLightTaste.jpg';
import Drink3 from '../assets/images/menu/drinks/CocaColaZeroSugar.jpg';
import Drink4 from '../assets/images/menu/drinks/Fanta.jpg';
import Drink5 from '../assets/images/menu/drinks/Sprite.jpg';
import Drink6 from '../assets/images/menu/drinks/LiptonIceTeaPeach.jpg';
import Chicken1 from '../assets/images/categories/chicken-wings.png';
import Sandwish1 from '../assets/images/categories/sandwish.png';
import Salad1 from '../assets/images/categories/salads.png';

export const Menus = [
    {id: 1, type: 'burgers', image: Burger1, name:'Beef Burger', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'4.99'},
    {id: 2, type: 'burgers', image: Burger2, name:'Burger Ingredient', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'8.99'},
    {id: 3, type: 'burgers', image: Burger3, name:'Cheese Burger', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'9.99'},
    {id: 4, type: 'burgers', image: Burger4, name:'Chicken Burger', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'6.99'},
    {id: 5, type: 'burgers', image: Burger5, name:'Crunch Grill house', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'4.99'},
    {id: 6, type: 'burgers', image: Burger6, name:'Double Patty Burger', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'8.99'},
    {id: 7, type: 'burgers', image: Burger7, name:'Hamburger cheese', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'9.99'},
    {id: 8, type: 'burgers', image: Burger8, name:'Sizzle Snap Burgers', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'6.99'},
    {id: 9, type: 'burgers', image: Burger9, name:'Tasty Thump Burgers', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'7.99'},
    
    {id: 10, type: 'pizzas', image: Pizza1, name:'Chicago pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'4.99'},
    {id: 11, type: 'pizzas', image: Pizza2, name:'Neapolitan pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'8.99'},
    {id: 12, type: 'pizzas', image: Pizza3, name:'Sicilian pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'9.99'},
    {id: 13, type: 'pizzas', image: Pizza4, name:'Cheese pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'6.99'},
    {id: 14, type: 'pizzas', image: Pizza5, name:'Italian pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'4.99'},
    {id: 15, type: 'pizzas', image: Pizza6, name:'Bagel pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'8.99'},
    {id: 16, type: 'pastas', image: Pasta1, name:'Cheese Pasta', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'4.99'},
    {id: 17, type: 'pastas', image: Pasta2, name:'Pasta with tomato sauce', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'8.99'},
    {id: 18, type: 'pastas', image: Pasta3, name:'Pasta With Meat Sauce', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'9.99'},
    {id: 19, type: 'pastas', image: Pasta3, name:'Cheese pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'6.99'},
    {id: 20, type: 'pastas', image: Pasta2, name:'Italian pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'4.99'},
    {id: 21, type: 'pastas', image: Pasta1, name:'Bagel pizza', description:'Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.', currency:'$', price:'8.99'},
    {id: 22, type: 'drinks', image: Drink1, name:'Coca-Cola Classic', description:'', currency:'$', price:'1.99'},
    {id: 23, type: 'drinks', image: Drink2, name:'Coca-Cola Light Taste', description:'', currency:'$', price:'1.99'},
    {id: 24, type: 'drinks', image: Drink3, name:'Coca-Cola Zero Sugar', description:'', currency:'$', price:'1.99'},
    {id: 25, type: 'drinks', image: Drink4, name:'Fanta', description:'', currency:'$', price:'2.99'},
    {id: 26, type: 'drinks', image: Drink5, name:'Sprite', description:'', currency:'$', price:'2.99'},
    {id: 27, type: 'drinks', image: Drink6, name:'Lipton Ice Tea Peach', description:'', currency:'$', price:'2.99'},
    {id: 28, type: 'salads', image: Salad1, name:'Salad Royal', description:'', currency:'$', price:'1.99'},
    {id: 29, type: 'salads', image: Salad1, name:'Cheese Salad', description:'', currency:'$', price:'1.99'},
    {id: 30, type: 'salads', image: Salad1, name:'Moroccan Salad', description:'', currency:'$', price:'1.99'},
    {id: 31, type: 'salads', image: Salad1, name:'Salad', description:'', currency:'$', price:'2.99'},
    {id: 32, type: 'salads', image: Salad1, name:'Salad', description:'', currency:'$', price:'2.99'},
    {id: 33, type: 'salads', image: Salad1, name:'Salad', description:'', currency:'$', price:'2.99'},
    {id: 34, type: 'sandwish', image: Sandwish1, name:'Beef Sandwish', description:'', currency:'$', price:'1.99'},
    {id: 35, type: 'sandwish', image: Sandwish1, name:'Cheese Sandwish', description:'', currency:'$', price:'1.99'},
    {id: 36, type: 'sandwish', image: Sandwish1, name:'Chicken Sandwish', description:'', currency:'$', price:'1.99'},
    {id: 37, type: 'sandwish', image: Sandwish1, name:'Mexican Sandwish', description:'', currency:'$', price:'2.99'},
    {id: 38, type: 'sandwish', image: Sandwish1, name:'Kabab Sandwish', description:'', currency:'$', price:'2.99'},
    {id: 39, type: 'sandwish', image: Sandwish1, name:'Turk Sandwish', description:'', currency:'$', price:'2.99'},
    {id: 40, type: 'chicken', image: Chicken1, name:'Chicken Nuggets', description:'', currency:'$', price:'1.99'},
    {id: 41, type: 'chicken', image: Chicken1, name:'Chicken with Sauce', description:'', currency:'$', price:'1.99'},
    {id: 42, type: 'chicken', image: Chicken1, name:'Moroccan Chicken', description:'', currency:'$', price:'1.99'},
    {id: 43, type: 'chicken', image: Chicken1, name:'Chicken', description:'', currency:'$', price:'2.99'},
    {id: 44, type: 'chicken', image: Chicken1, name:'Chicken', description:'', currency:'$', price:'2.99'},
    {id: 45, type: 'chicken', image: Chicken1, name:'Chicken', description:'', currency:'$', price:'2.99'},
]

// const FilterBy = Menus.filter(menu =>{
//     if(menu.type ==='Drink'){
//         console.log(menu.name)
//     }
// })