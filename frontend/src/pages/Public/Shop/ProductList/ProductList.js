import React , { useEffect, useState } from 'react';
import { Header } from '../../../../components/Public/common/Header/Header';
import { Title } from '../../../../components/Public/common/Title/Title';
import { Product } from '../../../../components/Public/Shop/Product/Product';
import { Menus } from '../../../../databases/Menus';
import './ProductList.scss';

const MenuIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 2V22H19V15H15V8C15 4.68629 17.6863 2 21 2ZM19 4.53C18.17 5 17 6.17 17 8V13H19V4.53ZM9 13.9V22H7V13.9C4.71776 13.4367 3 11.419 3 9V3H5V10H7V3H9V10H11V3H13V9C13 11.419 11.2822 13.4367 9 13.9Z"></path></svg>
)
const ProductList = () => {
    const [menus, setMenus] = useState([]);
    const [filter, setFilter] = useState('all');
    const menusTypes = menus.reduce((acc, menu) => {
        if(!acc.includes(menu.type)){
            acc.push(menu.type);
        }
        return acc;    
    }, []);
    const menusFiltered = menus.filter(menu => {
        return filter === 'all' || menu.type.toLowerCase() === filter.toLowerCase();
    });
    const handleFilter = (e) =>{
        setFilter(e.target.value);
    }
    const handleSearch = () =>{
        //
    }
    const handleSort = () =>{
        //
    }
    useEffect(() => {
        if(Menus){
            setMenus(Menus)
        }else {
            console.log('Error fetching Menus')
        }
    }, []);
    return (
        <>
            <Header/>
            <main className='Menu'>
                <Title Image={MenuIcon} Text='MENU'/>
                <div className='Menu-Container'>
                    <div className='Product-Filter Filter_Container'>
                        <select title='Filter' id='select' onChange={handleFilter}>
                            <option value="" key="">All</option>
                            {
                                menusTypes.map((type, index) =>(
                                    <option value={type.toLowerCase()} key={index}>{type}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='Flex-Center Flex-Column'>
                        <div className='Product-Search'>
                            <input type="text" placeholder='Search...' />
                        </div>
                        <div className='Product-Lists Flex-Center'>
                            {menus ? (
                                menusFiltered.map((item, index) =>(
                                    <Product
                                    key={index}
                                        Image={item.image} 
                                        Name={item.name} 
                                        Type={item.type} 
                                        Currency={item.currency} 
                                        Price={item.price}
                                    />
                                ))
                                ) : (
                                    <div>Loading...</div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default ProductList;