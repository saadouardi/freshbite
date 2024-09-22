import React from 'react';
import banner from '../../../../assets/images/background/bg-s1.jpg';
import './PageSection.scss';

export const PageSection = ({Title, Description}) => {
    return (
        <>
            <div className='PageSection Flex-Center Flex-Column' style={{backgroundImage:`url('${banner}')`}}>
                <h1>{Title}</h1>
                <p>{Description}</p>
            </div>
        </>
    )
}