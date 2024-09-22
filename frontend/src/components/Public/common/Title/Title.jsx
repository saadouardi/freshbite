import React from 'react';
import './Title.scss';

export const Title = ({Image,Span,Text}) => {
    return (
        <>
            <div class="Title">
                <h1 class="section__title"><span>{Span}</span> {Text}</h1>
            </div>
        </>
    )
}
