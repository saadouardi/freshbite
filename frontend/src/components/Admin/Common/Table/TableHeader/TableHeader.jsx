import React from 'react';

export const TableHeader = ({ NumofRows, Titles }) => {
    return (
        <thead>
            <tr>
                {Array.from({ length: NumofRows }).map((_, index) => (
                    <th key={index}>{Titles[index]}</th>
                ))}
            </tr>
        </thead>
    );
};


