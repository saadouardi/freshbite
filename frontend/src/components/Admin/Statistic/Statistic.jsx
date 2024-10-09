import React from 'react';
import './Statistic.scss';

export const Statistic = ({Icon,Title,Statistic,Link,BgColor}) => {
    return (
        <>
            <a href={Link} className='Statistic'>
                <div className='Statistic-Content' style={{backgroundColor:`${BgColor}`}}>
                    <div className='Icon-Title'>
                        <div className='Icon-Bg'>
                            <Icon/>
                        </div>
                        <p>{Title}</p>
                    </div>

                    <div className='Statistic-Text'>
                        <p>{Statistic}</p>
                    </div>
                </div>
            </a>
        </>
    )
}

