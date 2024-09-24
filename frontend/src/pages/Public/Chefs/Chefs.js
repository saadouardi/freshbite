import React from 'react';
import { Header } from '../../../components/Public/common/Header/Header';
import { Chefs } from '../../../sections/Public/Chefs/Chefs';
import './Chefs.scss';

const ChefsPage = () => {
    return (
        <>
            <Header/>
            <div>
                <Chefs/>
            </div>
        </>
    )
}
export default ChefsPage;
