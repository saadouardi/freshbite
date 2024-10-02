import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import { Chef } from '../../../components/Public/Chef/Chef';
import Chef1 from '../../../assets/images/chef/Chef1.png';
import Chef2 from '../../../assets/images/chef/Chef2.png';
import Chef3 from '../../../assets/images/chef/Chef6.png';
import Chef4 from '../../../assets/images/chef/Chef4.png';
import Chef5 from '../../../assets/images/chef/Chef5.png';
import './Chefs.scss';

export const Chefs = () => {
    return (
        <section>
            <Title Image='' Span='Our' Text='Best Chefs'/>
            <div>
                <div class="Flex-Center">
                    <div className='Flex-Center'>
                        <Chef 
                            Image={Chef1} 
                            Name='Sarah Johnson'
                            Position='Waiter' 
                            LinkedIn='d' 
                            Instagram='d' 
                            Twitter='d'
                        />
                        <Chef 
                            Image={Chef2}
                            Name='Ethan Rodriguez'
                            Position='Head Chef'
                            LinkedIn='d' 
                            Instagram='d' 
                            Twitter='d'
                        />
                    </div>
                    <div className='Flex-Center'>
                        <Chef 
                            Image={Chef3} 
                            Name='Emily Brooks'
                            Position='Fry Chef' 
                            LinkedIn='d' 
                            Instagram='d' 
                            Twitter='d'
                        />
                        <Chef 
                            Image={Chef4} 
                            Name='Ethan Rodriguez'
                            Position='Cashier' 
                            LinkedIn='d' 
                            Instagram='d' 
                            Twitter='d'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

