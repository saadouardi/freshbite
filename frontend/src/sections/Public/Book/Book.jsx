import React from 'react';
import { Title } from '../../../components/Public/common/Title/Title';
import { Form } from '../../../components/Public/Form/Form';
import { Schedule } from '../../../components/Public/Schedule/Schedule';

export const Book = () => {
    return (
        <section>
            <Title Image=''Span='Book now' Text='a table'/>
            <div>
                <div className='Flex-Center'>
                    <Form/>
                    <Schedule/>
                </div>
            </div>
        </section>
    )
}

