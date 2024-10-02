import React from 'react';
import App from '../../../assets/images/promotion/app.png';
import PlayStore from '../../../assets/images/promotion/play-store.png';
import AppStore from '../../../assets/images/promotion/apple-store.png';
import './Promotion.scss';

export const Promotion = () => {
    return (
        <section className='Promotion'>
            <div className='Promotion Flex-Center'>
                <div className='promotion-title-images Flex-Center Flex-Column'>
                    <div>
                        <h1>Never Feel Hungry!<br/>Download Our Mobile App &<br/>Enjoy Delicious Food</h1>
                        <p>Ut voluptate cupidatat aute et culpa sit sint occaecat ut dolor demon<br/>consequat eu in id. Eu ex ea commodo.</p>
                    </div>
                    <div className='StoreApps Flex-Center'>
                        <img src={AppStore} alt="" />
                        <img src={PlayStore} alt="" />
                    </div>
                </div>
                <div className='App-Image'>
                    <img src={App} alt="" />
                </div>
            </div>
        </section>
    )
}