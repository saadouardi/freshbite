import React , { useEffect, useState } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { Header } from '../../../../components/Public/common/Header/Header';
import { PageSection } from '../../../../components/Public/common/PageSection/PageSection';
import { Footer } from '../../../../components/Public/common/Footer/Footer';
import { Product } from '../../../../components/Public/Shop/Product/Product';
import { products } from '../../../../databases/products';
import Food from '../../../../assets/images/categories/chicken-wings.png';
import './ProductList.scss';

const ProductList = () => {
    const location = useLocation();
    const history = useHistory();
    const [active, setActive] = useState('');
    const { filter: urlFilter } = useParams();
    const [product, setProduct] = useState([]);
    const [filter, setFilter] = useState('all');

    const isActive = (path) => {
        return location.pathname === `/menu/${path}`;
    };

    const menusTypes = products.reduce((acc, menu) => {
        if (!acc.some(item => item.type === menu.type)){
            acc.push({ type: menu.type, image: menu.image });
        }
        return acc;    
    }, []);

    const menusFiltered = products.filter(menu => {
        return filter === 'all' || menu.type.toLowerCase() === filter.toLowerCase();
    });

    const handleFilter = (selectedValue) => {
        setFilter(selectedValue);
        setActive(selectedValue);
        history.push(`/menu/${selectedValue}`);
    };

    const handleSearch = (e) => {
        const searchItem = e.target.value.toLowerCase();

        if (!searchItem) {
            setProduct(products);
        }else {
            setProduct(products.filter( 
                product => product.name.toLowerCase().includes(searchItem))
            );
        }
    }

    const handleSort = (e) =>{
        //
    }

    useEffect(() => {
        if(products){
            setProduct(products);
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
                <div className='menu-container flex-center-center'>
                    <div className='product-filter'>
                        <div className='product-filter-container flex-center-center Flex-Column'>
                            <div title='All' className='filter-container flex-center-center' onClick={() => handleFilter('all')}>
                                <img src={Food} alt='' />
                                <p>All</p>
                            </div>
                            {menusTypes.map((menu, index) =>{
                                return (
                                    <div className={`filter-container flex-center-center ${isActive({active}) ? 'active' : ''}`} key={index} onClick={() => { handleFilter(menu.type);}}>
                                        <img src={menu.image} alt={menu.type} />
                                        <p>{menu.type}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='product-search-sort-list flex-start-center flex-column'>
                        <div className='product-search-sort flex-center-spacebetween'>
                            <div className='product-search'>
                                <input 
                                    type="text"
                                    placeholder='Search product...' 
                                    onChange={handleSearch}
                                />
                            </div>
                            <div className='product-sort'>
                                <select>
                                    <option value="" key="">Default sorting</option>
                                    <option value="" key="">Sort by popularity</option>
                                    <option value="" key="">Sort by price</option>
                                </select>
                            </div>
                        </div>
                        <div className='product-list flex-center-spacebetween'>
                            {product.length > 0 ? (
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
                                    <div className='flex-center-center'>No products found</div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default ProductList;