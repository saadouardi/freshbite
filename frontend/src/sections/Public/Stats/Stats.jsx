import React from 'react';
import plate from '../../../assets/images/food/burger-plate.png';
import './Stats.scss';

export const Stats = () => {
    return (
        <section className='stats'>
            <div className='Stats'>
                <div className='Container'>
                    <div className='Flex-Center flex-container'>
                        <div className='Stat'>
                            <div>
                                <h2>500+</h2>
                                <p>Order<br/>was Delivered</p>
                            </div>
                            <hr/>
                        </div>
                        <div className='Stat'>
                            <div>
                                <h2>4.9</h2>
                                <p>Our Goggle<br/>Score</p>
                            </div>
                            <hr/>
                        </div>
                        <div className='Stat'>
                            <div>
                                <h2>200+</h2>
                                <p>Natural<br/>Product we use</p>
                            </div>
                            <hr/>
                        </div>
                        <div className='Stat'>
                            <div>
                                <h2>60+</h2>
                                <p>Receipts<br/>we have</p>
                            </div>
                        </div>
                    </div>
                    <div className='Image_Conatiner'>
                        <img src={plate} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

