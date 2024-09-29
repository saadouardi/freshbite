import React , { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import { Product } from '../../../../components/Public/Shop/Product/Product';
import { Menus } from '../../../../databases/Menus';
import Food from '../../../../assets/images/categories/chicken-wings.png';
import './ProductList.scss';

const ProductList = () => {
    const history = useHistory();
    const { filter: urlFilter } = useParams();
    const [menus, setMenus] = useState([]);
    const [filter, setFilter] = useState('all');
    const menusTypes = menus.reduce((acc, menu) => {
        if (!acc.some(item => item.type === menu.type)){
            acc.push({ type: menu.type, image: menu.image });
        }
        return acc;    
    }, []);
    const menusFiltered = menus.filter(menu => {
        return filter === 'all' || menu.type.toLowerCase() === filter.toLowerCase(); //
    });
    const handleFilter = (selectedValue) => {
        setFilter(selectedValue);
        history.push(`/menu/${selectedValue}`);
    };
    
    const handleSearch = () =>{
        //
    }
    const handleSort = () =>{
        //
    }
    useEffect(() => {
        if(Menus){
            setMenus(Menus);
            if(urlFilter){
                setFilter(urlFilter);
            }
        }else {
            console.log('Error fetching Menus')
        }
    }, [urlFilter]);
    return (
        <>
            <Header/>
            <PageSection Title='MENU'/>
            <main>
                <div className='Menu Flex-Center'>
                    <div className='Product-Filter'>
                        <div className='Flex-Center Flex-Column'>
                                <div title='All' className='Filter-Container Flex-Center' onClick={() => handleFilter('all')}>
                                    <img src={Food} alt='' />
                                    <p>All</p>
                                </div>
                            {menusTypes.map((menu, index) =>(
                                <div title='menu.type' className='Filter-Container Flex-Center' key={index} value={menu.type} onClick={() => handleFilter(menu.type)}>
                                    <img src={menu.image} alt={menu.type} />
                                    <p>{menu.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='Product-Lists Flex-Center'>
                        {menus ? (
                            menusFiltered.map((item, index) =>(
                                <Product
                                    key={index}
                                    Id={item.id}
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
            </main>
            <Footer/>
        </>
    )
}
export default ProductList;